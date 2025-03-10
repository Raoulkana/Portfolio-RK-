import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4 ">
            <a href="#"
                className="flex items-center font-bold text-4xl md:text-xl"
            >
                <Container className="mr-5" />
                RAOUL
                <span className="text-success">DEV</span>
            </a>

            <ul className="hidden md:flex space-x-5">
                <li>
                    <a href="#Home"
                        className="btn btn-sm btn-ghost"
                    >
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About"
                        className="btn btn-sm btn-ghost"
                    >
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#Experiences"
                        className="btn btn-sm btn-ghost"
                    >
                        Mes expèriences
                    </a>
                </li>
                <li>
                    <a href="#projects"
                        className="btn btn-sm btn-ghost"
                    >
                        Mes projets 
                    </a>
                </li>

            </ul>

        </div>
    )
}

export default Navbar
