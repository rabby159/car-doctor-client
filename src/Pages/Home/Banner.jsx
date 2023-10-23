import ban1 from '../../assets/images/banner/1.jpg'
import ban2 from '../../assets/images/banner/2.jpg'
import ban3 from '../../assets/images/banner/3.jpg'
import ban4 from '../../assets/images/banner/4.jpg'
import ban5 from '../../assets/images/banner/5.jpg'
import ban6 from '../../assets/images/banner/6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BannerStyle.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={ban1} alt="" /></SwiperSlide>
        <SwiperSlide><img  src={ban2} alt="" /></SwiperSlide>
        <SwiperSlide><img  src={ban3} alt="" /></SwiperSlide>
        <SwiperSlide><img  src={ban4} alt="" /></SwiperSlide>
        <SwiperSlide><img  src={ban4} alt="" /></SwiperSlide>
        <SwiperSlide><img  src={ban5} alt="" /></SwiperSlide>
        <SwiperSlide><img  src={ban6} alt="" /></SwiperSlide>
        <div className='absolute transform -translate-y-1/2 top-60 z-10 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full p-16'>
          <h2 className='text-7xl font-bold w-1/2'>Affordable Price For Car Servicing</h2>
          <p className='w-1/2 py-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <button className='btn btn-error mr-5'>Discover More</button>
          <button className='btn btn-outline text-white'>Latest Project</button>
        </div>
      </Swiper>
      
    </>
    );
};

export default Banner;