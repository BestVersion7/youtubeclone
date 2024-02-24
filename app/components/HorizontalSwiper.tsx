"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export function HorizontalSwiper(props: { cards: JSX.Element[] }) {
    return (
        <div className="">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 16,
                    },
                    1440: {
                        slidesPerView: 7,
                        spaceBetween: 16,
                    },
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
            >
                {props.cards.map((item, index) => (
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
