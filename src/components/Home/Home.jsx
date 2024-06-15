import { motion } from 'framer-motion';
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="">
            <Navbar />
            <div className="flex py-20 max-sm:pl-10 md:px-[200px] max-xl:px-10 flex-col w-full bg-soft-black h-[53vh] justify-start items-start">
                <motion.div
                    className="text-7xl font-title font-semibold"
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                >
                    <motion.h1 className="text-white">Great ideas</motion.h1>
                    <motion.h1 className="text-gray-300 opacity-80 ">Deserve Great</motion.h1>
                    <motion.h1 className="text-gray-300 opacity-80">Products</motion.h1>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
