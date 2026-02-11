import { HTMLAttributeAnchorTarget } from 'react';
import { SxProps } from '@mui/material';
import { rootPaths } from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  key?: string;
  selectionPrefix?: string;
  path?: string;
  target?: HTMLAttributeAnchorTarget;
  active?: boolean;
  icon?: string;
  iconSx?: SxProps;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  key?: string;
  subheader?: string;
  icon: string;
  target?: HTMLAttributeAnchorTarget;
  iconSx?: SxProps;
  items: SubMenuItem[];
}

// 실제 화면에 보이는 라우트
const sitemap: MenuItem[] = [
  {
    id: 'menu',
    subheader: 'MENU',
    icon: 'material-symbols:view-quilt-outline',
    items: [
      {
        name: 'Home',
        path: rootPaths.root,
        pathName: 'home',
        icon: 'material-symbols:home-outline',
      },
    ],
  },
  {
    id: 'projects',
    subheader: 'PROJECTS',
    icon: 'material-symbols:view-quilt-outline',
    items: [
      {
        name: 'Unity-WebGL',
        path: '/Unity',
        pathName: 'unity',
        icon: 'material-symbols:deployed-code-outline',
      },
      {
        name: 'Nimbus CMS',
        path: '/nimbus',
        pathName: 'nimbus',
        icon: 'material-symbols:deployed-code-outline',
      },
      {
        name: 'DevConnect',
        path: '/devconnect',
        pathName: 'devconnect',
        icon: 'material-symbols:deployed-code-outline',
      },
    ],
  },
];

export default sitemap;
