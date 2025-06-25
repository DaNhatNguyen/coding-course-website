"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

export default function Slider() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="relative w-full mt-5 mx-auto max-w-screen-xl px-4 py-4 overflow-hidden">
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                loop
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="rounded-3xl"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#FE215E] to-[#FF9402] rounded-3xl p-6 md:p-10 text-white overflow-hidden">
                        <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Học HTML CSS cho người mới 👑
                            </h2>
                            <p className="text-base md:text-lg">
                                Thực hành dự án với Figma, hàng trăm bài tập, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.
                            </p>
                            <button className="border-2 border-white rounded-full px-6 py-2 font-bold text-white hover:bg-white hover:text-pink-600 transition">
                                HỌC THỬ MIỄN PHÍ
                            </button>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0 relative h-[200px] md:h-[250px] w-full">
                            <Image
                                src="/slide-html-css.png"
                                alt="HTML CSS Slide"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#FE215E] to-[#FF9402] rounded-3xl p-6 md:p-10 text-white overflow-hidden">
                        <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Học HTML CSS cho người mới 👑
                            </h2>
                            <p className="text-base md:text-lg">
                                Thực hành dự án với Figma, hàng trăm bài tập, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.
                            </p>
                            <button className="border-2 border-white rounded-full px-6 py-2 font-bold text-white hover:bg-white hover:text-pink-600 transition">
                                HỌC THỬ MIỄN PHÍ
                            </button>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0 relative h-[200px] md:h-[250px] w-full">
                            <Image
                                src="/slide-html-css.png"
                                alt="HTML CSS Slide"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Navigation buttons */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
            >
                <ChevronLeft className="w-8 h-8 text-white bg-black/30 rounded-full p-1 cursor-pointer" />
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
            >
                <ChevronRight className="w-8 h-8 text-white bg-black/30 rounded-full p-1 cursor-pointer" />
            </button>
        </div>
    );
}
