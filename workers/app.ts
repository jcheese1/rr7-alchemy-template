import { createRequestHandler, RouterContextProvider } from "react-router";

import { cloudflareContext } from "../app/context";
import type { CloudflareEnv } from "../alchemy.run";
import { Counter } from "./do/counter";

export { Counter };

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request: Request, env: CloudflareEnv, ctx: ExecutionContext) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/counter")) {
      const id = env.COUNTER.idFromName("A");
      const stub = env.COUNTER.get(id);
      return stub.increment();
    }

    const context = new RouterContextProvider();
    context.set(cloudflareContext, { ctx, env });

    return requestHandler(request, context);
  },
};
