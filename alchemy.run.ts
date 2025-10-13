/// <reference types="@types/bun" />

import alchemy, { Scope } from "alchemy";
import { ReactRouter } from "alchemy/cloudflare";
import { CloudflareStateStore, FileSystemStateStore } from "alchemy/state";
import { GitHubComment } from "alchemy/github";

const stage = process.env.STAGE ?? "dev";

const fileStateStore = (scope: Scope) => new FileSystemStateStore(scope);

const cloudflareStateStore = (scope: Scope) => new CloudflareStateStore(scope, {
  stateToken: alchemy.secret(process.env.ALCHEMY_STATE_TOKEN),
  scriptName: `react-router-alchemy-cloudflare-app-site-${stage}`
});

const app = await alchemy("react-router-alchemy-cloudflare-app", {
  stage,
  password: process.env.ALCHEMY_PASSWORD as string,
  stateStore: stage === "dev" ? fileStateStore : cloudflareStateStore,
});

export const worker = await ReactRouter("react-router-alchemy-cloudflare-app-site", {
  bindings: {
    PUBLIC_VALUE_FROM_CLOUDFLARE: process.env.PUBLIC_VALUE_FROM_CLOUDFLARE as string,
    SECRET: alchemy.secret("SECRET")
  },
});


if (process.env.PULL_REQUEST) {
  // if this is a PR, add a comment to the PR with the preview URL
  // it will auto-update with each push
  await GitHubComment("preview-comment", {
    owner: "your-username",
    repository: "your-repo",
    issueNumber: Number(process.env.PULL_REQUEST),
    body: `
     ## 🚀 Preview Deployed

     Your changes have been deployed to a preview environment:

     **🌐 Website:** ${worker.url}

     Built from commit ${process.env.GITHUB_SHA?.slice(0, 7)}

     ---
     <sub>🤖 This comment updates automatically with each push.</sub>`,
  });
}

// types
export type CloudflareEnv = typeof worker.Env;

export type Env = {
  [K in keyof CloudflareEnv as CloudflareEnv[K] extends string
    ? K
    : never]: CloudflareEnv[K];
};

console.log({
  url: worker.url,
  name: app.name
});

await app.finalize();


