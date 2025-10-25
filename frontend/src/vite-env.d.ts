/// <reference types="vite/client" />

interface ImportMetaEnv {
  // API Configuration
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_ENV: 'development' | 'production' | 'test';
  
  // Authentication
  readonly VITE_JWT_SECRET: string;
  readonly VITE_TOKEN_KEY: string;
  
  // Optional third-party services
  readonly VITE_GOOGLE_ANALYTICS_ID?: string;
  readonly VITE_SENTRY_DSN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
