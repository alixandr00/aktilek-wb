// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { useRef } from "react";
// import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export const Lessons = () => {
//   const swiperRef = useRef(null);

//   const goNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <div className="relative h-[120vh] bg-[rgb(17,17,17)]">
//       <Link
//         to="/"
//         className="text-start text-[1rem] text-[#ffffff] underline cursor-pointer "
//       >
//         Башкы бетке
//       </Link>
//       <p className="text-center text-[2rem] text-[white] py-12">
//         Видео сабактар
//       </p>
//       <Swiper
//         ref={swiperRef}
//         spaceBetween={30}
//         centeredSlides={true}
//         slidesPerView={1.5}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/Hp9wUEDasY4"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/jMCOyUgKhqU"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/nXI9CN5a6ew"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/7MnnYT9hWLg"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/GCNEqFJM3GA"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/zc-4grfULhg"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/1nkoP6NosxU"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//         <SwiperSlide>
//           <iframe
//             width="100%"
//             height="500px"
//             src="https://www.youtube.com/embed/oDbDuu17p7I"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </SwiperSlide>
//       </Swiper>
//       <button
//         onClick={goPrev}
//         style={{
//           position: "absolute",
//           left: "5%",
//           top: "50%",
//           transform: "translateY(-50%)",
//           zIndex: 10,
//           fontSize: "40px",
//         }}
//       >
//         <FaChevronCircleLeft fill="#d2d2d2" />
//       </button>
//       <button
//         onClick={goNext}
//         style={{
//           position: "absolute",
//           right: "5%",
//           top: "50%",
//           transform: "translateY(-50%)",
//           zIndex: 10,
//           fontSize: "40px",
//         }}
//       >
//         <FaChevronCircleRight fill="#d2d2d2" />
//       </button>
//     </div>
//   );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

export const Lessons = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const lessons = [
    {
      id: 1,
      title: "1-сабак",
      videoUrl: "https://www.youtube.com/embed/Hp9wUEDasY4",
    },
    {
      id: 2,
      title: "2-сабак",
      videoUrl: "https://www.youtube.com/embed/jMCOyUgKhqU",
    },
    {
      id: 3,
      title: "3-сабак",
      videoUrl: "https://www.youtube.com/embed/nXI9CN5a6ew",
    },
    {
      id: 4,
      title: "4-сабак",
      videoUrl: "https://www.youtube.com/embed/7MnnYT9hWLg",
    },
    {
      id: 5,
      title: "5-сабак",
      videoUrl: "https://www.youtube.com/embed/GCNEqFJM3GA",
    },
    {
      id: 6,
      title: "6-сабак",
      videoUrl: "https://www.youtube.com/embed/zc-4grfULhg",
    },
    {
      id: 7,
      title: "7-сабак",
      videoUrl: "https://www.youtube.com/embed/1nkoP6NosxU",
    },
    {
      id: 8,
      title: "8-сабак",
      videoUrl: "https://www.youtube.com/embed/oDbDuu17p7I",
    },
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative h-screen bg-[rgb(17,17,17)] p-8">
      <Link
        to="/"
        className="text-start text-[1rem] text-[#ffffff] underline cursor-pointer "
      >
        Башкы бетке
      </Link>
      <p className="text-center text-[2rem] text-[white] py-12">
        Видео сабактар
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            className="text-[#ffffff] bg-[#333] p-4 hover:bg-[#555]"
            onClick={() => openModal(lesson.videoUrl)}
          >
            {lesson.title}
          </button>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#282c34",
            color: "white",
            width: "80%",
            height: "70%",
          },
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={selectedVideo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Жабуу
        </button>
      </Modal>
    </div>
  );
};
