# Environment Variables

We have two types of environment variables:

- Public
- Private

The public ones can be shared with the users (on the client side) and the private ones must be kept secret (never leave the server).

The private environment variables MUST be kept OUT of version control, i.e. `.env` should NOT contain private environment variables. The `.env.local` file can and should contain private environment variables for development purposes.

Private environment variables should be entered securely in Vercel's `Environment Variables` project settings for the production environment.

For public environment variables, add them to the `.env` & `.env.local` files and also configure them in `nuxt.config.ts`. Again, in local environment, add all environment variables, including the private ones in `.env.local` - and they also must be defined in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  ...,
  runtimeConfig: {
    MY_PRIVATE_ENV_VAR: process.env.MY_PRIVATE_ENV_VAR,
    public: {
      MY_PUBLIC_ENV_VAR: process.env.MY_PUBLIC_ENV_VAR
    }
  },
  ...
})
```