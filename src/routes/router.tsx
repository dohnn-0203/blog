import { Suspense, lazy } from 'react';
import { Outlet, RouteObject, createBrowserRouter, useLocation } from 'react-router';
import App from 'App';
import AuthLayout from 'layouts/auth-layout';
import MainLayout from 'layouts/main-layout';
import Page404 from 'sample-pages/errors/Page404';
import PageLoader from 'components/loading/PageLoader';
import paths, { rootPaths } from './paths';

const UnityWebGL = lazy(() => import('pages/unity-wabgl/unity'));
const MainPage = lazy(() => import('pages/mainpage/mainpage'));

// const Analytics = lazy(() => import('sample-pages/dashboard/Analytics'));
// const UserList = lazy(() => import('sample-pages/users/UserList'));
// const Starter = lazy(() => import('sample-pages/others/Starter'));
// const Account = lazy(() => import('sample-pages/others/Account'));

const Login = lazy(() => import('sample-pages/authentication/Login'));
const Signup = lazy(() => import('sample-pages/authentication/Signup'));

export const SuspenseOutlet = () => {
  const location = useLocation();

  return (
    <Suspense key={location.pathname} fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  );
};

export const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <SuspenseOutlet />
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: paths.unitywebgl,
            element: <UnityWebGL />,
          },
          // {
          //   path: paths.users,
          //   element: <UserList />,
          // },
          // {
          //   path: paths.account,
          //   element: <Account />,
          // },
          // {
          //   path: paths.starter,
          //   element: <Starter />,
          // },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <SuspenseOutlet />
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <Signup />,
          },
        ],
      },

      {
        path: paths['404'],
        element: <Page404 />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/blog',
});

export default router;
