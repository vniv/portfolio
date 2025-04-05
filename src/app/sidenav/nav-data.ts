import { INavData } from "./interface-nav";

export const navbarData: INavData[] = [
    {
        routerLink: '/home',
        icon: 'home',
        label: 'Accueil'
    },
    {
        icon: 'list',
        label: 'Mes compétences',
        items: [
            { label: 'Toutes mes compétences', routerLink: '/competences' },
            { 
                label: 'Techniques', 
                routerLink: '', 
                items: [
                    { label: 'Angular', routerLink: '/competences/1' },
                    { label: 'Git', routerLink: '/competences/2' },
                    { label: 'SQL', routerLink: '/competences/3' },
                    { label: 'Java', routerLink: '/competences/4' },
                    { label: 'Tests unitaires / fonctionnels', routerLink: '/competences/8' },
                    { label: 'UX/UI', routerLink: '/competences/10' },
                ] 
            },
            { 
                label: 'Humaines', 
                routerLink: '', 
                items: [
                    { label: 'Méthode Agile', routerLink: '/competences/5' },
                    { label: 'Autonomie', routerLink: '/competences/6' },
                    { label: 'Résolution de problème', routerLink: '/competences/7' },
                    { label: 'Rédaction de documents', routerLink: '/competences/9' },
                ] 
            },
        ]
    },
    {
        icon: 'done_outline',
        label: 'Mes réalisations',
        items: [
            { label: 'Toutes mes réalisations', routerLink: '/realisations' },
            { label: 'Link&Trade', routerLink: '/realisations/1' },
            { label: 'Blue Ice', routerLink: '/realisations/2' },
            { label: 'Grand Angle', routerLink: '/realisations/3' },
            { label: 'TCG Card', routerLink: '/realisations/4' },
            { label: 'Simpl-E', routerLink: '/realisations/5' },
        ]
    },
    {
        routerLink: '/settings',
        icon: 'forum',
        label: 'Contact',
    },
];