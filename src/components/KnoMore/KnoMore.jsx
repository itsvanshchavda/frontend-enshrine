
import logo from '../../assets/main-logo.svg'

const KnoMore = () => {
    return <>
        <div className='md:px-[200px] px-20 mt-10'>
            <img src={logo} alt="" className='mb-8' />
            <p className='text-3xl mb-8'>Lesser bullshit leads to larger impact.</p>


            <div className='flex items-center justify-start gap-2 pb-20'>
                <div className='w-2 h-4  bg-gray-500 hover:w-40  duration-300'></div>
                <p className='font-bold  text-gray-1'>Know More About Us</p>
            </div>


        </div>


    </>
}

export default KnoMore
