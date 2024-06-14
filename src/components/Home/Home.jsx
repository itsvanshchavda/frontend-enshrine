import Navbar from "../Navbar/Navbar"


const Home = () => {
    return (
        <section className="">

            <Navbar />

            <div className="flex py-20  max-sm:pl-10 md:px-[200px] max-xl:px-10 flex-col w-full bg-soft-black h-[53vh] justify-start items-start">
                <div className="text-7xl font-title font-semibold">
                    <h1 className="text-white ">Great ideas</h1>
                    <h1 className="text-gray-300 opacity-80">Deserve Great</h1>
                    <h1 className="text-gray-300 opacity-80">Products</h1>
                </div>
            </div>

        </section>
    )
}

export default Home
