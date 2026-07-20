import { createContext } from "react-router";

import type { CloudflareEnv } from "../alchemy.run";

export interface CloudflareContext {
  ctx: ExecutionContext;
  env: CloudflareEnv;
}

export const cloudflareContext = createContext<CloudflareContext>();
