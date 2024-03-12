import { FaEye, FaGithub } from "react-icons/fa";
import projects from "./Projects";

const Portfolio = () => {
    return (
        <div
            id="portfolio"
            className="flex border-b flex-col items-center py-20 px-4"
        >
            <div className="lg:w-[1000px] flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <div className="bg-tertiary p-1 rounded-lg max-w-[70px]"></div>
                    <h1 className="md:text-6xl text-4xl font-bold">My Work</h1>
                    <p className="text-gray-500 max-md:text-sm">
                        Check out some of my projects
                    </p>
                </div>
                <div className="grid gap-10 place-content-center">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-10 gap-10 flex ${project.flex} max-md:flex-col-reverse max-w-[900px] shadow w-full justify-between gap-4 items-start`}
                        >
                            <div className="flex flex-col justify-between h-full gap-4 md:min-w-[400px]">
                                <h1 className="text-2xl font-bold">
                                    {project.title}
                                </h1>
                                <p className="text-gray-500 font-light">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 links">
                                    <a
                                        target="_blank"
                                        href={project.liveDemo}
                                        className="bg-primary p-1 px-3 rounded-md text-white w-fit flex items-center gap-2"
                                    >
                                        <FaEye /> Live
                                    </a>
                                    <a
                                        target="_blank"
                                        href={project.githubRepo}
                                        className="bg-primary p-1 px-3 rounded-md text-white w-fit flex items-center gap-2"
                                    >
                                        <FaGithub /> Source
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={project.img}
                                    className="object-cover rounded-lg"
                                    alt={project.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
