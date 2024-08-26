import { MenuList } from "./interface/menu.interface";

export const MENU: MenuList = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: '',
      color: '#ff7f0e',
    },
    {
      title: 'Usuarios',
      icon: 'add',
      link: 'users',
      color: '#ff7f0e',
    },
    {
      title: 'Usuario',
      icon: 'add',
      link: './user',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'user',
          icon: 'money',
          link: './user',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
    {
      title: 'login',
      icon: 'add',
      link: './auth/login',
      color: '#ff7f0e',
    },
  ];