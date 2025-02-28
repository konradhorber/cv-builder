import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.cvbuilder',
  appName: 'CV builder',
  webDir: 'dist',
  plugins: {
    'LiveUpdate': {
      'appId': 'c0883065-b6f1-4d03-b20b-d94179e0846e'
    }
  }
};

export default config;
