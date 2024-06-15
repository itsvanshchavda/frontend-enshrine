import { motion } from 'framer-motion';
import shape from '../../assets/about-shape.svg';
import Blog from '../Blogs/Blog';
import KnoMore from '../KnoMore/KnoMore';
import Work from '../Work/Work';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-soft-black border-none overflow-hidden flex justify-between items-center flex-row max-sm:py-20">
      <div className="bg-white border w-full h-auto rounded-[4.5rem]">
        <div className="flex justify-start md:flex-row flex-col items-center">
          {/* IMG */}
          <img src={shape} alt="" className='max-w-[61rem]' />

          <div className="px-14 lg:static absolute py-28">
            <h1 className="text-4xl md:text-7xl font-title font-bold text-gray-900 mb-4 max-w-xl">
              Strategic UX Design & Brand Studio.
            </h1>

            <motion.p
              className="text-lg md:text-2xl text-gray-700 max-w-[31rem]"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              We help entrepreneurs and businesses achieve ambitious dreams by building design-centric products and brands.
            </motion.p>
          </div>
        </div>

        <Work />
        <Blog />
        <KnoMore />
      </div>
    </section>
  );
}

export default About;
