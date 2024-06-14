
import blog1 from '../../assets/blog-1.png'
import blog2 from '../../assets/blog-2.png'
import blog3 from '../../assets/blog-3.png'

const Blog = () => {
    return (
        <section className="pb-20 py-20  bg-[#f7f8fb] mt-10">
            <div className="md:px-[200px] px-20">
                <h1 className="md:text-4xl text-3xl mb-3 text-gray-1 font-bold">Pick Our Brains</h1>
                <p className="md:text-2xl text-xl font-lora text-gray-400">News, Blogs, Good Intentions etc.</p>
            </div>


            {/* Blogs  */}
            <div className="grid max-xl:grid-cols-1 grid-cols-3 cursor-pointer py-20 md:px-[200px] px-14 gap-10">
                <div>
                    <div className="w-[280px] h-[250px] bg-white rounded-lg shadow-lg overflow-hidden ">
                        <img src={blog1} alt="" className="w-full h-full object-cover hover:scale-105 duration-300" />
                    </div>
                    <div className="w-[280px] relative bottom-8 hover:bottom-11 duration-300 rounded-xl mt-5 h-[150px] bg-white shadow-2xl flex flex-col justify-center p-4 gap-2">
                        <p className="text-gray-700 text-lg font-title ">Why does the world need another design agency?  </p>
                        <p className="text-gray-400 text-sm ">Praneeth Pike</p>
                    </div>
                </div>


                <div>
                    <div className="w-[280px] h-[250px] bg-white rounded-lg shadow-lg overflow-hidden ">
                        <img src={blog2} alt="" className="w-full h-full object-cover hover:scale-105 duration-300" />
                    </div>
                    <div className="w-[280px] relative bottom-8 hover:bottom-11 duration-300 rounded-xl mt-5 h-[150px] bg-white shadow-2xl flex flex-col justify-center p-4 gap-2">
                        <p className="text-gray-700 text-lg font-title ">Our New Brand Identity reflects its heart - literally | Part II</p>
                        <p className="text-gray-400 text-sm ">Praneeth Pike</p>
                    </div>
                </div>



                <div>
                    <div className="w-[280px] h-[250px] bg-white rounded-lg shadow-lg overflow-hidden ">
                        <img src={blog3} alt="" className="w-full h-full object-cover hover:scale-105 duration-300" />
                    </div>
                    <div className="w-[280px] relative bottom-8 hover:bottom-11 duration-300 rounded-xl mt-5 h-[150px] bg-white shadow-2xl flex flex-col justify-center p-4 gap-2">
                        <p className="text-gray-700 text-lg font-title ">Our New Brand Identity reflects our heart - literally | Part I</p>
                        <p className="text-gray-400 text-sm ">Praneeth Pike</p>
                    </div>
                </div>




            </div>

        </section>
    )
}

export default Blog
