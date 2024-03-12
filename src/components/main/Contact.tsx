import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsSend } from "react-icons/bs";
const Contact = () => {
    return (
        <div id="contact" className="flex border-b flex-col items-center py-20 px-4">
            <div className="lg:w-[1000px] flex flex-col gap-10">
                <div className="flex max-md:flex-col gap-10 items-center justify-between">
                    <div className="flex flex-col gap-3">
                        <div className="bg-tertiary p-1 rounded-lg max-w-[70px]"></div>
                        <div className="flex flex-col gap-3">
                            <h1 className="md:text-6xl text-4xl font-bold">
                                Hire Me
                            </h1>
                            <p className="text-gray-500 font-light">
                                Contact me for any of your projects or just to
                                say Hi
                            </p>
                        </div>
                        <form className="flex flex-col gap-3">
                            <input required type="text" placeholder="Name" />
                            <input required type="email" placeholder="Email" />
                            <textarea required placeholder="Message" />
                            <button className="bg-tertiary max-md:w-full justify-center flex items-center gap-3 text-white px-4 py-2 w-fit rounded-lg hover:bg-primary duration-300">
                                <BsSend />
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="flex items-center gap-3">
                            <MdEmail size={30} />
                            ahmad.shojaazimi@gmail.com
                        </h1>
                        <h1 className="flex items-center gap-3">
                            <MdPhone size={30} />
                            +90 (0) 544 176 22
                        </h1>
                        <div className="flex items-center gap-3 social-links">
                            <a href="https://twitter.com/AzimiShja">
                                <FaXTwitter />
                            </a>
                            <a href="https://github.com/AzimiShja">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/ahmad-shaja-azimi-603929254/">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
