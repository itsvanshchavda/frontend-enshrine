
import logo from '../../assets/main-logo.svg'

const KnoMore = () => {
    return <>
        <div className='md:px-[200px] px-16  mt-10'>
            <img src={logo} alt="" className='mb-8' />
            <p className='text-2xl mb-8 md:w-2/5 text-gray-500'>Lesser bullshit leads to larger impact.</p>


            <div className='flex items-center justify-start gap-2 pb-20 relative'>
                <p className='font-bold  text-gray-500 mx-5'>Know More About Us</p>
                <div className='w-2 h-5  bg-gray-400 absolute hover:w-52 cursor-pointer hover:opacity-20  duration-300'></div>

            </div>


        </div>


    </>
}

export default KnoMore
