import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a547e0a160af0e3ed16c835875b66afb@o4507209119367168.ingest.us.sentry.io/4507209143877632",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
