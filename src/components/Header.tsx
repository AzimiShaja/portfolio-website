import { motion } from "framer-motion";
const Header = () => {
    return (
        <header className="flex sticky z-50 justify-between md:justify-around items-center bg-secondary p-4">
            <motion.a
                href="/"
                initial={{ scale: 100 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
                className="font-bold text-2xl font-lobster text-fourth"
            >
                Shaja@Dev
            </motion.a>
            <nav className="flex items-center gap-4 max-md:hidden">
                <a className="active">Home</a>
                <a href="#about" >About</a>
                <a href="#portfolio">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
