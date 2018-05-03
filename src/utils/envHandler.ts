export const getEnv = () => {
  return location.hostname.match(/^stg/) ? 'staging' : process.env.NODE_ENV;
};

export const isProduction = () => getEnv() === 'production';
