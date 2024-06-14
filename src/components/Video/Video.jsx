import { useRef } from "react"


const Video = ({ video, logo }) => {


    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }



    return (
        <div className="flex flex-col  justify-start items-start">
            <video
                ref={videoRef}
                src={video}
                className="rounded-xl cursor-pointer max-w-full h-auto"
                autoPlay
                muted
                loop
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></video>
            <img src={logo} alt="" className="size-24" />
            <p className="max-w-xs text-center text-gray-600">
                A decade old news channel&apos; makeover
            </p>
        </div>
    )
}

export default Video
