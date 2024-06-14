
import car from "../../assets/car.png"
import carlogo from '../../assets/car-logo.svg'
import video from '../../assets/video.mp4'
import HLlogo from '../../assets/'

const Work = () => {
    return (
        <section className="">
            <div className="px-[5vw] py-20 flex justify-center items-center"> 
                <h1 className="text-gray-700 text-3xl px-8 sm:px-16 font-semibold">Featured Work.</h1> 
                <hr className="border-gray-300 border-b-2 flex-1 max-w-3xl"/>
            </div>

        
            <div className="grid grid-cols-1 gap-10 px-[5vw] sm:grid-cols-2">
                <div className="flex flex-col items-center">
                    <img src={car} alt="car" className="rounded-xl w-full max-w-[400px] h-auto cursor-pointer hover:scale-95 duration-300"/>
                    <img src={carlogo} className="size-24 " alt="carlogo" />
                    <p className="max-w-xs text-center  text-gray-600">Building India's first ever rental car marketplace.</p>
                </div>

                <div className="flex justify-center items-center">
                    <video src={video} className="rounded-xl max-w-full h-auto" autoPlay muted loop controls></video>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Work;
