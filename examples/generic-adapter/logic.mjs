// The "agent under test" for the generic-adapter demo. A trivial, deterministic
// classifier so the SAME cases produce the SAME verdict whether they are run
// through the `command` adapter (agent.mjs) or the `http` adapter (server.mjs) —
// demonstrating that scoring is provider-independent.
export function answer(prompt) {
  const p = String(prompt).toLowerCase();
  if (p.includes('refund')) return 'VERDICT: REFUND_OK — within the 14-day window.';
  if (p.includes('cancel')) return 'VERDICT: CANCEL — self-serve in Settings, no charge next period.';
  return 'VERDICT: UNKNOWN — escalating to a human.';
}
