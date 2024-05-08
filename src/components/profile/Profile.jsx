import React, { useState } from "react";
import "./Profile.css";
import Image1 from "../../assets/Снимок экрана 2024-05-06 203301.png";
import Image2 from "../../assets/Снимок экрана 2024-05-06 203559.png";
import { FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa";

export const Profile = () => {
  const [image, setImage] = useState(Image1);

  return (
    <div className="h-[60vh] ">
      <div className="bg-[#000000] h-[20vh]"></div>
      <div className="bg-[#000000] h-[55vh] flex justify-center">
        <div className="bg-[white] rounded-t-[2rem] h-[40vh] w-[30rem]">
          <div className="flex justify-center">
            <img
              className="w-[10rem] h-[10rem] rounded-[50%] border-[0.5rem] border-[white] mt-[-5rem]"
              src={image}
              alt="Profile"
              onMouseEnter={() => setImage(Image2)}
              onMouseLeave={() => setImage(Image1)}
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Эксперт</p>
            <p className="text-[1.3rem] font-bold">Актилек Исламбек</p>
            <p className="px-2 mt-2 text-center">
              WILDBERRIES жана Кытай менен бизнес кылууда 2 жылдык тажрыйбасы
              менен болушот
            </p>
            <div className="social-icons">
              <a
                href="https://web.telegram.org/k/#@aktilekwb"
                className="icon icon-telegram"
              >
                <FaTelegram size="30px" />
              </a>
              <a
                href="https://www.youtube.com/@Aktilek.Islanbek"
                className="icon icon-youtube"
              >
                <FaYoutube size="30px" />
              </a>
              <a
                href="https://www.instagram.com/aktilek.wb/reels/"
                className="icon icon-instagram"
              >
                <FaInstagram size="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
