import pp from "../../assets/pp.png";
import { MdCloudDownload } from "react-icons/md";
import cv from "../../assets/cv.pdf";
const About = () => {
    return (
        <div
            id="about"
            className="flex border-b flex-col items-center py-20 px-4"
        >
            <div className="lg:w-[1000px] flex flex-col gap-10">
                <div className="flex max-md:flex-col-reverse gap-10 items-center">
                    <div className="flex flex-col gap-3">
                        <div className="bg-tertiary p-1 rounded-lg max-w-[70px]"></div>
                        <div className="flex flex-col gap-3">
                            <h1 className="md:text-6xl text-4xl font-bold">
                                About Me
                            </h1>
                            <p className="text-gray-500 font-light max-md:text-sm">
                                I'm Ahmad Shaja Azimi, a highly skilled
                                front-end developer with a proven track record
                                of successfully delivering over bunch of complex
                                projects. My true passion lies in crafting web
                                applications that drive business growth.
                                Leveraging cutting-edge technologies like React,
                                Redux, Tailwind CSS, and Firebase, I possess the
                                expertise to seamlessly transform concepts into
                                functional realities. My specialization lies in
                                creating responsive web designs that adapt
                                flawlessly to various devices and screen sizes
                            </p>
                        </div>
                        <a
                            target="_blank"
                            href={cv}
                            className="bg-tertiary flex items-center gap-3 text-white px-4 py-2 w-fit rounded-lg hover:bg-primary duration-300"
                        >
                            <MdCloudDownload />
                            Resume
                        </a>
                    </div>
                    <img src={pp} className="w-[300px]" />
                </div>
            </div>
        </div>
    );
};

export default About;
