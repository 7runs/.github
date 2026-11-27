# 7runs

**Created by [Payam Mohammadi](https://impayam.com).**

**436 npm downloads across released versions** · **168 downloads of v0.1.0 in the recorded seven-day report**

Download snapshot checked on **November 27, 2026**. [All-version count](https://api.npmjs.org/downloads/point/2026-07-17:2026-11-27/@7runs%2F7runs) · [Per-version count](https://api.npmjs.org/versions/@7runs%2F7runs/last-week) · [Recorded snapshot](../docs/npm-downloads-2026-11-27.json)

[Meet the creator](https://impayam.com) · [Star the public 7runs guides](https://github.com/7runs/.github)

Run the same prompt several times and see how often your agent passes the checks you set. Inspect the answer behind a failure, then compare runs after changing a prompt or model.

## Get your first report

Use Git, Node.js 20 or later and npm. Download the engine from GitHub and build it locally. npm installs the dependencies; it does not download a published 7runs package.

> The engine repository is currently private while public access is being prepared. Source installation and the workflow below require repository access; anonymous installation is not available yet.

```sh
git clone https://github.com/7runs/7runs.git
cd 7runs
npm ci
npm run build:cli
mkdir 7runs-demo
cd 7runs-demo
node ../dist/index.js init
node ../dist/index.js run example-suite.yaml --reps 7
node ../dist/index.js report latest
```

Expect **14/14 executions passed**. The suite checks a text verdict and a JSON response, seven times each. Open the HTML path printed by the last command to see the results. The JSON report is beside it.

## Test your own agent

| Your starting point | What to do |
|---|---|
| Your agent runs as a script, binary or SDK wrapper | [Connect a local command](https://github.com/7runs/.github/blob/main/examples/generic-adapter/README.md#connect-a-local-command). Send the prompt on stdin and print the answer on stdout. |
| Your agent accepts HTTP requests | [Connect an HTTP endpoint](https://github.com/7runs/.github/blob/main/examples/generic-adapter/README.md#connect-an-http-endpoint). Set the endpoint URL, response field and checks. |
| You want to test your agent in its GitHub repository | [Set up GitHub Actions and download the reports](https://github.com/7runs/.github/blob/main/examples/github-actions/README.md). |

You can [view workflow runs](https://github.com/7runs/.github/actions/workflows/7runs.yml) in this public repository.

The [example files](https://github.com/7runs/.github/tree/main/examples/generic-adapter) include both adapters and the same three support scenarios so you can try either path before connecting your own agent.

## Engine license

Independent builders can test their own projects for free, including apps they sell. Testing for an employer, client company or other organization requires an organization license, even if one person runs the tests. [Request an organization license](https://7runs.dev/#request-license).

See how four code-review agents performed across three model tiers in the [benchmark report](https://7runs.dev/leaderboard). The [leaderboard repository](https://github.com/7runs/leaderboard) includes the test cases and raw runs.

[7runs.dev](https://7runs.dev/) · [@get7runs on X](https://x.com/get7runs)
