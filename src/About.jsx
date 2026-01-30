import FirstImage from "./assets/images/card-img.jpeg";
import SecondImage from "./assets/images/hero-img.jpg";

const About = () => {
    return (
        <>
            <section className="relative w-full 2xl:min-h-screen bg-[#f9faf3] text-three overflow-hidden">
                <div className="flex flex-col lg:flex-row w-full h-fit 2xl:h-screen gap-y-6 md:gap-y-10 px-0 2xl:px-[5rem] pt-14 md:pt-16 lg:py-16 2xl:py-[6rem]">
                    <div className="flex flex-col w-full lg:w-3/5 2xl:w-1/2 h-full gap-y-6 md:gap-y-8 2xl:gap-y-10 px-4 md:px-8 2xl:px-0">
                        <div className="flex items-center gap-x-2 lg:gap-x-3">
                            <p className="shrink-0 font-gambarino text-xs md:text-base lg:text-xl text-ten uppercase">
                                Our Story
                            </p>
                            <div className="w-full lg:w-[20rem] h-0.5 bg-three"></div>
                        </div>

                        <div className="flex flex-col gap-y-6">
                            <h1 className="font-gambarino text-3xl lg:text-5xl 2xl:text-[3.5vw] leading-[1.1]">
                                Menjadikan Setiap Momen Makan Anda Tak
                                Terlupakan
                            </h1>

                            <div className="flex flex-col w-full 2xl:w-[48rem] gap-y-2 md:gap-y-4">
                                <p className="font-satoshiMedium text-base md:text-lg leading-tight text-pretty">
                                    Sambal Endez Fajar lahir dari sebuah obsesi
                                    untuk menyajikan kualitas tanpa kompromi.
                                    Kami memahami bahwa rasa yang luar biasa
                                    tidak bisa diciptakan secara instan. Itulah
                                    mengapa kami memperlakukan setiap bahan
                                    layaknya sebuah karya seni, memastikan
                                    perpaduan antara pedasnya cabai pilihan dan
                                    gurihnya rempah menciptakan harmoni yang pas
                                    di lidah.
                                </p>
                                <p className="font-gambarino text-lg md:text-2xl leading-[1.4] text-center py-2">
                                    " Seni kuliner yang sesungguhnya bukan
                                    tentang bumbu yang mahal, tapi tentang
                                    ketulusan dalam setiap prosesnya. "
                                </p>
                                <p className="font-satoshiMedium text-base md:text-lg leading-tight text-pretty">
                                    Kami menjaga setiap tahapan produksi dengan
                                    penuh ketelitian, mulai dari teknik sangrai
                                    rempah tradisional hingga memastikan tekstur
                                    lauk tetap melimpah dan juicy. Tanpa
                                    tambahan pengawet, kami mengandalkan
                                    kekuatan bahan alami untuk menjaga
                                    kesegaran, sehingga Anda bisa menikmati
                                    sensasi sambal rumahan kelas premium kapan
                                    saja.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full 2xl:w-[48rem] gap-y-3 2xl:gap-y-4">
                            <h2 className="font-gambarino text-xl md:text-2xl leading-[1.1]">
                                Dari Dapur untuk Meja Makan Anda
                            </h2>

                            <div className="w-full h-0.75 bg-three"></div>

                            <div className="flex flex-col w-full justify-end gap-y-3 2xl:gap-y-4">
                                <p className="font-satoshiMedium text-base md:text-lg leading-tight text-pretty text-end">
                                    Dukungan Anda membantu kami untuk terus
                                    <br />
                                    menjaga kualitas rasa tanpa kompromi.
                                </p>
                                <p className="font-satoshiRegular font-semibold text-base md:text-lg leading-tight text-pretty text-end">
                                    - EST. 2025 -
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute 2xl:relative hidden lg:flex w-2/5 2xl:w-1/2 h-full right-0 top-0">
                        <div className="absolute w-[20rem] 2xl:w-[28rem] h-[50%] 2xl:h-[90%] bg-transparent border-2 border-ten left-1/2 2xl:left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 2xl:rotate-15"></div>

                        <div className="absolute w-[20rem] 2xl:w-[28rem] h-[50%] 2xl:h-[90%] left-[60%] 2xl:left-[75%] top-[7%] 2xl:top-1/2 -translate-x-1/2 2xl:-translate-y-1/2 rotate-10 scale-85 z-10 2xl:z-20 overflow-hidden">
                            <img
                                src={FirstImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute w-[20rem] 2xl:w-[28rem] h-[50%] 2xl:h-[90%] left-[10%] 2xl:left-[35%] bottom-[10%] 2xl:top-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2 -rotate-10 z-20 2xl:z-10 overflow-hidden">
                            <img
                                src={SecondImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex lg:hidden w-full h-[18rem] sm:h-[26rem] overflow-hidden">
                        <img
                            src={FirstImage}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
