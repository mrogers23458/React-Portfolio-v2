import ProjectCard from "../ProjectCard";
import projectImage1 from "../../assets/images/ub-hero.png"
import projectImage2 from "../../assets/images/vfc-hero.png"
import projectImage3 from "../../assets/images/cleanapp-hero.png"
export default function Projects () {
    const images = [projectImage1, projectImage2, projectImage3]

    const cardProps1 = {
        imageSrc: images[0],
        title: 'Ubiquitous',
        description: 'Ubiquitous Happiness is a community forum website, and collaboration project. I leveraged my Knowledge of MySQL, Node.Js, Express, and APIs, to build out the server and back-end functionality.',
        link: 'https://project-2-ubiq.herokuapp.com/'
    }

    const cardProps2 = {
        imageSrc: images[1],
        title: 'Vickis Fence Co.',
        description: 'A static website I built for a local small business woman. For this website I applied my knowledge of HTML, CSS, Bulma, and EmailJS, to build a site where the business owner could advertise and showcase her recent fence and landscaping projects.',
        link: 'https://mrogers23458.github.io/VickisFenceCo/'
    }

    const cardProps3 = {
        imageSrc: images[2],
        title: 'Clean App (in progress)',
        description: 'This is a task organization app that Im building for my family. It is a Progressive Web Application that uses the MERN tech stack as well as ApolloClient, ApolloServer, and GraphQL.',
        link: 'https://mrogerscleanapp.herokuapp.com/'
    }

    return (
        <div className="projects-box">
            <div className="projects-header">
                <h1 className="projects-header-text">Projects</h1>
                <h2 className="projects-header-sub-text">Here are some of the projects that highlight a few of technologies I've been using. </h2>
            </div>
            <div className="projects-card-box">
                <ProjectCard data={cardProps1}/>
                <ProjectCard data={cardProps2} />
                <ProjectCard data={cardProps3} />
            </div>
        </div>
    )
}