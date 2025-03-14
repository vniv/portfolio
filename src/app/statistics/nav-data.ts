export const navbarData = [
    {
        routerLink: '/',
        icon: 'home',
        label: 'Accueil'
    },
    {
        routerLink: '/competences',
        icon: 'list',
        label: 'Mes compétences',
        items: [
            { label: 'Angular', routerLink: '/competences/angular', isTech: true },
            { label: 'SQL', routerLink: '/competences/sql', isTech: true },
            { label: 'Autonomie', routerLink: '/competences/autonomie', isTech: false },
            { label: 'Git', routerLink: '/competences/git', isTech: true },
            { label: 'Java J2EE', routerLink: '/competences/j2ee', isTech: true },
            { label: 'UI-UX', routerLink: '/competences/uiux', isTech: true },
            { label: 'Agilite', routerLink: '/competences/agilite', isTech: false },
            { label: 'Résolution de problèmes', routerLink: '/competences/resolution', isTech: false },
            { label: 'Communication', routerLink: '/competences/communication', isTech: false },
            { label: 'Java', routerLink: '/competences/java', isTech: true }
        ]
    },
    {
        routerLink: '/statistics',
        icon: 'done_outline',
        label: 'Mes réalisations',
        reals: [
            { label: 'Grand Angle', routerLink: '/realisations/gda'},
            { label: 'Blue Ice', routerLink: '/realisations/blueice'},
            { label: 'Link & Trande', routerLink: '/realisations/linkntrade'},
            { label: 'Simpl-e', routerLink: '/realisations/simple'},
            { label: 'Personnalisation', routerLink: '/realisations/perso'}
        ]
    },
    {
        routerLink: '/propos',
        icon: 'forum',
        label: 'Contact'
    },
];