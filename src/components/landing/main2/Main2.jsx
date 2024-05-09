import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main2.css";
import { Link } from "react-router-dom";
// import { Forma } from "../forma/Forma";
// import { Lessons } from "../lessons/Lessons";
import { FreeLesson } from "../../freelesson/FreeLesson";

export const Main2 = () => {
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
  useEffect(() => {
    AOS.init({
      offset: 100, // Начинать анимацию при достижении элемента с отступом в 100 пикселей от верха окна
      duration: 500, // Длительность анимации 1 секунда
      easing: "ease-in-out", // Использовать эффект плавного входа и выхода
      delay: 100, // Начать анимацию с задержкой в 200 миллисекунд
      once: false, // Анимация должна произойти только один раз
      anchorPlacement: "top-center", // Якорь для анимации - верхний центр
    });
  }, []);
  //   data-aos="fade-right"

  return (
    <div className="bg-[rgb(17,17,17)] pb-12">
      <div className="flex flex-col cd:px-[10rem] px-[3rem]  ">
        <p
          data-aos="fade-right"
          className="text-[red] cd:text-[2rem] text-[1rem] mt-8"
        >
          ЖОНДОМДОР
        </p>
        <p
          data-aos="fade-right"
          className="cd:text-[1.5rem] text-[0.8rem] font-extrabold text-white mt-8 skills"
        >
          Окуу учурунда эмнелерди уйроносуз
        </p>
        <p data-aos="fade-right" className="text-[red] font-extrabold mt-8">
          Бул жондомдор сизге бизнесте жана жашоодо пайдасын тийгизет
        </p>
      </div>
      <div className="flex flex-wrap  justify-center mt-12 gap-8 ">
        <div
          data-aos={isMobile ? "fade-right" : "fade-down-right"}
          // data-aos="fade-down-right"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Анализ кылуу жана тандоо жондому
          </p>
          <p className="text-white mt-4">
            Рынокту, конкуренттерди, сатылып жаткан товарларды анализ кылып,
            кайсыл учурда канча акча менен кайсы товарды сатууну айырмалап
            каласыз
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460]  "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Реклама менен иштоо
          </p>
          <p className="text-white mt-4">
            Заманбап маркетингтин бардык турун колдонуп товарынызда сатууну
            жогорулатууну уйроносуз
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Кытай менен бизнес
          </p>
          <p className="text-white mt-4">
            Кытайдан каалаган товарды завод баасында телефондон эле Кыргызстанга
            же Россияга алдырууну уйроносуз
          </p>
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-down-left"}
          // data-aos="fade-down-left"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Финансыны пландоо
          </p>
          <p className="text-white mt-4">
            Товардын оздук баасын канчадан сатасыз канча пайда калат жана жалпы
            киреше чыгашаларды туура пландоону уйроносуз
          </p>
        </div>
        <div
          data-aos="fade-up-right"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Убакытты башкаруу (time managment)
          </p>
          <p className="text-white mt-4">
            Копчулук бизнесмендер убактым аз эчнерсеге жетишпейм деп
            арызданышат. Сиз бардык иштеринизге жетишип убактынызды туура
            пландоону уйроносуз
          </p>
        </div>
        <div
          data-aos="flip-up"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Юридикалык аспекттер
          </p>
          <p className="text-white mt-4">
            Магазин регистрация кылуу, ИП жана ОСОО, сертификат, товардык белги,
            налогдор боюнча тушунук аласыз
          </p>
        </div>
        <div
          data-aos="flip-down"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Жеке бренд жана онугуу
          </p>
          <p className="text-white mt-4">
            Бренд жаратып, маркетингтин турлорун колдонуп рыноктон оз ордунузду
            тапканды жана билиминизди акчага айландырууну оздоштуро аласыз
          </p>
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-up-left"}
          // data-aos="fade-up-left"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Команда менен иштоо
          </p>
          <p className="text-white mt-4">
            Группада команда менен чогу иш алып барууну жана башкалар менен тил
            табышууну оздоштуросуз
          </p>
        </div>
      </div>
      <Link className="flex justify-center mt-12">
        <div className="border-2 border-[#0f3460] cursor-pointer">
          <p className="text-white  cd:py-3 py-2 cd:px-8 px-4 cd:text-[1.5rem] text-[0.8rem]  cd:text-start text-center">
            АКЫСЫЗ САБАК(WILDBERRIES'ТЕ СООДА КЫЛУУ)
          </p>
        </div>
      </Link>
      <FreeLesson />
    </div>
  );
};
