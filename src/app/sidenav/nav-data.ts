import { INavData } from "./interface-nav";

export const navbarData: INavData[] = [
    {
        routerLink: '/',
        icon: 'home',
        label: 'Accueil',
        items: [
            { label: 'Overview', routerLink: '/dashboard/overview' },
            { label: 'Stats', routerLink: '/dashboard/stats' }
        ]
    },
    {
        routerLink: '/products',
        icon: 'list',
        label: 'Mes compétences',
        items: [
            { label: 'Overview', routerLink: '/dashboard/overview' },
            { label: 'Stats', routerLink: '/dashboard/stats' }
        ]
    },
    {
        routerLink: '/statistics',
        icon: 'done_outline',
        label: 'Mes réalisations',
    },
    {
        routerLink: '/settings',
        icon: 'forum',
        label: 'Contact',
    },
];