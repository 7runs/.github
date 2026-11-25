# 7runs

**Run your AI agent seven times. See which tests pass every time.**

Give 7runs a prompt and a check for the answer you expect. It repeats each case and shows which runs passed, which failed, and the answers behind them. After changing a model or prompt, compare the results with an earlier run.

See how four code-review agents performed across three models in the [benchmark report](https://7runs.dev/leaderboard). The [leaderboard repository](https://github.com/7runs/leaderboard) includes the test cases and raw runs.

## Try the CLI

With Node.js 20 or later, run the local example in a new folder. No model account or API key is needed.

```sh
npm install --global @7runs/7runs@0.1.0
mkdir 7runs-demo
cd 7runs-demo
7runs init
7runs run example-suite.yaml --reps 7
7runs report latest
```

The two example cases each pass seven times (14/14). Open the printed HTML path to inspect the results, or read the JSON report beside it.

## Engine license

If you work alone on your own project, you can use the engine for free, including to test an app you sell. If you test for your employer, a client company or another organization, that organization needs a license. [Ask about an organization license](mailto:hello@7runs.dev?subject=7runs%20organization%20license).

[7runs.dev](https://7runs.dev/) · [@get7runs on X](https://x.com/get7runs)
