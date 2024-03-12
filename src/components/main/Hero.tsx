import Lottie from "lottie-react";
import { FaLinkedin, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import animationData from "../../assets/Animation.json";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div className="lg:h-screen hero py-10 bg-fourth flex pt-[20px] md:pt-[250px] flex-col justify-between items-center">
            <div className="flex max-md:flex-col lg:w-[1000px] justify-between items-center gap-4 px-8">
                <div className="flex md:max-w-[700px] max-md:items-center flex-col gap-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:text-7xl rounded-l-[100px] border-l-4 pl-10 border-tertiary p-3 max-lg:text-5xl max-md:text-center text-primary font-madimi leading-[70px]"
                    >
                        Front-End {"<React/>"} Developer
                    </motion.h1>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-gray-500 font-light max-md:text-center"
                    >
                        Welcome to{" "}
                        <span className="text-tertiary font-bold text-xl">
                            Shaja's
                        </span>{" "}
                        Web Design Hub! Crafting dynamic and stunning websites
                        with passion and precision. Let's make your online
                        presence unforgettable!
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="grid lg:grid-cols-10 grid-cols-5 max-lg:gap-4 gap-2 text-5xl max-md:hidden  lg:text-6xl"
                    >
                        <BiLogoTypescript className="hover:scale-125 duration-300" />
                        <BiLogoJavascript className="hover:scale-125 duration-300" />
                        <FaReact className="hover:scale-125 duration-300" />
                        <SiRedux className="hover:scale-125 duration-300" />
                        <SiTailwindcss className="hover:scale-125 duration-300" />
                        <FaSass className="hover:scale-125 duration-300" />
                        <SiExpress className="hover:scale-125 duration-300" />
                        <FaNodeJs className="hover:scale-125 duration-300" />
                        <DiMongodb className="hover:scale-125 duration-300" />
                        <TbSql className="hover:scale-125 duration-300" />
                    </motion.div>
                </div>
                <div className="flex flex-col items-center gap-5 social-links">
                    <div className="flex gap-3">
                        <a href="https://github.com/AzimiShaja">
                            <VscGithubAlt />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmad-shaja-azimi-603929254/">
                            <FaLinkedin />
                        </a>
                    </div>
                    <button className="bg-tertiary text-white px-4 py-2 rounded-lg hover:bg-primary duration-300">
                        View Projects
                    </button>
                </div>
            </div>
            <Lottie animationData={animationData} className="w-[30px]" />
        </div>
    );
};

export default Hero;
