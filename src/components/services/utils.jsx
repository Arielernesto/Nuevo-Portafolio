import {Spech, Twitter, GitHub, Linkedin, Youtube } from "../Icon"
import { User } from "lucide-react";
import { LucideYoutube } from "lucide-react";
import { Computer } from "lucide-react";
import { Rocket } from "lucide-react";
import { Pencil } from "lucide-react";
import { Speech, Brackets } from "lucide-react";

import { Home } from "lucide-react";
import { Book } from "lucide-react";
import { Code, TwitterIcon, } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: 'Home',
        icon: <Home strokeWidth={1}></Home>,
        link: "/"
    },
    {
        id: 2,
        title: 'User',
        icon: <User strokeWidth={1}></User>,
        link: '/about-me'
    },
    {
        id: 3,
        title: 'Book',
        icon: <Book strokeWidth={1}></Book>,
        link: '/services'
    },
    {
        id: 4,
        title: 'Target',
        icon: <Code strokeWidth={1}></Code>,
        link: '/portfolio'
    },
    {
        id: 5,
        title: 'Testimonials',
        icon: <Speech strokeWidth={1}></Speech>,
        link: '/testimonials'
    }
]

export const socialNetworks = [
    {
        id: 1,
        link: "",
        icon: <TwitterIcon strokeWidth={1}></TwitterIcon>
    },
    {
        id: 2,
        link: "",
        icon: GitHub
    },
    {
        id: 3,
        link: "",
        icon: Linkedin
    },
    {
        id: 4,
        link: "",
        icon: <LucideYoutube strokeWidth={1} size={30}></LucideYoutube>
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 7,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 16,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 15,
        text: "Tecnologías conocidas",
        lineRight: false,
        lineRightMobile: false,
        isFinally: true
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Fullstack",
        subtitle: "Freelancer",
        description: "Desarrollo de aplicaciones web completas utilizando tecnologías como React.js, Node.js y Laravel. Integración de servicios de terceros y APIs. Optimización del rendimiento y la seguridad de las aplicaciones",
        date: "Presente",
    },
    {
        id: 2,
        title: "Desarrollador Back-End",
        subtitle: "Freelance",
        description: "Creación y mantenimiento de APIs RESTful con Node.js, Express, php y python. Gestión de bases de datos SQL. Implementación de autenticación y autorización  de usuarios",
        date: "Dic 2023",
    },
    {
        id: 3,
        title: "Desarrollador Front-End",
        subtitle: "Freelancer",
        description: "Desarrollo de interfaces de usuarios utilizando react.js e implementación de diseños responsivos y accesibles. Colaboración con diseñadores para mejorar la experiencia de usuario.",
        date: "Jul 2023",
    },
    {
        id: 4,
        title: "Desarrollo Web",
        subtitle: "Freelancer.",
        description: "Colaboré con clientes para diseñar y desarrollar soluciones personalizadas de API webs",
        date: "Abr 2023",
    },
]
export const serviceData = [
    {
        icon: <Pencil></Pencil>,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer></Computer>,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book></Book>,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Brackets></Brackets>,
        title: "Backend",
        description: "Desarrollo de APIs y backends completos",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Dashboard-Company",
        image: "/dashboard.png",
        urlGithub: "https://github.com/Arielernesto/Dashboard-Company",
        urlDemo: "https://dashboard-company-ivory.vercel.app/",
        tecnologies: [
            {
                name: "React",
                color: "text-blue-600 border-blue-600"
            },
            {
                name: "Zustand",
                color: "text-gray-900 border-gray-900"
            },
            {
                name: "NextJS",
                color: " text-neutral-600 border-neutral-600"
            },
            {
                name: "TypeScript",
                color: "text-blue-600 border-blue-600"
            }        
        ],
        description: "Este Dashboard de compañías, desarrollado en Next.js, esta diseñado para ofrecer una experiencia fluida y eficiente en la gestión empresarial. Utiliza Prisma como ORM, lo que permite manejar las bases de datos de manera segura y eficiente, garantizando integridad y rendimiento óptimos. La interfaz de usuario está creada con los componentes de Shadcn, asegurando un diseño moderno y una excelente usabilidad"
    },

    {
        id: 2,
        title: "Creador de rankings",
        image: "/TierMaker.png",
        urlGithub: "https://github.com/Arielernesto/Tier-List-frontend",
        urlDemo: "https://tier-list-frontend.vercel.app/",
        tecnologies: [
            {
                name: "React",
                color: "text-blue-600 border-blue-600"
            },
            {
                name: "JavaScript",
                color: "text-yellow-400 border-yellow-400"
            },
            {
                name: "NodeJs",
                color: " text-green-800  border-green-800"
            }
        ],
        description: "Esta aplicación web Tier Maker permite a los usuarios crear y organizar listas de clasificación de manera intuitiva y visualmente atractiva. El backend, construido con Node.js y el framework Express, garantiza un rendimiento sólido y una gestión eficiente de los datos. El frontend, desarrollado con React y Tailwind CSS, ofrece una interfaz moderna diseñada específicamente para uso en escritorio. Actualmente, la aplicación no es responsive y no se puede usar en dispositivos móviles debido a problemas con la funcionalidad de arrastrar y soltar (drag and drop)"
    },
    
    {
        id: 3,
        title: "Acortador de URLs",
        image: "/ShortLink.png",
        urlGithub: "https://github.com/Arielernesto/short-url",
        urlDemo: "https://short-url-azure.vercel.app/",
        tecnologies: [
            {
                name: "React",
                color: "text-blue-600 border-blue-600"
            },
            {
                name: "JavaScript",
                color: "text-yellow-400 border-yellow-400"
            },
            {
                name: "NodeJs",
                color: " text-green-800  border-green-800"
            },
            {
                name: "Prisma",
                color: "text-teal-500 border-teal-500"
            },
        ],
        description: "Esta página acortadora de URL, desarrollada en Node.js, ofrece una solución eficaz y rápida para la gestión de enlaces. Utilizé Node.js para servir la página como archivos estáticos, garantizando una carga rápida y eficiente, mientras que las demás rutas se manejan como rutas de API para una funcionalidad robusta. La interfaz de usuario está creada con React y Tailwind CSS, asegurando un diseño moderno, atractivo y altamente personalizable" 
    },
    
    {
        id: 9,
        title: "JavaScript-Quiz",
        image: "/quiz.png",
        urlGithub: "https://github.com/Arielernesto/JavaScript-Quiz",
        urlDemo: "https://java-script-quiz-eight.vercel.app/",
        tecnologies: [
            {
                name: "React",
                color: "text-blue-600 border-blue-600"
            },
            {
                name: "JavaScript",
                color: "text-yellow-400 border-yellow-400"
            },
            {
                name: "Zustand",
                color: "text-gray-900 border-gray-900"
            }     
        ],
        description: "Esta aplicación web de JavaScript Quiz, desarrollada con React, está diseñada para ayudar a los usuarios a poner a prueba y mejorar sus conocimientos en JavaScript de manera interactiva y divertida. Con una interfaz moderna y atractiva, los usuarios pueden navegar a través de una variedad de preguntas, recibir retroalimentación instantánea y ver sus resultados al finalizar cada quiz. La aplicación está optimizada un rendimiento rápido y una experiencia de usuario fluida"
    },
   
   

    // {
    //     id: 2,
    //     title: "Desarrollo Web Ágil",
    //     image: "/image-2.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 3,
    //     title: "Estrategias Web",
    //     image: "/image-3.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 4,
    //     title: "Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 5,
    //     title: "Webs Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 8,
    //     title: "E-commerce web",
    //     image: "/image-8.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // }
];

