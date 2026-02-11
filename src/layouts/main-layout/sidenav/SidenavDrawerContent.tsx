import { useMemo } from 'react';
import { Box, Divider, IconButton, List, Toolbar, Typography } from '@mui/material';
import { useSettingsContext } from 'providers/SettingsProvider';
import sitemap from 'routes/sitemap';
import IconifyIcon from 'components/base/IconifyIcon';
import Logo from 'components/common/Logo';
import NavItem from './NavItem';
import SidenavSimpleBar from './SidenavSimpleBar';

interface SidenavDrawerContentProps {
  variant?: 'permanent' | 'temporary';
}

const SidenavDrawerContent = ({ variant = 'permanent' }: SidenavDrawerContentProps) => {
  const {
    config: { sidenavCollapsed, openNavbarDrawer },
    setConfig,
  } = useSettingsContext();

  const expanded = useMemo(
    () => variant === 'temporary' || (variant === 'permanent' && !sidenavCollapsed),
    [variant, sidenavCollapsed],
  );

  const toggleNavbarDrawer = () => {
    setConfig({ openNavbarDrawer: !openNavbarDrawer });
  };

  return (
    <>
      <Toolbar variant="appbar" sx={{ display: 'block', px: { xs: 0 } }}>
        <Box
          sx={[
            {
              height: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            !expanded && {
              justifyContent: 'center',
            },
            expanded && {
              pl: { xs: 4, md: 6 },
              pr: { xs: 2, md: 3 },
            },
          ]}
        >
          <Logo showName={expanded} />
          <IconButton sx={{ mt: 1, display: { md: 'none' } }} onClick={toggleNavbarDrawer}>
            <IconifyIcon icon="material-symbols:left-panel-close-outline" fontSize={20} />
          </IconButton>
        </Box>
      </Toolbar>

      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        <SidenavSimpleBar>
          <Box
            sx={[
              {
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              },
              !expanded && {
                px: 2,
              },
              expanded && {
                px: { xs: 2, md: 4 },
              },
            ]}
          >
            <div>
              {sitemap.map((menu, idx) => (
                <Box key={menu.id}>
                  {menu.subheader && expanded && (
                    <Typography
                      sx={{
                        px: 1,
                        pt: idx === 0 ? 0 : 2,
                        pb: 1,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: 0.8,
                        color: 'text.disabled',
                      }}
                    >
                      {menu.subheader.toUpperCase()}
                    </Typography>
                  )}

                  <List
                    dense
                    sx={{
                      mb: idx === sitemap.length - 1 ? 0 : 2,
                      pb: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    {menu.items.map((item) => (
                      <NavItem key={item.pathName} item={item} level={0} />
                    ))}
                  </List>

                  {idx !== sitemap.length - 1 && expanded && (
                    <Divider sx={{ mx: 1, my: 1.5, borderColor: 'divider' }} />
                  )}
                </Box>
              ))}
            </div>
          </Box>
        </SidenavSimpleBar>
      </Box>
    </>
  );
};

export default SidenavDrawerContent;
