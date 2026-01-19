// This file infers types for the cloudflare:workers environment from your Alchemy Worker.
// @see https://alchemy.run/concepts/bindings/#type-safe-bindings

import type{ PublicEnv } from "./env.server";
import type { CloudflareEnv } from "../alchemy.run";

declare global {
  var ENV: PublicEnv;

  interface Window {
    ENV: PublicEnv;
  }
}

declare module "cloudflare:workers" {
  namespace Cloudflare {
    export interface Env extends CloudflareEnv {}
  }
}
