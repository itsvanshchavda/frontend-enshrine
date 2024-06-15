import { motion } from 'framer-motion';
import menu from '../../assets/menu.svg';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Navbar = () => {


    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
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
        <section className='bg-soft-black'>
            <motion.div
                className="flex justify-between items-center bg-soft-black py-10 md:px-[200px] px-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 className="font-header font-semibold text-xl text-gray-400" variants={itemVariants}>
                    Enshrine
                </motion.h1>

                <motion.div className="flex justify-center items-center gap-20" variants={itemVariants}>
                    <motion.button className="btn" variants={itemVariants}>
                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                        </svg>

                        <span className="text" onClick={handleModal}>Say Hello</span>
                    </motion.button>

                    <motion.div className="md:flex hidden items-center gap-3" variants={itemVariants}>
                        <motion.button className="text-gray-400 font-mono text-xl" variants={itemVariants}>
                            Menu
                        </motion.button>

                        <motion.button variants={itemVariants}>
                            <img src={menu} alt="" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {modal && (<Modal handleModal={handleModal} />)}
        </section>
    );
}

export default Navbar;
