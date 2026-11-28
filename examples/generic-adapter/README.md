# Connect your agent to 7runs

Choose the interface your agent already has. Both examples use the same three cases about refunds, cancellation and an unclear request. The included agent is a local Node script with fixed answers, so you can check the connection without model credentials.

## Get the files

Use Git, Node.js 20 or later and npm. The engine checkout includes the adapter examples.

```sh
git clone https://github.com/7runs/engine.git
cd engine
npm ci
npm run build:cli
```

You can also [download the engine source as a ZIP](https://github.com/7runs/engine/archive/refs/heads/main.zip). Unzip it, open a terminal in the directory containing `package.json`, then run `npm ci` and `npm run build:cli`. Run all commands below from that engine directory.

## Connect a local command

```sh
node dist/index.js run examples/generic-adapter/suite-command.yaml --reps 7
node dist/index.js report latest
```

The included [suite](suite-command.yaml) starts [agent.mjs](agent.mjs) directly for each execution. The script reads the prompt from stdin and writes the answer to stdout. Expect **21/21 executions passed**.

To test your own program, edit the suite’s `adapter.command` array to hold your executable and its arguments. For example, put a Node wrapper at `agent.mjs` in your working directory and use this adapter. The wrapper should read stdin through end of input, call your agent and write its final answer to stdout. Send diagnostic logs to stderr.

```yaml
adapter:
  type: command
  command: ["node", "agent.mjs"]
  cwd: "."
  env_passthrough: ["PATH"]
```

Here `cwd` is relative to the directory where you launch 7runs. If your wrapper needs credentials, pass the **names** of the required environment variables in `env_passthrough` and set their values in your shell or secret store. Replace the three example cases with inputs and checks for your agent, then rerun the two commands above.

## Connect an HTTP endpoint

Start the [example server](server.mjs) in a terminal at the repository root.

```sh
node examples/generic-adapter/server.mjs
```

In a second terminal at the same repository root, run the [HTTP suite](suite-http.yaml).

```sh
node dist/index.js run examples/generic-adapter/suite-http.yaml --reps 7
node dist/index.js report latest
```

The server listens on `127.0.0.1:8787` and uses the same [agent logic](logic.mjs) as the command example. Expect **21/21 executions passed**. Stop the sample server with Ctrl+C when finished.

To test your own endpoint, change `adapter.url` in the HTTP suite and set `response_path` to the JSON field containing the final answer. The example uses `output`. For a response such as `{"data":{"answer":"REFUND_OK"}}`, use `data.answer`. An endpoint that returns plain text can use `response_format: text` instead. By default, 7runs sends one JSON POST per execution. The first repetition has `run_index: 0`. A request without attachments looks like this.

```json
{"input":"I subscribed 5 days ago, can I get a refund?","files":[],"case_id":"refund","run_index":0}
```

If your endpoint requires a bearer token, add these lines inside the suite’s `adapter` block. Set `MY_AGENT_TOKEN` in your environment. The suite keeps the variable reference, so the token value stays out of the YAML.

```yaml
  headers:
    Authorization: "Bearer ${MY_AGENT_TOKEN}"
```

Use inputs and files you intend to share with that endpoint. Attachments travel in the request body. Replace the example prompts and checks, then rerun the HTTP suite and report commands.

## Read a failure

Open the printed `report.html` path to see the overall pass rate and which cases pass consistently or intermittently. For machine-readable metrics, open `report.json` in the same directory. To inspect a failed answer, match its `caseId` and zero-based `rep` in `results.jsonl` with `raw/<caseId>/<rep>.json` alongside the report. Local outputs can include inputs, answers and traces. Keep `.7runs/` out of public commits when testing private data.

## Run the suite in your repository

From the engine checkout, copy the adapter files into your own repository. If your repository is next to this checkout and is named `my-agent`, these commands copy just the examples into it.

```sh
mkdir -p ../my-agent/examples
cp -R examples/generic-adapter ../my-agent/examples/
```

Keep the `examples/generic-adapter/` path when trying the included suites. To run your suite on GitHub, follow the [workflow setup and report download instructions](../github-actions/README.md). Add `.7runs/` to your own repository’s `.gitignore`. Review what run data you want to retain in CI before running it on private inputs.
