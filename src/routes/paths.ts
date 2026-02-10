export const rootPaths = {
  root: '/',
  authRoot: 'auth',
};

const paths = {
  root: rootPaths.root,
  unitywebgl: `/unity`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  // starter: `/starter`,
  // users: `/users`,
  // account: `/account`,
  // notifications: `/notifications`,
  // documentation: documentationPath,

  404: `/404`,
};

export default paths;
