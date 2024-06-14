import menu from '../../assets/menu.svg'

const Navbar = () => {
    return (
        <section className="flex justify-between items-center bg-soft-black py-10 px-[300px]">
            <h1 className="font-header font-semibold text-xl text-gray-400">Enshrine </h1>

            <div className="flex justify-center items-center gap-20 ">
                <button className="btn" type="button">
                    <strong>Say Hello!</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button>

                <div className="flex items-center gap-3">
                    <button className="text-gray-400 font-mono text-xl text-gray-">
                        Menu
                    </button>

                    <button>
                       <img  src={menu} alt="" />
                    </button>

                </div>


            </div>
        </section>
    )
}

export default Navbar
