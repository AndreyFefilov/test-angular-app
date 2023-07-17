export const environment = {
  production: false,
  api: 'https://api.nutson.us/api/v2/',
  auth: {
    url: 'https://api.nutson.us/api/v3/auth/',
    body: {
      installation_token: '2kxlfAbJwFdAuh0',
      device: {
        platform: 'Web',
        platform_version: 'Web-1.0.0'
      },
      application: {
        app_name: 'Test WEB App',
        app_version: '1.0',
        app_build: 'development',
        app_type: 'watch_to_earn'
      }
    }
  },
};

