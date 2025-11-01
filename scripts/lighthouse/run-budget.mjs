#!/usr/bin/env node
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const lhConfigPath = path.join(repoRoot, 'lighthouserc.json');

function resolvePnpmInvocation(args) {
  const pnpmExec = process.env.npm_execpath;
  const nodeExec = process.env.npm_node_execpath || process.execPath;

  if (!pnpmExec) {
  const fallback = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
  return { command: fallback, args };
  }

  if (pnpmExec.endsWith('.cjs') || pnpmExec.endsWith('.js')) {
    return { command: nodeExec, args: [pnpmExec, ...args] };
  }

  return { command: pnpmExec, args };
}

async function runStep(title, args) {
  console.info(`\n▶ ${title}`);
  const invocation = resolvePnpmInvocation(args);
  return new Promise((resolve, reject) => {
    const child = spawn(invocation.command, invocation.args, {
      cwd: repoRoot,
      stdio: 'inherit'
    });

    child.on('error', (error) => {
      reject(error);
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${invocation.command} ${invocation.args.join(' ')} exited with code ${code}`));
      }
    });
  });
}

async function ensureConfig() {
  if (!fs.existsSync(lhConfigPath)) {
    throw new Error(`Missing Lighthouse config at ${lhConfigPath}`);
  }
}

async function main() {
  await ensureConfig();

  const skipBuild = process.env.LHCI_SKIP_BUILD === '1';

  if (!skipBuild) {
    await runStep('Building static Next.js bundle', ['run', 'build']);
  } else {
    console.info('Skipping build because LHCI_SKIP_BUILD=1');
    if (!fs.existsSync(path.join(repoRoot, 'out'))) {
      throw new Error('Static export directory ./out is missing; cannot run Lighthouse CI');
    }
  }

  if (!fs.existsSync(path.join(repoRoot, 'out'))) {
    throw new Error('Expected static export at ./out after build, but directory is missing');
  }

  await runStep('Running Lighthouse CI budgets', ['exec', 'lhci', 'autorun', `--config=${lhConfigPath}`]);

  console.info('\n✅ Lighthouse CI budgets completed');
}

main().catch((error) => {
  console.error('\nLighthouse budget run failed:', error);
  process.exitCode = 1;
});
