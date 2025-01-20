/// <reference types="vite/client" />

interface ImportMetaEnv {  
  readonly VITE_API_URL: string;  
  readonly VITE_USE_DEV_API: boolean;  
  readonly VITE_ENABLE_LOGGING: boolean;  
}
    
interface ImportMeta {  
  readonly env: ImportMetaEnv;  
}