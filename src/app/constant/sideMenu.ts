export type SideMenuOptions = {
  name: string;
  id: string;
  path: string;
  icon: string;
  activeIcon: string;
};

export const sideMenu: SideMenuOptions[] = [
  {
    name: 'Home',
    path: '',
    id: 'home',
    icon: '/images/homeIcon.png',
    activeIcon: '/images/homeIcon.png',
  },
  {
    name: 'Manage Member',
    id: 'manage-member',
    path: 'manage-member',
    icon: '/images/usersIcon.png',
    activeIcon: '/images/activeUsersIcon.png',
  },
];
