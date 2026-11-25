// HTTP-adapter demo endpoint:
// POST { input, files, case_id, run_index } -> { output }.
// The SAME agent logic as agent.mjs, so both adapters yield identical verdicts.
import { createServer } from 'node:http';
import { answer } from './logic.mjs';

const PORT = Number(process.env.PORT ?? 8787);

createServer((req, res) => {
  let raw = '';
  req.on('data', (c) => (raw += c));
  req.on('end', () => {
    let input = '';
    try {
      input = JSON.parse(raw).input ?? '';
    } catch {
      input = raw;
    }
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ output: answer(input) }));
  });
}).listen(PORT, '127.0.0.1', () => {
  process.stdout.write(`generic-adapter demo server listening on http://127.0.0.1:${PORT}/\n`);
});
