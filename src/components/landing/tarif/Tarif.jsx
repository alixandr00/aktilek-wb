import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import {
  Instagram,
  PlusIcon,
  Telegram,
  Vk,
  Whatsapp,
  XIcon,
  Youtube,
} from "../../../assets";
import { Modal1 } from "../../modal/Modal1";
import { Modal3 } from "../../modal/Modal3";
import { Modal4 } from "../../modal/Modal4";

export const Tarif = ({ tarifRef }) => {
  const [open1, setOpen1] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  const openCloseHandler1 = () => {
    setOpen1(!open1);
  };
  const openCloseHandler3 = () => {
    setOpen3(!open3);
  };
  const openCloseHandler4 = () => {
    setOpen4(!open4);
  };
  useEffect(() => {
    AOS.init({
      offset: 100, // Начинать анимацию при достижении элемента с отступом в 100 пикселей от верха окна
      duration: 300, // Длительность анимации 1 секунда
      easing: "ease-in-out", // Использовать эффект плавного входа и выхода
      delay: 100, // Начать анимацию с задержкой в 200 миллисекунд
      once: false, // Анимация должна произойти только один раз
      anchorPlacement: "top-center", // Якорь для анимации - верхний центр fewnflkewnflkwen
    });
  }, []);
  return (
    <div
      ref={tarifRef}
      className="flex flex-col  items-center bg-[rgb(16,16,16)]  "
    >
      <div className="cd:w-[70rem] w-[20rem] cd:h-[80vh] h-[90vh]   mt-8 pll ">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="cd:text-[3rem] text-[1.5rem] cd:ml-0 ml-[4rem] centeerr  font-extrabold text-white mb-8 cd:text-start text-center"
        >
          ТАРИФТЕР
        </p>
        <div className="flex  gap-20  border-t-2 cd:flex-nowrap flex-wrap  border-[white] cd:px-0 px-[3rem]">
          <div className="mt-8 pl-4 w-[40rem]">
            <p
              data-aos="fade-right"
              className="text-[1.4rem] font-bold text-[purple] cd:text-start text-center"
            >
              БАЗАЛЫК ТАРИФ
            </p>
            <p
              data-aos="fade-right"
              className="text-[1.2rem] text-[white] cd:text-start text-center"
            >
              <span className="line-through">20 000</span> 14 500 kgs
            </p>
            <p
              data-aos="fade-right"
              className="text-[yellow] cd:text-start text-center"
            >
              болуп толоо бар
            </p>
          </div>
          <div className="mt-8 text-[white] cd:text-[1.2rem] text-[0.8rem] ">
            <p data-aos="fade-left ">- Бардык онлайн сабактарга доступ</p>
            <p className="online" data-aos="fade-left ">
              - Телеграмм чат группа
            </p>
            <p data-aos="fade-left " className="mt-8 online">
              убактысы:
            </p>
            <p data-aos="fade-left " className="online">
              1 ай + 3 ай сабактарга доступ
            </p>
            <div
              onClick={openCloseHandler1}
              data-aos="fade-up"
              className="bg-[#16213e] w-[15rem] cursor-pointer h-[7vh] flex justify-center items-center mt-12"
            >
              <p className="text-[#e94560] font-extrabold">Орун алуу</p>
            </div>
          </div>
          {open1 && <Modal1 open1={open1} setOpen1={setOpen1} />}
          {open3 && <Modal3 open3={open3} setOpen3={setOpen3} />}
          {open4 && <Modal4 open4={open4} setOpen4={setOpen4} />}
        </div>
      </div>
      <div className="cd:w-[70rem] w-[20rem] pll cd:h-[70vh] h-[90vh] mt-8 ">
        <div className="flex gap-20  border-t-2 cd:flex-nowrap flex-wrap cd:px-0 px-[3rem] border-[white]">
          <div className="mt-8 pl-4 w-[40rem]">
            <p
              data-aos="fade-right"
              className="text-[1.4rem] font-bold text-[purple] cd:text-start text-center"
            >
              ЭКСПЕРТ ТАРИФИ
            </p>

            <p
              data-aos="fade-right"
              className="text-[1.2rem] text-[white] cd:text-start text-center"
            >
              <span className="line-through">50 000</span> 25 000 kgs
            </p>
            <p
              data-aos="fade-right"
              className="text-[yellow] cd:text-start text-center"
            >
              болуп толоо бар
            </p>
          </div>
          <div className="mt-8 text-[white] cd:text-[1.2rem] text-[0.8rem] ">
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - Бардык сабактарга доступ
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - Телеграмм чат группа
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"} className="">
              - 4 жолу туз эфирде Актилектен жеке разбор
            </p>
            <p
              data-aos={isMobile ? "fade-right" : "fade-left"}
              className="mt-8"
            >
              убактысы:
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              1 ай + 4 ай сопровождение
            </p>
            <div
              onClick={openCloseHandler3}
              data-aos="fade-up"
              className="bg-[#16213e] w-[15rem] cursor-pointer h-[7vh] flex justify-center items-center mt-12"
            >
              <p className="text-[#e94560] font-extrabold">Орун алуу</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cd:w-[70rem] w-[20rem] cd:h-[80vh] h-[100vh] pll mt-8 ">
        <div className="flex gap-20 pl-4 border-t-2 border-[white] ">
          <div className="text-[1.1rem] ">
            <p
              data-aos="fade-right"
              className="text-[1.4rem] font-bold text-[purple] mt-8 cd:px-0 px-[3rem]"
            >
              Жеке наставничество
            </p>
            <p data-aos="fade-right" className="text-white cd:px-0 px-[3rem]">
              <span className="text-[grey] line-through">120 000</span> 1000$
            </p>
            <div className="text-[white]">
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -3 ай жеке иш алып баруу
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Сиздин потенциалынызды карап ошого жараша иштешуу
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Актилек менен тузмо туз байланышуу
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Командага кошулуу
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Чогу товар тандоо
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Товарга 100k жогору бюджет болсо ойлонбой кайрылыныз биргеликте
                баарын мыкты денгээлде жасайбыз
              </p>
            </div>
            <div className=" h-[10vh] flex justify-center">
              <div
                onClick={openCloseHandler4}
                data-aos="fade-up"
                className="bg-[#16213e] w-[15rem] cursor-pointer h-[7vh] flex justify-center items-center mt-12"
              >
                <p className="text-[#e94560] font-extrabold">Орун алуу</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[75%] h-[80vh] hei">
        <p
          data-aos="fade-right"
          className="text-white md:text-[3rem] text-[1.5rem] font-bold mb-8"
        >
          КОП БЕРИЛГЕН СУРООЛОРГО ЖООП
        </p>
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center border-t-2 border-[white] cursor-pointer h-[10vh]"
              onClick={() => toggleExpand(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p
                data-aos="fade-right"
                className="md:text-[1.5rem] text-[1rem] text-[white]"
              >
                {faq.question}
              </p>
              {expandedIndex === index ? (
                <XIcon fill="#00BFFF" className="icons" />
              ) : (
                <PlusIcon
                  data-aos={isMobile ? "fade-right" : "fade-left"}
                  fill={hoveredIndex === index ? "#00BFFF" : "#8A2BE2"}
                  className="icons"
                />
              )}
            </div>
            <div
              className={`transition-all duration-1000 overflow-hidden ${
                expandedIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p className="md:text-[1rem] text-[0.8rem] pt-4 pb-10 text-[white]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t-2 border-[white] "></div>
      </div>
      <p
        data-aos="fade-down"
        className="text-white cd:text-[3rem] text-[1rem] font-bold "
      >
        Эгер сизде суроо калган болсо, кайрылыныз
      </p>
      <div className="flex cd:flex-nowrap flex-wrap justify-center gap-4 mt-12">
        <a
          data-aos="zoom-in"
          href="https://www.instagram.com/aktilek.wb/"
          className="w-[13rem] h-[8vh] bg-[#c30593] rounded-[0.5rem] flex justify-center items-center"
        >
          <Instagram />
        </a>

        <a
          data-aos="zoom-in"
          href="https://t.me/+LLA6fr74crBlNWYy"
          className="w-[13rem] h-[8vh] bg-[#00BFFF] rounded-[0.5rem] flex justify-center items-center"
        >
          <Telegram />
        </a>
        <a
          data-aos="zoom-in"
          href="https://vk.com/id861989554"
          className="w-[13rem] h-[8vh] bg-[#354ad3] rounded-[0.5rem] flex justify-center items-center"
        >
          <Vk />
        </a>
      </div>
      <div className="flex cd:flex-nowrap flex-wrap justify-center gap-4 mt-4">
        <a
          data-aos="zoom-in"
          href="https://wa.me/message/V6TO3PMQPQLIE1"
          className="w-[20rem] h-[8vh] bg-[#1dba1d] rounded-[0.5rem] flex justify-center items-center"
        >
          <Whatsapp fill="white" />
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.youtube.com/@Aktilek.Islanbek"
          className="w-[20rem] h-[8vh] bg-[red] rounded-[0.5rem] mb-[5rem] flex justify-center items-center"
        >
          <Youtube />
        </a>
      </div>
      {/* <div className="flex cd:flex-nowrap flex-wrap justify-center gap-[10rem] mb-20 mt-20">
        <div className="text-white">
          <p data-aos={isMobile ? "fade-right" : "fade-left"}>
            ИП Кадыркулов Адилет
          </p>
          <p data-aos={isMobile ? "fade-right" : "fade-left"}>
            ИНН 861710998730
          </p>
          <p data-aos={isMobile ? "fade-right" : "fade-left"}>
            ОГРНИП 321861700034520
          </p>
        </div>
        <div className="text-white">
          <p data-aos="fade-right" className="cursor-pointer">
            Договор оферты
          </p>
          <p data-aos="fade-right" className="mt-2">
            Электронная почта:
          </p>
          <p data-aos="fade-right">wb.cartel.kg@gmail.com</p>
        </div>
      </div> */}
    </div>
  );
};

const faqData = [
  {
    question: "Канча акча менен баштаса болот?",
    answer:
      "Кандай товар сатууну чечесиз ошого жараша эсептелет, орточо 30-40 мин сомдук товар менен баштаса болот.(бул товарка боюнча) Эгер кийим менен иштейм десениз анда бюджет 250-300 мин сомдон жогору ",
  },
  {
    question: "WB'да конкуренция кобоюп кетти дешет, киргенге болбой калдыбы?",
    answer:
      "Конкуренция бар, демек ал жакта акча бар, сиз бюджетинизге жараша кире турган категориялар толтура, болгону анализ кылууну уйронуу керек, WB'га киргенге эч качан кеч эмес",
  },
  {
    question: "Ноутбук созсуз керекпи?",
    answer: "Ноутбук созсуз керек",
  },
  {
    question: "ИПны Москвада туруп ачтырса болобу?",
    answer:
      "Болот, нотариустан паспортунузга доверенность жиберуу аркылуу же жакыныныздын атына ачтырып иштей аласыз",
  },
  {
    question: "Кыргызстандын ИПсы менен Москвада иштесе болобу?",
    answer: "Болот",
  },
];
