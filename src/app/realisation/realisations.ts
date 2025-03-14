export const realisations = [
    {
        id: 1,
        name: 'Link&Trade',
        prelude: `Il est facile de croire que la société d’aujourd’hui est un société de consommation amenant à acheter un quantité de produits dépassant les besoins. Le bon exemple pour démontrer cela est la consommation de vêtements, se retrouvant souvent avec un surplus que l’on utilise même plus.
Pour éviter cela, la seconde main a été inventée pour redonner vie aux vêtements qui ne sont plus portés. C’est dans ce contexte là que le projet Link&Trade est né, idée à l’origine des élèves du lycée de Borda à Dax, sur lequel j'ai travaillé pendant mon Bachelor Ingénierie Logiciel. Ce concept avait pour but de créer une application web permettant à tous lycéens de pouvoir ajouter une annonce de vente d’un vêtement. Pour des soucis de sécurité, les ventes ne se faisaient pas en ligne mais la personne intéressée par une annonce pouvait discuter avec l’élève à l’origine de l’annonce via un chat intégré, puis se donner rendez-vous dans la cour pour échanger les vêtements et l’argent en main propre.
Chaque annonce était liée à un compte utilisateur, seuls les lycéens ayant un compte pouvaient mettre en ligne des annonces ou bien discuter avec d’autres élèves. Un cadre non stricte mais défini était imposé par le lycée pour une réalisation ne pouvant pas mettre en danger la sécurité des élèves que ce soit par des arnaques ou bien des rencontres hors lycée. Les enjeux et les objectifs de ce projet étant à l’encontre de la seconde main, cela a permis de relier le développement à l’environnement, surtout l’apprentissage à la surconsommation.
`,
        objectif: `Link&Trade est une application web conçue pour faciliter l'échange de vêtements d'occasion entre les élèves du lycée de Borda à Dax. Elle s'inscrit dans une démarche de consommation responsable et de développement durable, en promouvant la seconde main comme alternative à la surconsommation. L'application permet aux lycéens de mettre en vente leurs vêtements inutilisés, de discuter avec les acheteurs potentiels via un chat intégré et de convenir d'un rendez-vous dans la cour du lycée pour finaliser la transaction.


Contexte :
Constat de la surconsommation de vêtements et de l'importance croissante de la seconde main.
Volonté du lycée de Borda de soutenir les initiatives étudiantes et de promouvoir le développement durable.
Besoin d'un cadre sécurisé pour les échanges entre lycéens.
Objectifs :
Créer une plateforme en ligne conviviale et sécurisée pour l'échange de vêtements entre lycéens.
Encourager la consommation responsable et la réduction des déchets.
Favoriser le lien social et l'entraide entre les élèves.
Sensibiliser les jeunes à l'impact environnemental de la surconsommation.


Enjeux :
Réussir à développer une application fonctionnelle, ergonomique et sécurisée.
Susciter l'adhésion des lycéens et encourager leur participation active.
Assurer la pérennité du projet et son intégration dans la vie du lycée.
Répondre aux attentes du lycée en matière de sécurité et de respect des règles.
Risques :
Risque de non-adoption de l'application par les lycéens.
Risque de problèmes techniques ou de bugs.
Risque de dérives ou d'utilisations inappropriées de l'application (arnaques, rencontres dangereuses).
Risques liés à la gestion des données personnelles.
Risque de surcharge des serveurs si l'application est trop populaire.
`,
        etape: `Dans le cadre de ce projet, aucune étude de marché ou de solutions existantes n’a été nécessaire. Un recensement des besoins et de l’infrastructure du lycée a été la première étape dans la conception de l’application web Link&Trade. Nous étions 4 développeurs à travailler sur la réalisation de cette application amenant à l’utilisation de l’organisation agile (Méthode Scrum). Cette organisation de travail nous a permis de réaliser les fonctionnalités listées avec les lycéens et les responsables du projet. Nous avons travaillé sur des temps de réalisation de 4 semaines ou à l'issue de chacunes de ces périodes un point avec les lycéens a été fait. Nous avons dû rédiger un cahier des charges détaillant les fonctionnalités nécessaires (pagination, chat de discussion, filtres, etc), et en déterminer les travaux à faire en équipe durant ces temps de réalisation.
Cette application a été réalisée en Angular pour un affichage stylisé et répondant aux demandes des lycéens. En tant que développeur principal, j'ai apporté une expertise technique en développement front-end et à l’intégration du framework Tailwind CSS (un framework front-end est un service à ajouter à un projet pour ajouter des fonctionnalités sur la partie visible de l'utilisateur). J’ai assuré la partie UX/UI des pages de l’application, sur l’affichage des annonces et les fonctionnalités pratiques dédiées. 
La première mise en pratique  de mes connaissances d’Angular s’est faite par la création des composants pour l’affichage des articles. La seconde fonctionnalité que j’ai mise en place fut les filtres, l’intention était de faciliter la recherche de vêtement pour les lycéens. Lors de l’ajout d’un article par un élève, il devait définir un ensemble et sous-ensemble au vêtement pour pouvoir être catégorisé via les filtres.

La dernière fonctionnalité sur laquelle j’ai pu accroître mes connaissances en Angular et sur l’importance de l’UX/UI dans la conception d’un projet en développement web a été la pagination. Pour cela j’ai utilisé Angular Material, qui est une bibliothèque de composants d'interface utilisateur (UI) pour Angular, qui implémente les spécifications de Material Design de Google. Ainsi un outil appelé “mat-paginator” permet de facilement filtrer ou limiter l’affichage d’un nombre d’éléments. Dans mon cas de mise en pratique, ce mat-paginator m’a permis de limiter l’affichage du nombre d’articles pour éviter un chargement long si un grand nombre de photos sont à afficher.
`,
        resultat: `Link&Trade a permis aux élèves du lycée de Borda de s'impliquer activement dans un projet à la fois pratique et engagé sur les enjeux environnementaux. Grâce à l’application, ils ont eu la possibilité de donner une nouvelle vie à des vêtements qu’ils n’utilisaient plus, tout en facilitant les échanges avec leurs camarades. Cette initiative a non seulement contribué à réduire la consommation de produits neufs, mais elle a également renforcé les liens sociaux entre les élèves.
Le projet Link&Trade a été une initiative innovante et responsable qui visait à promouvoir l'échange de vêtements d'occasion entre les élèves du lycée de Borda à Dax. Cette plateforme web a été développée dans une logique de consommation responsable et de développement durable, en encourageant les lycéens à opter pour la seconde main plutôt que la surconsommation. Mon rôle principal en tant que développeur front-end a consisté à concevoir et mettre en œuvre des fonctionnalités clés de l'application, tout en veillant à la qualité de l'expérience utilisateur (UX) et de l'interface utilisateur (UI).
`,
        lendemain: `Pour un avenir immédiat, l’importance serait les performances de l’application et l’adaptation des utilisateurs. Le défi majeur résidant dans l'utilisation quotidienne par les lycéens. Le projet a été conçu pour être simple et intuitif, mais il est nécessaire de s'assurer que l'application est réellement utilisée de manière régulière par les élèves. Pour les performances, il s’agirait de vérifier si les images affichées ne rendent pas problématiques les chargements des annonces et donc rendent lents l’affichage de l’application. 

Pour un avenir plus lointain, même si des mesures de sécurité ont été mises en place (notamment la possibilité de discuter dans un chat intégré et de se rencontrer uniquement dans la cour du lycée), il est important de suivre les retours des utilisateurs pour repérer d’éventuelles failles ou dérives une partie sécurité pourrait être apporter en plus sur l’utilisation d’un chat de discussion pour prendre des rendez-vous. Pour cela un suivi des géolocalisation ou bien des points de ventes fixés par le lycée pourrait être un apport adéquat sur les problèmes que pourrait rencontrer l’utilisation d’un chat de discussion. De plus, si l'application fonctionne bien au lycée de Borda, une expansion vers d’autres établissements scolaires pourrait être envisagée. L’objectif serait de créer un réseau d’échanges entre différents lycées, ce qui augmenterait le nombre d’annonces et d’utilisateurs.`,
        comps : [
            {
                id: 1,
                nameComp: 'Angular'
            },
            {
                
                id: 8,
                nameComp: 'Tests unitaire / fonctionnels'
            },
            {
                
                id: 2,
                nameComp: 'Git'
            },
            {
                
                id: 9,
                nameComp: 'UX/UI'
            },
            {
                id: 5,
                nameComp: 'Méthode Agile'
            },
            {
                id: 10,
                nameComp: 'Rédaction de document'
            }
        ]
    },
    {
        id: 2,
        name: 'Blue Ice',
        prelude: `En tant que développeur principal, j'ai apporté une expertise technique en développement mobile et en intégration de services de géolocalisation. J'ai assuré une communication fluide avec les autres acteurs du projet, ce qui a contribué à un déploiement rapide de l’application.
Ce projet nommé “Blue Ice” m'a permis de renforcer mes compétences en développement mobile pour Android, en gestion de projet agile, et en intégration de fonctionnalités de géolocalisation. J'ai appris l'importance de la collaboration en équipe et de l'écoute active des besoins des utilisateurs et des centres de secours. Les enjeux et les objectifs de ce projet étant à l’encontre des animaux marins, cela a permis de relier le développement à l’environnement, surtout le sauvetage d’animaux.
`,
        objectif: `Le projet consiste à développer une application mobile nommée "Blue Ice" qui permet aux utilisateurs de signaler des animaux marins échoués ou blessés. L'objectif principal est de faciliter et d'accélérer la prise en charge de ces animaux par les centres de secours marins adéquats. L'application vise à améliorer la coordination entre les citoyens et les professionnels de la faune marine, à réduire le temps de réponse et à augmenter les chances de survie des animaux en détresse.
Avec l'augmentation des activités humaines et le changement climatique, les incidents impliquant des animaux marins échoués ou blessés sont de plus en plus fréquents. Les centres de secours marins manquent souvent de signalements précis et rapides, ce qui complique les interventions. En facilitant les signalements via une application mobile, Blue Ice vise à combler cette lacune et à optimiser les opérations de sauvetage.
Les principaux enjeux de ce projet sont de créer une application intuitive et fiable, de garantir la précision des informations transmises, et de coordonner efficacement avec les centres de secours marins, et tout ça dans un temps rapide car les aides peuvent parfois être urgentes. Il est également essentiel de sensibiliser le public à l'utilisation de l'application et de s'assurer que les signalements soient traités rapidement et efficacement.
Les risques associés au projet incluent des défis techniques tels que la géolocalisation précise, la gestion des données sensibles, et la nécessité de garantir la disponibilité, la reconnaissance des animaux par photo prise par l’utilisateur et la performance de l'application. D'autres risques incluent une adoption insuffisante par les utilisateurs, des signalements incorrects ou frauduleux, et des difficultés de coordination avec les centres de secours qui doivent être sélectionnés par la distance avec le signalement et leur spécificité sur la prise en charge de certains types d’animaux marins.
`,
        etape: `Une première étape d’étude de marché et analyse des besoins a été nécessaire pour identifier les besoins des utilisateurs et des centres de secours marins, et analyser les solutions existantes. Nous étions 4 développeurs à travailler sur la réalisation de cette application amenant à l’utilisation de l’organisation agile. Cette organisation de travail nous a permis de réaliser les fonctionnalités listées avec Sibylline Océans l’association demandeuse pour ce projet. Nous avons travaillé sur des temps de réalisation de 4 semaines ou à l'issue de chacunes de ces périodes un point avec Sibylline Océans était fait.
Nous avons dû rédiger un cahier des charges détaillant les fonctionnalités nécessaires (signalement d'animaux, géolocalisation, notifications, etc.). Je me suis occupé de la réalisation des âges de l’application mobile sur l’accès à internet, la demande de géolocalisation du téléphone et de l’appel automatique au centre adéquat.
Cette application devait se faire en Java Android pour pouvoir être distribuée sur tout appareil Android depuis le Play Store. Pour la réalisation des pages mobiles je n’ai utilisé aucun framework front (un framework front-end est un service à ajouter à un projet pour ajouter des fonctionnalités sur la partie visible de l'utilisateur). Sur la partie géolocalisation, une première partie touche les autorisations téléphones. Il était nécessaire qu’à l’ouverture de l’application, si les autorisations ne sont pas déjà acceptées, un demande d’accès à la localisation GPS et à Internet devait être faite
Chaque partie du code devait se terminer par des tests, pour cela une stratégie de test simple a été mise en place. Cette stratégie était définie par deux périodes de tests, une première par le développeur qui avait écrit la fonctionnalité et une seconde faite par un autre développeur qui testait les répercussions possibles sur toute l'application .
`,
        resultat: `Le projet a permis la création d'une application mobile fonctionnelle et utile pour signaler rapidement et facilement des animaux marins en détresse. Les utilisateurs peuvent envoyer des signalements précis avec leur localisation, des photos et des descriptions, ce qui permet aux centres de secours marins de réagir plus efficacement. L'application a contribué à une meilleure coordination des interventions et à une augmentation des chances de survie des animaux marins en détresse.
Malheureusement cette application est toujours en phase de test même malgré un avancement personnel sur la mise en circulation du projet sur l’App Store recensant toutes applications des appareils mobiles sous Android.
`,
        lendemain: `À court terme, le projet nécessite une phase de suivi pour s'assurer de la stabilité de l'application et de la satisfaction des utilisateurs. Des mises à jour régulières seront nécessaires pour ajouter de nouvelles fonctionnalités et améliorer l'existant en fonction des retours des utilisateurs et des centres de secours.
 Pour les améliorations possibles dans le futur de ce projet, il y aurait l’intégration permanente de l’Intelligence Artificielle pour une meilleure reconnaissance des animaux et faciliter la demande d’aide de l’utilisateur. Il y a ensuite l’ouverture à la reconnaissance d’animaux non marins, mais aussi de catastrophes naturelles (telle qu’une chute d’arbre sur la route). Enfin, je travaillerais à développer des partenariats avec d'autres organisations de protection de la faune pour étendre la portée et l'efficacité de l'application.
`,
        comps : [
            {
                id: 1,
                nameComp: 'Angular'
            },
            {
                
                id: 2,
                nameComp: 'Git'
            },
            {
                
                id: 4,
                nameComp: 'Java'
            },
            {
                
                id: 3,
                nameComp: 'SQL'
            },
            {
                
                id: 8,
                nameComp: 'Tests unitaires / fonctionnels'
            },
            {
                
                id: 5,
                nameComp: 'Méthode Agile'
            },
            {
                
                id: 7,
                nameComp: 'Résolution de problème'
            },
            {
                
                id: 9,
                nameComp: 'UX/UI'
            },
            {
                id: 6,
                nameComp: 'Autonomie'
            }
        ]
    },
    {
        id: 3,
        name:'Grand Angle',
        prelude: `Grand Angle est une solution de gestion intégrée conçue spécifiquement pour répondre aux besoins des collectivités locales. Développée par CGI, cette solution vise à moderniser et à optimiser la gestion des informations et des processus au sein de ces institutions. Grand Angle se distingue par son approche modulaire, permettant aux collectivités de déployer uniquement les fonctionnalités dont elles ont besoin. La solution peut être déployée selon deux modèles : en mode licence traditionnelle ou en mode SaaS (Software as a Service), offrant ainsi une flexibilité d'adaptation aux différentes infrastructures et budgets. Allant des régions jusqu’aux villes, cet outil apporte une aide sur le suivi financier en tout domaine. Une aide sur la gestion du patrimoine physique, les marchés publics, la comptabilité analytique ainsi que la gestion des achats et stocks, ceux-ci sont les principaux points d'intérêt à l’utilisation de Grand Angle qui offre une couverture large sur le plan des domaines de gestion.

La gestion financière ne datant pas d'aujourd'hui, il est facile de deviner que Grand Angle a su évoluer depuis des années sur le plan de l’économie française, mais aussi dans son évolution technologique. En 1997 CGI lance la solution Grand Angle, conçue au préalable pour centraliser et harmoniser des données de collectivités locales. Depuis il a su développer et répondre aux besoins utilisateurs, dans différents modules de gestion. Ainsi, aujourd’hui Grand Angle compte parmis les projets les plus importants dans l’ESN Canadienne avec plus de 60 collectivités utilisant l’application. 
Un autre aspect clé du projet Grand Angle réside dans la volonté de CGI de renforcer ses collaborations avec d’autres acteurs majeurs du secteur technologique et industriel. Ces partenariats ont permis à CGI de bénéficier de nouvelles expertises et de développer des solutions encore plus performantes pour ses clients.
Par exemple, CGI a noué des partenariats stratégiques avec de grandes entreprises technologiques telles qu'Amazon Web Services (AWS), Microsoft et Google Cloud. Ces collaborations ont été cruciales pour développer des solutions cloud plus robustes et accessibles.
`,
        objectif: `Le projet Grand Angle de CGI est une solution informatique de gestion dédiée aux collectivités locales. Il a pour vocation de soutenir et de faciliter le pilotage stratégique, opérationnel et financier des collectivités par la mise en place d'une plateforme unique qui centralise les données relatives aux différents processus de gestion.
Le référentiel unique que propose Grand Angle centralise les informations dans une seule base de données, garantissant ainsi une cohérence et une fiabilité des données, que ce soit sur le plan financier, opérationnel ou politique. Il est particulièrement adapté à la gestion des patrimoines physiques, des marchés publics, de la comptabilité analytique, ainsi que de la gestion des achats et des stocks.

Ainsi, le premier objectif primaire de l’application est de d’assurer la cohérence et la centralisation des données des collectivités locales au sein d’un seul référentiel. Cette centralisation permet une gestion fluide des informations et une vue d'ensemble sur les différentes activités, permettant ainsi aux décideurs des collectivités d'avoir un accès en temps réel aux données critiques. Pour cela Grand Angle offre aussi une solution à la visualisation de données, utilisant le logiciel Digdash.
Associé à cette pratique de centralisation, le respect des exigences réglementaires et la soutenabilité financière sont des objectifs essentiels du projet Grand Angle. La solution doit garantir que les collectivités respectent les normes légales et les obligations financières tout en offrant une solution pérenne. Avec cela est apportée l’aide au pilotage stratégique, permettant de fixer un pilotage stratégique sur plusieurs niveaux, adapté aux objectifs des collectivités locales. Cela donne l'occasion à un suivi sur l’évolution des projets et de la performance des services.
`,
        etape: `Plusieurs grandes missions m’ont été affectée lors de mon intégration à l’équipe de Grand Angle. Divisé en modules, chaque développeur est dédié à l’un d’eux pour y travailler lors de l’ajout de fonctionnalités ou bien lors d’une demande de résolution de problème. Mon profil a amené les responsables R&D à me donner des travaux touchant à la plupart des modules présents dans le domaine DIGIT qui regroupe la gestion sur les tiers, les engagements et liquidations et la gestion de document. 
Pour bien différencier les missions auxquelles je réponds, je vais présenter les demandes de maintenance par laTMA et les ajouts de fonctionnalités par le terme EVO. La TMA ne répond pas exactement aux exigences que demande une EVO, il y a une plus grande proximité avec le client, les travaux sont différents mais le résultat reste identique. Le résultat se fera toujours par un ajout ou modification de code dans l’application.
Commençons par la TMA, représentés par des tickets présents sur l’outil Jira, les Tierces Maintenances Applicatives sont des demandes de résolution de problème fonctionnel par les clients ou par l’équipe chargée de tester l’intégration d’une EVO dans l’application. Ainsi se distinguent deux catégories de TMA, celle interne et externe. La résolution d’un ticket se fait toujours de la même manière, je dois repérer l’origine du problème, en déduire une criticité et réfléchir à un moyen de contournement si la criticité est haute. Pour certains cas je dois vérifier si le problème ne vient pas d’une modification apportée lors d’une correction de d’un autre ticket Jira ou lors de l’intégration d’une EVO Suite à cela je dois apporter une correction, la tester pour vérifier si le comportement répond à celui attendu et vérifier si des impacts sont à gérer. Si le test est validé, selon la criticité, je dois apporter la modification sur différentes versions de l’application, car chaque client utilise une version de Grand Angle qui peut être différente. Ensuite un expert fonctionnel de l’application vérifie ma modification, si c’est validé je dois apporter une réponse sur l’origine du problème au client et lui indiquer sur quel prochaine version la correction sera effective.
Pour les EVO, l’étude est différente, une évolution amène une fonctionnalité dont au moins un client de Grand Angle en a fait la demande. Si cette évolution m’est confiée, suivant une étude en amont par les experts logiciel de l’application, je dois d’abord rédiger des SFG (Spécifications Fonctionnelles Générales). Ce document relate plusieurs informations comme les besoins utilisateurs, les maquettes pour les modifications sur des pages webs, les fonctionnalités principales sans entrer dans les détails techniques, identifier les contraintes du projet (budgétaires, techniques, réglementaires). Une fois que ce document est validé et répond aux attentes, je dois ensuite rédiger les SFD (Spécifications Fonctionnelles Détaillées). Ce document, qui est plus technique, exprime chaque fonctionnalité (règles métier, interactions, erreurs possibles), détaille les scénarios d’utilisation (cas d’usage) et définit les interfaces (UX/UI) et les flux de navigation et les interactions. Suite à cette construction de l’EVO, je peux apporter les changements sur le code source. 
`,
        resultat: ``,
        lendemain: ``,
        comps : [
            {
                id: 1,
                nameComp: 'Angular'
            },
            {
                id: 2,
                nameComp: 'Git'
            },
            {
                id: 4,
                nameComp: 'Java'
            },
            {
                id: 3,
                nameComp: 'SQL'
            },
            {
                id: 8,
                nameComp: 'Tests unitaires / fonctionnels'
            },
            {
                id: 5,
                nameComp: 'Méthode Agile'
            },
            { 
                id: 7,
                nameComp: 'Résolution de problème'
            },
            {
                id: 10,
                nameComp: 'Rédaction de document'
            },
            {
                id: 6,
                nameComp: 'Autonomie'
            }
        ]
    },
    {
        id: 4,
        name: 'En cours',
        prelude: ``,
        objectif: ``,
        etape: ``,
        resultat: ``,
        lendemain: ``,
        comps : [
            {
                id: 1,
                nameComp: 'Angular'
            },
            {
                id: 3,
                nameComp: 'SQL'
            },
            {
                id: 6,
                nameComp: 'Autonomie'
            }
        ]
    },
    {
        id: 5,
        name: 'Simple-E',
        prelude: ``,
        objectif: ``,
        etape: ``,
        resultat: ``,
        lendemain: ``,
        comps : [
            {
                id: 3,
                nameComp: 'SQL'
            },
            {
                id: 2,
                nameComp: 'Git'
            },
            {
                id: 5,
                nameComp: 'Méthode Agile'
            },
            {
                id: 6,
                nameComp: 'Autonomie'
            },
            {
                id: 10,
                nameComp: 'Rédaction de document'
            }
        ]
    },
    
]