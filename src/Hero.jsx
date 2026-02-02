import HeroImg from "./assets/images/hero-img.jpg";

const Hero = () => {
    const badges = [
        "Premium Ingredients",
        "Chunky Texture",
        "No Added Preservatives",
        "Authentic Home-Recipe",
    ];

    return (
        <>
            <section
                id="hero-section"
                className="relative w-full lg:min-h-screen text-[#f9faf3]"
            >
                <div className="relative lg:absolute inset-0 w-full h-screen sm:h-[40rem] md:h-[32rem] lg:h-screen bg-transparent z-20">
                    <div className="relative flex flex-col w-full h-full gap-y-2 items-center justify-center sm:justify-start md:items-center md:justify-center text-center py-0 sm:py-[6rem] md:py-0">
                        <h1 className="font-gambarino text-5xl sm:text-7xl lg:text-[6vw] leading-[1.1]">
                            Cita Rasa
                            <br />
                            Sambal Rumahan
                        </h1>

                        <div className="w-full sm:w-[34rem] px-8 lg:px-0">
                            <p className="font-satoshiMedium text-base lg:text-lg leading-tight">
                                Lebih dari sekedar pelengkap, hadir dengan isian
                                lauk melimpah yang diolah dari rempah pilihan.
                                Definisi baru dalam menikmati sambal rumahan di
                                setiap suapan.
                            </p>
                        </div>

                        <div className="flex gap-x-1.5 md:gap-x-1 lg:gap-x-1.5 mt-1 lg:mt-3">
                            <div className="w-0.75 md:w-0.5 lg:w-0.75 h-12 md:h-8 lg:h-12 bg-one"></div>
                            <div className="w-0.75 md:w-0.5 lg:w-0.75 h-30 md:h-20 lg:h-30 bg-one"></div>
                            <div className="w-0.75 md:w-0.5 lg:w-0.75 h-12 md:h-8 lg:h-12 bg-one"></div>
                        </div>

                        <div className="absolute hidden lg:flex gap-x-[8rem] bottom-[2rem]">
                            {badges.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-x-2 items-center"
                                >
                                    <div className="w-1.5 h-1.5 bg-one rounded-full"></div>
                                    <p className="font-satoshiMedium text-lg leading-tight">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute flex flex-col lg:hidden gap-y-1 bottom-[1rem]">
                            <div className="flex gap-x-6 justify-center">
                                {badges.slice(0, 2).map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-x-1 items-center"
                                    >
                                        <div className="w-1 h-1 bg-one rounded-full"></div>
                                        <p className="font-satoshiMedium text-sm leading-tight">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-x-6 justify-center">
                                {badges.slice(2, 4).map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-x-1.5 items-center"
                                    >
                                        <div className="w-1 h-1 bg-one rounded-full"></div>
                                        <p className="font-satoshiMedium text-sm leading-tight">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 w-full h-screen sm:h-[40rem] md:h-[32rem] lg:h-screen overflow-hidden">
                    <div className="absolute w-full h-full bg-black/60 z-10"></div>

                    <img
                        src={HeroImg}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
