import { Unity, useUnityContext } from 'react-unity-webgl';
import { Card, Grid, Typography } from '@mui/material';

// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import paths from 'routes/paths';
// import UserListContainer from 'components/sections/user-table';
// import PageHeader from 'components/sections/user-table/PageHeader';

const UnityWebGL = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/blog/assets/webgls/build/Build/build.loader.js',
    dataUrl: '/blog/assets/webgls/build/Build/build.data',
    frameworkUrl: '/blog/assets/webgls/build/Build/build.framework.js',
    codeUrl: '/blog/assets/webgls/build/Build/build.wasm',
  });

  return (
    <Grid>
      <Grid p={2}>
        <Typography variant="h6" fontWeight={700} mb={0.5}>
          Unity WebGL Test
        </Typography>
        <Typography variant="overline" fontWeight={700}>
          - WebGL 테스트를 위한 화면 (수정중)
        </Typography>
      </Grid>
      <Card>
        <Grid>
          <div style={{ width: '100%', height: '70vh' }}>
            <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
          </div>
        </Grid>
      </Card>
    </Grid>
    // <Stack direction="column" height={1}>
    //   {/* <PageHeader
    //     title="User list"
    //     breadcrumb={[
    //       { label: 'Home', url: paths.root },
    //       { label: 'Unity', active: true },
    //     ]}
    //     actionComponent={
    //       <Stack
    //         sx={{
    //           gap: 1,
    //         }}
    //       >
    //         <Button variant="soft" color="neutral">
    //           Export
    //         </Button>
    //         <Button variant="soft" color="neutral">
    //           Import
    //         </Button>
    //       </Stack>
    //     }
    //   /> */}
    //   {/* <Paper sx={{ flex: 1, p: { xs: 3, md: 5 } }}>
    //     <UserListContainer />
    //   </Paper> */}
    // </Stack>
  );
};

export default UnityWebGL;
