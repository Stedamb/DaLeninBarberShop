export interface Route {
  path: string;
  label: string;
  icon?: string;
}

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
