const colors = ['red', 'indigo', 'yellow', 'green', 'pink', 'blue'];

const live_projects = [
    {
        id: "requify",
        name: "Requify",
        url: "http://moinqidw.ddns.net:4200",
        image: "/images/requify_card.PNG",
        description: "Requify is a application intended to serve as a motivation profiler of gamers based on their in-game behavioral choices.",
        tech: ["Typescript", "Angular", "ExpressJS", "Kubernetes", "Pulumi", "Keycloak", "ArangoDB", "Minio", "Material"]
    },
    {
        id: "pyrho",
        name: "Pyrho",
        url: "https://pyrho.net",
        image: "/images/pyrho_card.PNG",
        description: "Pyrho is a simple landing page application to test out demand of parental coaching from professional developmental psychologists.",
        tech: ["Typescript", "Angular", "Material", "Typescript", "Docker", "Mailgun"]
    },
    {
        id: "portfolio",
        name: "Portfolio",
        url: "http://moin-qidwai.me",
        image: "/images/portfolio_card.png",
        description: "This is my personal homepage on the world wide web. It is updated every few years as I utilize it to explore new technologies.",
        tech: ["Next.js", "React", "Framer Motion", "TailwindCSS"]
    },
    {
        id: "spreadit",
        name: "Spread It",
        url: "https://spread-it.herokuapp.com/",
        image: "/images/spread_it_card.png",
        description: "Spread it is a deprecated application that aimed at allowing people to send virtual cards to others for a small fee.",
        tech: ["Ruby", "Rails", "PostgreSQL", "Bootstrap", "Jquery"]
    },
    {
        id: "orrery",
        name: "Orrery",
        url: "https://orrery-five.vercel.app/",
        image: "/images/orrery_card.PNG",
        description: "Orrery is a small UI only prototype of a exotic financial products creation platform for recurring revenue contracts based fixed income instruments .",
        tech: ["Ruby", "Rails", "PostgreSQL", "Bootstrap", "Jquery"]
    }
];

const defunct_projects = [
    {
        id: "plain_exchange",
        name: "Plain Exchange",
        description: "Plain exchange was an application aimed at peer-to-peer online-to-offline currency exchange. The idea started off at the Hong Kong University Of Science And Technology by two international students. I met them after a hackathon and decided to join the team, which at the time was two students. We built the application on Ionic as we wanted a short time to market and the hybrid capabilities offered by Ionic at the time were perfect for us. The application was distributed and publicised on campus, it generated enough traction that we were selected by Angelhack to participate in their global demo day in San Francisco, in which we were selected as the global champions for the 2015 cohort of Angelhack. I later left the team as due to family financial situation working on high equity-low cash at the time was beyond my risk profile.",
        tech: ["Ionic", "Cordova", "Gulp"]
    },
    {
        id: "fittcode",
        name: "Fittcode",
        description: "Fittcode was a progressive web application aimed at assisting people with adjusting their fitness routine through data science. In recent times there has been great amount of development in the field of kinesiology and exercise physiology tech. There are companies that have built portable V02 analyzers like vo2master. These hardware devices give accurate data about a few health metrics that are important during exercise, for example lactate threshold. Fittcode would allow personal trainers to measure, record and manage these data metrics while building a customers fitness profile. Once enough data was available, Fittcode would be able to provide accurate guidance to the client without the need for frequent visits to the trainer hence making improving your core fitness a data driven process saving you time and money.",
        tech: ["React", "Redux", "NodeJS", "AWS Amplify", "React Testing Library", "Typescript", "Python", "Scikit Learn", "Tensorflow"]
    }
]

export default function Projects() {
    return (
        <div className="mb-6">
            <span className="bg-indigo-300"></span>
            <span className="bg-red-300"></span>
            <span className="bg-yellow-300"></span>
            <span className="bg-green-300"></span>
            <span className="bg-pink-300"></span>
            <span className="bg-blue-300"></span>
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Live Hobby Projects</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    { live_projects.map(project => (
                        <div key={project.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src={project.image} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-700">
                                        <a href={project.url} rel="noreferrer" target="_blank">
                                            { project.name }
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{ project.description }</p>
                                </div>
                            </div>
                            <a href={project.url} rel="noreferrer" target="_blank">
                                <p className="text-sm py-3 underline cursor-pointer font-medium text-blue-500">
                                    View Website
                                </p>
                            </a>
                            {
                                project.tech.map(t => (
                                    <div key={t} className={`inline-block bg-${colors[Math.floor(Math.random()*colors.length)]}-300 rounded-3xl px-2 mx-1 my-1`}>
                                        {t}
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Defunct Founder Projects</h2>
                <h3 className="text-lg mb-6">The below projects are no longer active but in the past I joined them as part of a founding team.</h3>

                {defunct_projects.map(project => (
                    <div key={project.id} className="mb-6">
                        <h5 className="text-lg font-medium text-gray-600">{project.name}</h5>
                        <p className="text-small font-mono mb-4">{project.description}</p>
                        {
                            project.tech.map(t => (
                                <div key={t} className={`inline-block bg-${colors[Math.floor(Math.random()*colors.length)]}-300 rounded-3xl px-2 mx-1 my-1`}>
                                    {t}
                                </div>
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}