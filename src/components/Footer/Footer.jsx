import icon1 from '../../assets/fb.svg';
import icon2 from '../../assets/linkedin.svg';
import icon3 from '../../assets/x.svg';
import icon4 from '../../assets/ig.svg';
import icon5 from '../../assets/dribble.svg';

const Footer = () => {
  return (
    <footer className="bg-soft-black px-10 py-10 md:px-20 lg:px-[200px] lg:py-20 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-10 md:mb-0">
        <p className="text-white-1 opacity-60 font-sans text-lg md:text-xl">Got a Project?</p>
        <div className="flex items-center justify-start gap-5 mt-3 relative">
          <div className="h-16 w-2 bg-gray-600 opacity-50 hover:w-60 duration-300 cursor-pointer absolute hover:opacity-20"></div>
          <h1 className="text-3xl md:text-4xl py-2 font-title font-bold text-white-1 mx-5">Get in Touch</h1>
        </div>
        <p className="text-white-1 text-xs mt-24">&copy; Copyright 2019</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-header font-bold text-gray-400 text-2xl md:text-3xl">Enshrine</h1>
        <div className="flex items-center gap-4 md:gap-8 mt-5">
          <img src={icon1} alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 hover:scale-105 duration-300 cursor-pointer" />
          <img src={icon2} alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8 hover:scale-105 duration-300 cursor-pointer" />
          <img src={icon3} alt="X" className="w-6 h-6 md:w-8 md:h-8 hover:scale-105 duration-300 cursor-pointer" />
          <img src={icon4} alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 hover:scale-105 duration-300 cursor-pointer" /> 
          <img src={icon5} alt="Dribble" className="w-6 h-6 md:w-8 md:h-8 hover:scale-105 duration-300 cursor-pointer" />
        </div>
        <p className="text-gray-500 font-title font-bold mt-5 md:mt-10">Enshrine Global Systems</p>
      </div>
    </footer>
  );
};

export default Footer;
