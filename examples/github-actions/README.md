# Run your agent in GitHub Actions

Copy the [workflow](../../.github/workflows/7runs.yml) to `.github/workflows/7runs.yml` in your repository. To try the bundled command agent, copy the [example folder](../generic-adapter/) to `examples/generic-adapter/` in the same repository. Commit the files to your default branch.

Open **Actions → 7runs agent check → Run workflow**. The default suite runs the example's three cases seven times each. For your own agent, enter the path to its suite relative to your repository root. Make its executable and dependencies available on the runner, or configure an HTTP endpoint the runner can reach.

Open the completed run and download **7runs-reports** under **Artifacts**. Unzip it and open `report.html` for the case-by-case results. The accompanying `report.json` contains the same metrics. The workflow uploads both files before checking that every execution passed. The example should pass 21/21. A suite or infrastructure error that stops execution before a report exists fails the job at the run step.

Sign in to GitHub to download the artifact. Artifacts are available to readers of your repository for seven days, subject to your repository's retention policy. Use a private repository for confidential test cases or reports.


## Also run on pull requests

For a suite that runs without credentials, add `pull_request: {}` under `on:`, alongside `workflow_dispatch:`. Set the fallback path in `SUITE` to your suite. Pull requests use that fallback; manual runs use the path you enter. Keep pull-request runs free of model keys and agent credentials. Use a trusted manual run for an agent that needs secrets.
