import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const icons = [
  { icon: 'simple-icons:react', title: 'React' },
  { icon: 'simple-icons:astro', title: 'Astro' },
  { icon: 'devicon-plain:nextjs', title: 'NextJS' },
  { icon: 'devicon-plain:tauri', title: 'Tauri' },
  { icon: 'simple-icons:django', title: 'Django' },
  { icon: 'devicon-plain:csharp', title: 'C#' },
  { icon: 'devicon-plain:java', title: 'Java' },
  { icon: 'devicon-plain:unity', title: 'Unity' },
  { icon: 'simple-icons:gamemaker', title: 'GameMaker' },
];

export default function IconCarousel() {
    return (
    <div className="relative max-w-xs md:max-w-xl" style={{ padding: '0.5rem 0' }}>
      <Swiper
        spaceBetween={12}
        slidesPerView={4}
        centeredSlides={false}
        initialSlide={0}
        style={{ width: '100%', margin: '0 auto' }}
        breakpoints={{
          1024: { slidesPerView: 7 }, // lg:desktop
          640: { slidesPerView: 5 },  // sm:tablet
        }}
      >
        {icons.map(({ icon, title }) => (
          <SwiperSlide key={icon}>
            <div className="flex flex-col items-center justify-center w-16 mx-auto">
              <iconify-icon icon={icon} title={title} class="text-3xl text-white opacity-70 hover:opacity-100 hover:scale-125 transition-transform duration-200 p-4" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );  
} 