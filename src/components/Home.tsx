import { Mail } from "lucide-react"
import img from '../assets/raoul.jpg'  

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 ">
            <div className="flex flex-col ">
                <h1 className="tex-5xl md:text-6xl font-bold text-center md:text-left ">
                    Hello, <br /> I am {" "} 
                    <span className="text-success "> Raoul kana </span>
                </h1>

                <p className="my-6  text-md text-center md:text-left ">
                    I am a fullstack developer 
                    <br />
                    with 2 years of experience, using 
                    React <br /> and Node.js.
                    Contact me if you need 
                    my services.
                </p>
                <a href="https://www.linkedin.com/in/raoul-yem-kana-2132282b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="btn btn-success md:w-fit ">
                <Mail className="w-5 h-5 " />
                Contact-me  
                </a>

            </div>
            
            <div className="md:ml-60" >
                <img src= {img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl "
                style={{
                    borderRadius : "63% 37% 29% 71% / 44% 52% 48% 56%"
                }}
                />

            </div>
        </div>
    )
}

export default Home 