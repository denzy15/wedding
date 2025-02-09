import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wifeImg from "./media/alina.jpg";
import hsbImg from "./media/daniil.jpg";
import flowerImg from "./media/flower.png";
import carImg from "./media/sport-car.png";
import coupleImg from "./media/couple.png";
import ourImg from "./media/we.jpg";
import champagneIcn from "./media/champagne-icon.webp";
import danceIcn from "./media/dance.png";
import fireworks from "./media/fireworks.PNG";
import giftIcon from "./media/gift.png";
import finalPhoto from "./media/final.jpg";

export default function WeddingInvite() {
  const weddingDate = new Date("2025-04-26T15:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="row row-1">
        <div className="img-card-1">
          <img src={wifeImg} alt="wife" />
          <p>Алина, 8 лет</p>
        </div>
        <div className="img-card-2">
          <img src={flowerImg} alt="flower" />
        </div>
      </div>

      <div className="row row-2">
        <div className="img-card-2">
          <img src={carImg} alt="car" />
        </div>
        <div className="img-card-1">
          <img src={hsbImg} alt="husband" />
          <p>Даниил, 8 лет</p>
        </div>
      </div>

      <div>
        <h5>Узнали этих ребятишек?</h5>
        <p>
          Да-да, это мы! Время пролетело так быстро, представляете? И вот мы
          повзрослели и приняли решение, что пора жениться! Приглашаем вас
          присоединиться к нашему первому семейному празднику - нашей свадьбе!
          Будем рады, если это событие вы разделите вместе с нами.
        </p>
        <h4>Свадьба состоится</h4>
        <h5>26 апреля 2025</h5>
        <p>С любовью, Даниил и Алина!</p>
        <div>
          <img src={coupleImg} alt="love"  className="cnt-logo"/>
        </div>
      </div>

      <div className="our-photo">
        <img src={ourImg} alt="love" />
      </div>

      <h4>Тайминг</h4>

      <div className="timing">
        <div className="timing-icon">
          <img src={champagneIcn} alt="icon" />
        </div>
        <div className="timing-body">
          <span>16:00 - Фуршет</span>
          <hr />
          <span>Знакомство и общение</span>
        </div>
      </div>

      <div className="timing">
        <div className="timing-icon">
          <img src={danceIcn} alt="icon" />
        </div>
        <div className="timing-body">
          <span>17:00 - Банкет</span>
          <hr />
          <span>Танцы, веселье и много любви</span>
        </div>
      </div>
      <div className="timing">
        <div className="timing-icon">
          <img src={fireworks} alt="icon" />
        </div>
        <div className="timing-body">
          <span>23:00 - Окончание вечера</span>
          <hr />
          <span>Даже такой чудесный день может закончиться</span>
        </div>
      </div>

      <h4>Локация</h4>

      <div>
        <p>Банкетный зал Бейбарыс</p>
        <p>Микрорайон Хан-Тенгри, 183/1</p>
      </div>

      <h4>Пожелания</h4>
      <p>
        Мы с нетерпением ждем дня, когда сможем разделить с вами радость нашей
        свадьбы! Ваше присутствие — самый ценный подарок для нас. Если вы
        захотите порадовать нас чем-то особенным, мы будем признательны за вклад
        в нашу мечту. Мы просим вас не дарить нам цветы, так как мы не успеем
        насладиться их красотой на все 100%. Мы будем рады подарку в конверте —
        он приблизит нас к путешествию, о котором мы так мечтаем. Главное для
        нас — ваша любовь, теплые слова и счастливые моменты, которые мы
        проведем вместе в этот день!
      </p>

      <div>
        <img src={giftIcon} alt="gift" className="cnt-logo" />
      </div>

      <h5>Пожалуйста, подтвердите своё присутствие</h5>
      <p>Ваши ответы помогут нам при организации нашего торжества!</p>

      <label>Введите ваше имя и фамилию для подтверждения присутствия</label>
      <div>
        <input placeholder="Иван Иванов" />
      </div>

      <button>Отправить</button>

      <div className="our-photo">
        <img src={finalPhoto} alt="love" />
      </div>

      <p>Будем вас ждать 26 апреля</p>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mt-10"
      >
        Приглашение на свадьбу
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg mt-4"
      >
        26 апреля 2025 года
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-6 text-2xl bg-white p-4 rounded-lg shadow-md"
      >
        ⏳ До свадьбы осталось: {timeLeft.days} дней {timeLeft.hours} часов{" "}
        {timeLeft.minutes} минут {timeLeft.seconds} секунд
      </motion.div>
    </div>
  );
}