export const dataProjects = [
    {
        id: 20,
        title: "Landing de Construcción",
        image: "/brickhub.png",
        urlGithub: "https://github.com/Arielernesto/BrickHub",
        urlDemo: "https://brick-hub.vercel.app/",
        tecnologies: [
            {
                name: "React",
                color: "text-blue-600 border-blue-600"
            },
            {
                name: "JavaScript",
                color: "text-yellow-400 border-yellow-400"
            },
            {
                name: "Bootstrap",
                color: "text-purple-600 border-purple-600"
            }
        ],
        description: "Esta landing de construcción, desarrollada con React, JavaScript y Bootstrap 5, ofrece una experiencia completamente responsiva y moderna. Diseñada específicamente para el sector de la construcción, la página proporciona una navegación intuitiva y un diseño atractivo que se adapta a cualquier dispositivo, asegurando una experiencia óptima tanto en escritorio como en móviles "
    },
    
]
export const dataTestimonials = [
    {
        id: 1,
        name: "Juan Pérez",
        description:
            "Trabajar con ExoCode ha sido una experiencia increible. Su conocimiento en Next.js y React nos permitió lanzar nuestra plataforma en tiempo récord",
        imageUrl: "/profile1.webp",
    },
    {
        id: 2,
        name: "María Gómez",
        description:
            "Gracias a ExocCode, pudimos integrar una arquitectura serveless eficiente utilizando Laravel y React",
        imageUrl: "/profile2.webp",
    },
    {
        id: 3,
        name: "Carlos Rodríguez",
        description:
            "Recomiendo encarecidamente a ExoCode para cualquier proyecto de desarrollo web",
        imageUrl: "/profile3.webp",
    },
];