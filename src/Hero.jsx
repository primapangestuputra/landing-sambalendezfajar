import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import HeroImg from "./assets/images/hero-img.jpg";

const Hero = () => {
    const badges = [
        "Premium Ingredients",
        "Chunky Texture",
        "No Added Preservatives",
        "Authentic Home-Recipe",
    ];

    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const lineRef = useRef(null);
    const badgesRef = useRef(null);
    const badgesRef2 = useRef(null);

    useGSAP(
        () => {
            gsap.set(headingRef.current, {
                yPercent: 70,
                opacity: 0,
            });
            gsap.set([descriptionRef.current, lineRef.current], {
                opacity: 0,
            });
            gsap.set([badgesRef.current, badgesRef2.current], {
                yPercent: 20,
                opacity: 0,
            });

            const tl = gsap.timeline();

            tl.to(
                headingRef.current,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.inOut",
                    overwrite: "true",
                },
                "+=0.3",
            )
                .to(
                    [descriptionRef.current, lineRef.current],
                    {
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.in",
                    },
                    "-=0.2",
                )
                .to(
                    [badgesRef.current, badgesRef2.current],
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.inOut",
                    },
                    "-=0.2",
                );
        },
        { scope: containerRef },
    );

    return (
        <>
            <section
                ref={containerRef}
                id="hero-section"
                className="relative w-full lg:min-h-screen text-[#f9faf3]"
            >
                <div className="relative lg:absolute inset-0 w-full h-screen sm:h-[40rem] md:h-[32rem] lg:h-screen bg-transparent z-20">
                    <div className="relative flex flex-col w-full h-full gap-y-2 items-center justify-center sm:justify-start md:items-center md:justify-center text-center py-0 sm:py-[6rem] md:py-0">
                        <h1
                            ref={headingRef}
                            className="font-gambarino text-5xl sm:text-7xl lg:text-[6vw] leading-[1.1]"
                        >
                            Cita Rasa
                            <br />
                            Sambal Rumahan
                        </h1>

                        <div className="w-full sm:w-[34rem] px-8 lg:px-0">
                            <p
                                ref={descriptionRef}
                                className="font-satoshiMedium text-base lg:text-lg leading-tight"
                            >
                                Lebih dari sekedar pelengkap, hadir dengan isian
                                lauk melimpah yang diolah dari rempah pilihan.
                                Definisi baru dalam menikmati sambal rumahan di
                                setiap suapan.
                            </p>
                        </div>

                        <div
                            ref={lineRef}
                            className="flex gap-x-1.5 md:gap-x-1 lg:gap-x-1.5 mt-1 lg:mt-3"
                        >
                            <div className="w-0.75 md:w-0.5 lg:w-0.75 h-12 md:h-8 lg:h-12 bg-[#f9faf3]"></div>
                            <div className="w-0.75 md:w-0.5 lg:w-0.75 h-30 md:h-20 lg:h-30 bg-[#f9faf3]"></div>
                            <div className="w-0.75 md:w-0.5 lg:w-0.75 h-12 md:h-8 lg:h-12 bg-[#f9faf3]"></div>
                        </div>

                        <div
                            ref={badgesRef}
                            className="absolute hidden lg:flex gap-x-[8rem] bottom-[2rem]"
                        >
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

                        <div
                            ref={badgesRef2}
                            className="absolute flex flex-col lg:hidden gap-y-1 bottom-[1rem]"
                        >
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
