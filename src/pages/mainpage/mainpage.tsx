import { Card, Grid, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <Grid>
      <Grid p={2}>
        <Typography variant="h6" fontWeight={700} mb={0.5}>
          메인페이지
        </Typography>
        <Typography variant="overline" fontWeight={700}>
          - 접속시 뜨는 화면
        </Typography>
      </Grid>
      <Card>
        <Grid>
          <Typography variant="h1" fontWeight={700}>
            준비중
          </Typography>
        </Grid>
      </Card>
    </Grid>
  );
};

export default MainPage;
