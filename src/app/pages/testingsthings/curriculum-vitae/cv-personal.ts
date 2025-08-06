import { CvForm } from '../../../core/dataobjects/curriculum-vitae/cv-form';

export const DROGUIER_CV : CvForm = 
    {
        title: "Daniel Andres Leiva Droguier",
	    name: "Daniel Andres Leiva Droguier",
	    web: "https:www.droguier.cl",    
        phone_cell:"+56 (9) 4177 4655",
	    short_desc: "Presentación simple de CV en WEB. Aun en progreso ...",
	    visible: true,
    
    interest:[
        { 
            title: "Profesional",
            short_desc: "Mejorar mis habilidades de informático adquiriendo nuevos conocimientos bajo el contexto de las necesidades de las empresas"
        }
        ,{ 
            title: "Personal",
            short_desc: "Involucrarme en el área de I+D en el ámbito de la informática"
        }
    ],
    education:[
        { 
            title: "Técnico Medio en Telecomunicaciones",
            mention:"Técnico Medio en Telecomunicaciones",
            short_desc: "Enseñanza media y técnica completa",
            establishment:"Liceo Cristiano Bethel 3",
            date_begin: new Date("2000-01-01"),
            date_end: new Date("2005-12-31")
        }
        ,{ 
            title: "Ingeniería en Informática",
            short_desc: "Congelado V Sem",
            establishment:"Universidad Tecnológica Metropolitana",
            date_begin: new Date("2006-01-01"),
            date_end: new Date("2008-07-01")
        }
        ,{ 
            title: "Ingeniería en Informática",
            mention:"Licenciado en Ingenieria",
            short_desc: "Licenciado en Ingenieria con enfoque en el área de desarrollo de software y análisis de datos",
            establishment:"Universidad Tecnológica Metropolitana",
            date_begin: new Date("2012-01-01"),
            date_end: new Date("2016-12-31")
        }
        ,{ 
            title: "KDD: Knowledge Discovery in Databases",
            mention:"Otros estudios",
            short_desc: "Estudios entorno a los sistemas de datos y metodologías de procesamientos de la información.",
            establishment:"Universidad Tecnológica Metropolitana",
            date_begin: new Date("2015-07-01"),
            date_end: new Date("2015-12-31")
        }
        ,{ 
            title: "Introducción a la Física Nuclear",
            mention:"Otros estudios",
            short_desc: "Estudios relacionados con las ciencias actuales enfocada a la física y el comportamiento de los átomos",
            establishment:"Universidad Tecnológica Metropolitana",
            date_begin: new Date("2016-01-01"),
            date_end: new Date("2016-06-31")
        }
    ],
    laboral_experience:[
        {
            title: "Técnico Computacional",
            desc: "Técnico encargado de mantención y reparación de equipos computacionales, a nivel software (programas) y hardware (componentes físicos). Trabajos principalmente en equipos de oficina PC de escritorios, Laptops, Impresoras a tinta, Impresoras a punto, Impresoras Láser, etc..",
            company: "TRIAL COMPT",
            relevant_client: "LATAM Airline, Municipalidad de Las Condes",
            date_begin: new Date("2009-09-01"),
            date_end: new Date("2010-03-31")
        }
        ,{
            title: "Soporte y apoyo ejecutivos",
            desc: "Apoyo en labores de Jefes de Area de plataforma de callcenter. Trabajo principalmente en atender dudas de ejecutivos de plataforma de callcenter y gestión de solicitudes laborales con áreas administrativas",
            company: "MASCERCA CONTACT CENTER",
            relevant_client: "VTR S.A.",
            date_begin: new Date("2012-03-01"),
            date_end: new Date("2012-08-31")
        }
        ,{
            title: "Workforce - Analista de datos y estadisticas",
            desc: "Soporte de áreas de administración para el buen funcionamiento de las áreas de operaciones, labor que consistía en evaluar la información de trabajadores, datos procesados y trabajo realizado de las distintas plataformas del ContacCenter, para cliente “American Airline”. El trabajo consistía en medir los requerimientos del cliente que solicitaba el servicio de callcenter, se evaluaban los hitos principales como objetivos, logros, faltas o penalizaciones, se evaluaba la cantidad de personal requerido para dichos hitos, se evaluaba el trabajo de callcenter en tiempo real, y se levantaban alertas y posibles soluciones ante ventualidades fuera de lo normal del trabajo. Ambiente laboral en grupo, y grupos de apoyos de otras plataformas callcenter.",
            company: "MASCERCA CONTACT CENTER",
            relevant_client: "LATAM Airline",
            date_begin: new Date("2012-09-01"),
            date_end: new Date("2013-04-31")
        }
        ,{
            title: "Desarrollador (Freelance)",
            desc: "Desarrollador en proyectos entorno a distintas plataformas y lenguajes de programación y bases de datos. Proyectos de desarrollo web en torno a framework nacionales como SONDAframe (java versiones 1.4 y 1.6) y otros desarrollos bajo lenguajes VB 6.0; principalmente clientes de entidades como BICE o TransBank.",
            company: "ADVANCED TECH LTDA",
            relevant_client: "Banco BICE",
            date_begin: new Date("2015-08-01"),
            date_end: new Date("2016-02-31")
        }

        
        ,{
            title: "Desarrollador (Externo)",
            desc: "Desarrollador en proyectos entorno a distintas plataformas y lenguajes de programación y bases de datos. Proyectos de desarrollo web en torno a C# y VB 6.0",
            company: "SERVICIOS INFORMATICOS XXXXX",
            relevant_client: "SOCOFAR",
            date_begin: new Date("2015-08-01"),
            date_end: new Date("2017-10-31")
        }  
        ,{
            title: "Desarrollador (Externo)",
            desc: "Desarrollador en proyectos entorno a distintas plataformas y lenguajes de programación y bases de datos. Proyectos de desarrollo web en torno al ambiente de desarrollo de JAVA",
            company: "EVERIS",
            relevant_client: "LATAM Airline",
            date_begin: new Date("2017-11-01"),
            date_end: new Date("2019-03-31")
        }        
        ,{
            title: "Ingeniero de Software",
            desc: "Desarrollador en proyectos entorno a distintas plataformas y lenguajes de programación y bases de datos. Proyectos de desarrollo web en torno a C# ( .NET FrameWork v1.4.6) y MS SQL ",
            company: "Exynko, cambio organizacional a PENTA VIDA",
            relevant_client: "PENTA VIDA",
            date_begin: new Date("2019-04-01"),
            date_end: new Date("2022-11-31")
        }
        ,{
            title: "Ingeniero de Software Senior",
            desc: "Desarrollador en proyectos entorno a distintas plataformas y lenguajes de programación y bases de datos. Proyectos de desarrollo web en torno a C# ( .NET FrameWork v1.4.6) y MS SQL ",
            company: "PENTA VIDA",
            date_begin: new Date("2022-12-01")
        }
    ]
}