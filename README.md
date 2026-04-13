# vercel-301

301 redirect service — deployable on both **Vercel** and **Heroku**.

## Deploy to Vercel

Click the button below or run `vercel` in the project root.

The `vercel.json` already routes all requests to `api/index.js`.

## Deploy to Heroku

```bash
heroku create <app-name>
git push heroku main
```

Heroku will use `Procfile` to start `server.js`, which wraps the same redirect
handler (`api/index.js`) in a plain Node.js HTTP server that listens on
`process.env.PORT`.

## Configuration

Edit `api/index.js` to change the redirect rules.