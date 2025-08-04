# Authentication

## Tech Stack

[Supabase Auth](https://supabase.com/docs/guides/auth)
[Brevo](https://www.brevo.com/)

## Description

In "Portal da RECONQUISTA" we use Supabase Auth for authentication.

Users can authenticate using [Passwordless email logins](https://supabase.com/docs/guides/auth/auth-email-passwordless) using `Magic Links`.

To send custom `Magic Link` emails using Brevo's API we are using [Supabase Send Email Auth Hook](https://supabase.com/docs/guides/auth/auth-hooks/send-email-hook)

We have a nuxt server HTTP endpoint `server/api/auth/send-email` and we use it for our `send_email` HTTP hook. On the `recon` repository, you can find the configuration for this hook:

```toml
[auth.hook.send_email]
enabled = true
uri = "<uri>"
```

In Brevo, we have a Magic Link Email Template that this endpoint utilizes to send authentication emails to users.