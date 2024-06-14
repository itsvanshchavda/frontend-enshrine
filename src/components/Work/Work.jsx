
import car from "../../assets/car.png"
import carlogo from '../../assets/car-logo.svg'
import video from '../../assets/video.mp4'
import HLlogo from '../../assets/hl-logo.svg'
import Video from "../Video/Video"

const Work = () => {
    return (
        <section className="">
            <div className="px-[5vw] py-20 flex justify-center items-center"> 
                <h1 className="text-gray-700 text-3xl px-8 sm:px-16 font-semibold">Featured Work.</h1> 
                <hr className="border-gray-300 border-b-2 flex-1 max-w-3xl"/>
            </div>

        
            <div className="grid grid-cols-2 max-xl:grid-cols-1 md:px-[200px] px-20 max-sm:grid-cols-1">
                <div className="flex flex-col justify-start items-start">
                    <img src={car} alt="car" className="rounded-xl w-full max-w-[400px] h-auto cursor-pointer hover:scale-95 duration-300"/>
                    <img src={carlogo} className="size-24 " alt="carlogo" />
                    <p className="mb-10 w-1/2 text-start  text-gray-600">Building India&apos; first ever rental car marketplace.</p>
                </div>

                <div>
                    <Video video={video} logo={HLlogo} />
                </div>
            </div>
        </section>
    );
}

export default Work;
