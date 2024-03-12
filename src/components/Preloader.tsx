import prelaoder from "../assets/motion.svg";
const Preloader = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <img src={prelaoder} className="w-[200px]" />
            <h1 className="text-3xl font-madimi">Almost There...</h1>
        </div>
    )
}

export default Preloader