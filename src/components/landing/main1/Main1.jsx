import React, { useEffect, useState } from "react";
// import CARTEL from "../../../assets/1920.webp";
import {
  FirstImage,
  FourthImage,
  SecondImage,
  ThirdImage,
} from "../../../assets";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main1.css";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

export const Main1 = ({ tarifRef }) => {
  // const [userName, setUserName] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
      once: false,
      anchorPlacement: "top-center",
    });

    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // if (userInfo) {
    //   setUserName(userInfo.displayName);
    // }
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("userInfo");
  //   setUserName("");
  //   navigate("/");
  // };

  return (
    <div className="flex flex-col items-center bg-[#000000]">
      <p
        data-aos="fade-down"
        className="cd:text-[3rem] text-[2rem] text-[white] font-bold mt-12"
      >
        ОНЛАЙН-ОКУУ КУРСУ
      </p>
      {/* {userName && <p className="text-white mt-2">{userName}</p>} */}

      {/* {!userName ? (
        <Link to="login">
          <div className="border-2 border-[#0f3460]">
            <p className="text-white cd:text-[1,5rem] py-3 px-8 text-[1rem] cd:text-start text-center">
              РЕГИСТРАЦИЯ
            </p>
          </div>
        </Link>
      ) : (
        <div
          className="border-2 border-[#0f3460] cursor-pointer"
          onClick={handleLogout}
        >
          <p className="text-white cd:text-[1,5rem] py-3 px-8 text-[1rem] cd:text-start text-center">
            Выйти
          </p>
        </div>
      )} */}
      <div data-aos="fade-right" className="mt-8 cd:w-full w-[13rem]">
        <p className="text-[white] md:text-[1.3rem] text-[1rem] cd:ml-0  cd:text-center text-center  ">
          <span className="text-[#e94560] ">WILDBERRIES'ти </span> Актилек
          Исламбектен окуп уйонуу
        </p>
        <p className="text-[white] md:text-[1.3rem] text-[1rem]  cd:text-center text-center">
          Жаныдан баштагысы келгендерге жана учурда иштеп, бирок соодасы болбой
          жаткандарга да туура келет
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="bg-[#16213e] w-[15rem] cursor-pointer h-[7vh] flex justify-center items-center mt-12"
      >
        <p
          onClick={() =>
            tarifRef.current &&
            tarifRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="text-[#e94560] font-extrabold"
        >
          Тарифы
        </p>
      </div>
      <p className="cd:text-[3rem] text-[1rem] text-[white]">
        WB'ДЕ СООДА КЫЛУУ
      </p>

      <div className="cd:w-[60rem] w-[20rem] text-center flex flex-col  items-center cd:ml-[3rem] ml-0 h-[15vh] ">
        <p
          data-aos="fade-right"
          className="text-[white] cd:text-[3rem] text-[1.2rem]  cd:w-[55rem] w-[15rem] font-extrabold cd:text-start text-center"
        >
          ЭМНЕГЕ АЗЫР WILDBERRIES'ТЕ БИЗНЕС КЫЛУУ ПОПУЛЯРДУУ?
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 mt-[7rem] pb-12 border-b-2 border-[#0f3460]">
        <div
          data-aos="flip-right"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[white] py-8 h-[60vh]"
        >
          {/* <FirstImage /> */}
          <p className="font-extrabold mt-4 mb-2 text-[#38388a] text-[1.4rem]">
            Кардар коп
          </p>
          <p className="text-center text-[1.2rem] w-[13rem]">
            Оффлайн точкаларга салыштырганда албетте онлайнда кардар коп
          </p>
          <p className="mt-4 text-center text-[1.2rem] w-[14rem]">
            Бир учурда <span className="text-[#38388a]">миллиондон</span> ашуун
            адам WB'да товар издеп отурат
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[white]  h-[60vh]"
        >
          {/* <SecondImage /> */}
          <p className="font-extrabold mt-4 mb-2 text-[#38388a] text-[1.4rem]">
            Оной баштоо
          </p>
          <p className="text-center text-[1.2rem] w-[13rem]">
            Оффлайн точка ачуу учун аренда товар толтуруу жана башка чыгашаларга
            коп суммада акча керектелет
          </p>
          <p className="mt-4 text-center text-[1.2rem] w-[15rem]">
            Ал эми маркетплейсте бир товар менен чон суммада кирешеге чыкса
            болот буга коп акча керектелбейт
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[white] h-[60vh]"
        >
          <p className="text-center font-extrabold mt-4 mb-2 text-[#38388a] text-[1.3rem]">
            Ишенимдуу
          </p>
          <p className="text-center text-[1.2rem] w-[15rem]">
            Кардар товар заказ кылганда кайтаруу, кийим болсо кийип коруу
            мумкунчулугу бар жана WB сатуучуларын официалдуу каттоого алат.
            Ошондуктан кардарлардын WILDBERRIES'ке ишеними жогору
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[white]  h-[60vh]"
        >
          <p className="text-center font-extrabold mt-4 mb-2 text-[#38388a] text-[1.4rem]">
            Бизнести автоматташтырса болот
          </p>
          <p className="text-center text-[1.2rem] w-[14rem]">
            Кытайдан же кайсыл жактан болсо да товарынызды алдырып WB'нын
            складына чейин жайгаштыруу процессин аралыктан ишке ашырсаныз болот.
            Буга фулфильмент кызматын колдоносуз.
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center mb-8 gap-12">
        <div>
          <p
            data-aos="fade-right"
            className="text-[#e94560] cd:text-[1.5rem] text-[2rem] font-extrabold "
          >
            ОКУУ ПРОГРАММАЛАРЫ ОНЛАЙН ФОРМАТТА ЖАНА ТУЗ ЭФИРЛЕР АРКЫЛУУ ОТУЛОТ
          </p>
          {/* <p
            data-aos="fade-right"
            className="text-[#0f3460] gd:w-[25rem] w-[20rem] text-[1.5rem] font-bold "
          >
            практика на реальных задачах,{" "}
            <span className="text-white">внутри сообщества</span> уже
            действующих селлеров
          </p> */}
        </div>
        {/* <div>
          <p
            data-aos="fade-right"
            className="text-[#0f3460] xl:w-[43rem] cd:w-[35rem] w-[20rem] cd:ml-0 ml-8 text-[1.3rem] "
          >
            Наше обучение{" "}
            <span className="text-[#e94560]">отличается от всех</span>{" "}
            предложенных на рынке, потому что происходит НА ПРАКТИКЕ уже
            действующих резидентов клуба CARTEL
          </p>
          <p
            data-aos="fade-right"
            className="text-white cd:text-[1.2rem] text-[1rem] cd:mt-0 mt-4 cd:pl-0 pl-8"
          >
            - онлайн уроки
          </p>
          <p
            data-aos="fade-right"
            className="text-white cd:text-[1.2rem] text-[1rem]  cd:pl-0 pl-8"
          >
            - живые встречи внутри клуба
          </p>
          <p
            data-aos="fade-right"
            className="text-white cd:text-[1.2rem] text-[1rem]  cd:pl-0 pl-8"
          >
            - работа с реальными кейсами и задачами
          </p>
        </div> */}
      </div>
    </div>
  );
};
