import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const imageDatas = [
  "https://source.unsplash.com/1200x1200/?nature",
  "https://source.unsplash.com/1200x1200/?travel",
  "https://source.unsplash.com/1200x1200/?architecture",
  "https://source.unsplash.com/1200x1200/?animal",
  "https://source.unsplash.com/1200x1200/?bird",
  "https://source.unsplash.com/1200x1200/?cat",
];

function Creative() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {imageDatas.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img
            src={imageUrl}
            alt={`slide-${index}`}
            style={{ width: "100%", height: "90vh", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Creative;
