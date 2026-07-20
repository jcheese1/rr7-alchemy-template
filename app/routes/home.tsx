import type { Route } from "./+types/home";
import { cloudflareContext } from "../context";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  const { env } = context.get(cloudflareContext);

  return {
    message: env.PUBLIC_VALUE_FROM_CLOUDFLARE,
    // secret: env.SECRET
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
