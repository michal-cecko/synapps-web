// data/projects.js
export const projectsData = [
    {
        id: 1,
        title: "Dodoworkout",
        description: "Web pre trénera",
        imageUrl: "/images/homepage/project-cards/dodoworkout.jpg",
        thumbnailUrl: "/images/projects/dodoworkout.jpg",
        url: "https://dodoworkout.com/",
        featured: true
    },
    {
        id: 2,
        title: "Street Workout Kysuce",
        description: "Web športového tímu",
        imageUrl: "/images/homepage/project-cards/streetworkoutkysuce.jpg",
        thumbnailUrl: "/images/projects/streetworkoutkysuce.jpg",
        url: "https://streetworkoutkysuce.sk/",
        featured: true
    },
    {
        id: 3,
        title: "Dashboard",
        description: "Informačný systém na správu internetového obchodu",
        imageUrl: "/images/homepage/project-cards/dashboard.jpg",
        thumbnailUrl: "/images/projects/dashboard.jpg",
        url: "https://demo.filamentphp.com/",
        featured: true
    },
    {
        id: 4,
        title: "3M Barbers",
        description: "Web s rezervačným systémom pre barbershop",
        imageUrl: "/images/homepage/project-cards/trimbarbers.jpg",
        thumbnailUrl: "/images/projects/trimbarbers.jpg",
        url: "https://trimbarbers.sk",
        featured: true
    },
    {
        id: 5,
        title: "Ideálne dvere",
        description: "Web pre výrobcu dverí",
        imageUrl: "/images/projects/idealnedvere.jpg",
        thumbnailUrl: "/images/projects/idealnedvere.jpg",
        url: "https://idealnedvere.sk/",
        featured: false
    },
    {
        id: 6,
        title: "Men's Venue",
        description: "Web pre barbera",
        imageUrl: "/images/projects/mensvenue.jpg",
        thumbnailUrl: "/images/projects/mensvenue.jpg",
        url: "https://mensvenue.sk/",
        featured: false
    },
];

export function getFeaturedProjects() {
    return projectsData.filter(project => project.featured);
}