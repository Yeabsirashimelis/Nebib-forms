import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://nebib-forms-nebib.vercel.app", // the base url of your auth server
});
