import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import { Github, } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Plant shop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTLM', 'CSS'],
        repoLink: ' https://github.com/Raoulkana/BioEmoi',
        image: img1,
    },
    {
        id: 2,
        title: 'Formulaire interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        repoLink: 'https://github.com/Raoulkana/RK-Formulaire',
        image: img2,
    },
    {
        id: 3,
        title: 'Application ZOO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript',"PHP"],
        repoLink: 'https://shielded-citadel-22744-bbab4d49c287.herokuapp.com/',
        image: img3,
    },
    {
        id: 4,
        title: 'Blog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'Bootstrap5', 'CSS'],
        repoLink: 'https://tp-bootstrap-rk.vercel.app/',
        image: img4,
    },
    {
        id: 5,
        title: 'Sweet_Secrets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['REACT', 'CSS', 'HTML'],
        repoLink: 'https://vanes-cakes.vercel.app/',
        image: img5,
    },
    
];

const Projects = () => {
    return (
        <div className="mt-10" id="projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-success badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            
                            <a className="btn btn-info-content w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects