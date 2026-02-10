import { ReactElement } from 'react';
import { Stack, SxProps } from '@mui/material';
import ProfileMenu from './ProfileMenu';
import ThemeToggler from './ThemeToggler';

// import LanguageMenu from './LanguageMenu';
// import NotificationMenu from './NotificationMenu';

interface AppbarActionItemsProps {
  sx?: SxProps;
  searchComponent?: ReactElement;
}

const AppbarActionItems = ({ sx, searchComponent }: AppbarActionItemsProps) => {
  return (
    <Stack
      className="action-items"
      spacing={1}
      sx={{
        alignItems: 'center',
        ml: 'auto',
        ...sx,
      }}
    >
      {searchComponent}
      {/* <LanguageMenu /> */}
      {/* <NotificationMenu /> */}
      <ThemeToggler />
      <ProfileMenu />
    </Stack>
  );
};

export default AppbarActionItems;
