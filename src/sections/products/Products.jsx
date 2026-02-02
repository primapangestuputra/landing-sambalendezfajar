import { products } from "../../constants/constants";
import MainImage from "../../assets/images/hero-img.jpg";

const Products = () => {
    return (
        <>
            <section className="w-full min-h-screen text-[#f9faf3] bg-five overflow-hidden">
                <div className="flex flex-col w-full gap-y-14 md:gap-y-20 lg:gap-y-28 2xl:gap-y-30 px-4 sm:px-0 py-14 md:py-16 2xl:py-[6rem]">
                    {/* Heading */}
                    <div className="flex flex-col w-full gap-y-4 lg:gap-y-10">
                        <div className="flex w-full justify-center items-center gap-x-2 lg:gap-x-3">
                            <div className="w-20 lg:w-[8rem] h-0.5 bg-two"></div>
                            <p className="shrink-0 font-gambarino text-xs md:text-base lg:text-xl text-two uppercase">
                                Our Collection
                            </p>
                            <div className="w-20 lg:w-[8rem] h-0.5 bg-two"></div>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <h1 className="font-gambarino text-3xl lg:text-[4.5vw] leading-[1.1] text-center">
                                Koleksi Rasa Pilihan Kami
                            </h1>

                            <p className="font-satoshiRegular lg:font-satoshiMedium text-base md:text-lg leading-tight text-pretty text-center sm:px-[10rem] lg:px-[24rem] 2xl:px-[43rem]">
                                Empat varian autentik yang dirancang untuk
                                memberikan dimensi baru di setiap suapan nasi
                                Anda.
                            </p>
                        </div>
                    </div>

                    {/* Products Display */}
                    <div className="flex flex-col w-full">
                        {products.map((item, index) => (
                            <>
                                <div
                                    key={`item-${index}`}
                                    className={`flex flex-col sm:flex-row w-full gap-y-4 ${
                                        index % 2 === 0
                                            ? "sm:flex-row-reverse"
                                            : ""
                                    }`}
                                >
                                    <div className="flex w-full sm:w-1/2 h-[22rem] sm:h-screen md:h-[32rem] lg:h-screen bg-white overflow-hidden">
                                        <img
                                            src={MainImage}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex w-full sm:w-1/2 justify-center items-center sm:px-8">
                                        <div className="flex flex-col lg:w-[70%] 2xl:w-3/5 gap-y-4 lg:gap-y-6 2xl:gap-y-8">
                                            <div className="flex flex-col-reverse sm:flex-col gap-y-1 md:gap-y-3">
                                                <p className="font-gambarino text-xl lg:text-3xl leading-[1.1] text-two">
                                                    {item.price}
                                                </p>

                                                <h2 className="font-gambarino text-2xl lg:text-[3vw] leading-[1.1] text-two">
                                                    {item.name}
                                                </h2>
                                            </div>

                                            <div className="flex flex-col gap-y-4 lg:gap-y-6 2xl:gap-y-8 2xl:pl-[8rem] 2xl:pr-[8rem]">
                                                <p className="font-satoshiRegular lg:font-satoshiMedium text-base md:text-lg leading-tight text-pretty">
                                                    {item.description}
                                                </p>

                                                <a
                                                    href=""
                                                    className="group w-fit px-4 md:px-6 py-2 md:py-2.5 border-2 border-two bg-two md:bg-transparent hover:bg-two transition-color ease-in-out duration-300"
                                                >
                                                    <span className="font-satoshiRegular font-semibold text-base md:text-lg leading-tight text-three md:text-two group-hover:text-three transition-color ease-in-out duration-300">
                                                        Pesan Sekarang
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`${index === 3 ? "hidden" : ""} flex sm:hidden pt-8 pb-4`}
                                >
                                    <div className="w-full h-[0.5px] bg-two"></div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
