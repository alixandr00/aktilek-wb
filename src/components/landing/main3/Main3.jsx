import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main3.css";

export const Main3 = () => {
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
    <div className="mt-8 flex items-center flex-col pb-8">
      <p
        data-aos="fade-down"
        className="cd:text-[3rem] text-[1.5rem] font-extrabold"
      >
        Окуунун программасы
      </p>
      <div>
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          1. Киришуу
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4 "
        >
          Курс боюнча- WB бул эмне?-ФБС жана ФБО боюнча- Комиссия логистика
          хранение
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          2. Юридикалык болум
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          ИП- расчетный счет- налог- сертификация
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          3. Жеке кабинет
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Жеке кабинетке катталуу, настройкалоо жана анын бардык болумдору
          боюнча
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          4. Аналитика
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Ниша тандоо- аз акча менен бизнес баштоо- мпстатс
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          5. Товардын карточкасы боюнча
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Карточка тузуу- описание жазуу- цена, скидка жана акциялар менен иштоо
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          6. Товарды магазинге чыгаруу
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          ФБС(маркетплейс) менен иштоо- ФБО(поставки) менен иштоо
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          7. Продвижение
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Ички сырткы реклама- самовыкуп- активдуу карточка ж.б продвижение
          жолдору
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          8. Юнит экономика
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Финансыны тартиптоо боюнча сабактар
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          9. Жеке онугуу
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Убакытты башкаруу- бизнесмендин ой жугуртуусу- психология боюнча
          сабактар
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          10. Жеке бренд
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Билиминизди, тажрыйбанызды болушуп аны акчага айландыруу жолдору
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          11. Команда менен иштоо
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Масштабга чыгуу- команда менен иштоо жолдору
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          12. Кытайдан товар алдыруу
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[17rem]  cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          1688- вичат- алипей- карго
        </p>
      </div>
    </div>
  );
};
