import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wifeImg from "./media/alina.jpg";
import hsbImg from "./media/daniil.jpg";
import flowerImg from "./media/flower.png";
import carImg from "./media/sport-car.png";
import coupleImg from "./media/couple.png";
import ourImg from "./media/we.jpg";
import champagneIcn from "./media/champ-2.webp";
import danceIcn from "./media/dance.png";
import fireworks from "./media/fireworks.PNG";
import giftIcon from "./media/gift.png";
import finalPhoto from "./media/final.jpg";
import RSVPForm from "./components/RSVPForm";

export default function WeddingInvite() {
  const weddingDate = new Date("2025-04-26T15:00:00");

  const [loading, setLoading] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
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
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <div className="container">
      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
      <motion.div
        className="row row-1"
        initial={{
          left: -500,
        }}
        animate={{ left: 0, transition: { duration: 1 } }}
      >
        <div className="img-card-1">
          <img src={wifeImg} alt="wife" />
          <p>Алина, 8 лет</p>
        </div>
        <div className="img-card-2">
          <img src={flowerImg} alt="flower" />
        </div>
      </motion.div>

      <p className="d-a">Д + А = ❤️</p>

      <motion.div
        className="row row-2"
        initial={{
          right: -500,
        }}
        animate={{ right: 0, transition: { duration: 1 } }}
      >
        <div className="img-card-2">
          <img src={carImg} alt="car" />
        </div>
        <div className="img-card-1">
          <img src={hsbImg} alt="husband" />
          <p>Даниил, 8 лет</p>
        </div>
      </motion.div>

      <div className="uznali">
        <h4>Узнали этих ребятишек?</h4>
        <p>
          Да-да, это мы! Время пролетело так быстро, представляете? И вот мы
          повзрослели и приняли решение, что пора жениться! Приглашаем вас
          присоединиться к нашему первому семейному празднику - нашей свадьбе!
          Будем рады, если это событие вы разделите вместе с нами.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h5 className="h-italic">СВАДЬБА СОСТОИТСЯ:</h5>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className="w-date"
        >
          26 апреля 2025 года
        </motion.p>

        {/* Сделал motion.div, иначе анимация не будет ждать появления */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="timer"
        >
          ⏳ До свадьбы осталось:
          <p>
            {timeLeft.days} дней {timeLeft.hours} часов {timeLeft.minutes} минут
          </p>
        </motion.div>
      </motion.div>

      <div style={{ margin: "30px 0" }}>
        <p style={{ fontSize: "14px", fontFamily: "Pacifico, serif" }}>
          С любовью, Даниил и Алина!
        </p>
        <img src={coupleImg} alt="love" className="cnt-logo" />
      </div>

      <div className="our-photo">
        <img src={ourImg} alt="love" />
      </div>

      <h4 className="h-italic">Тайминг</h4>

      <div className="timing">
        <div className="timing-icon">
          <img src={champagneIcn} alt="icon" />
        </div>
        <div className="timing-body">
          <span className="timing-time">16:00 - Фуршет</span>
          <hr />
          <span className="timing-desc">Знакомство и общение</span>
        </div>
      </div>

      <div className="timing">
        <div className="timing-icon">
          <img src={danceIcn} alt="icon" />
        </div>
        <div className="timing-body">
          <span className="timing-time">17:00 - Банкет</span>
          <hr />
          <span className="timing-desc">Танцы, веселье и много любви</span>
        </div>
      </div>
      <div className="timing">
        <div className="timing-icon">
          <img src={fireworks} alt="icon" />
        </div>
        <div className="timing-body">
          <span className="timing-time">23:00 - Окончание вечера</span>
          <hr />
          <span className="timing-desc">
            Даже такой чудесный день может закончиться
          </span>
        </div>
      </div>

      <h4 className="h-italic">Локация</h4>

      <div>
        <p>Банкетный зал Бейбарыс</p>
        <p>Микрорайон Хан-Тенгри, 183/1</p>
      </div>

      <div className="map-wrapper">
        {/* <a
          href="https://yandex.kz/maps/ru/org/beybarys/90098739067/?lang=ru&utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;"
        >
          Бейбарыс
        </a>
        <a
          href="https://yandex.kz/maps/ru/162/almaty/category/restaurant/184106394/?lang=ru&utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:14px;"
        >
          Ресторан в Алматы
        </a>
        <a
          href="https://yandex.kz/maps/ru/162/almaty/category/sauna/184106356/?lang=ru&utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:28px;"
        >
          Сауна в Алматы
        </a> */}
        <iframe
          className="map-iframe"
          title="ymap"
          src="https://yandex.kz/map-widget/v1/?ll=76.900410%2C43.148672&mode=poi&poi%5Bpoint%5D=76.897926%2C43.149388&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D90098739067&z=16.84"
          frameBorder="1"
          allowFullScreen={true}
        ></iframe>
      </div>

      <h5 className="h-italic">Пожелания</h5>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p>
          Мы с нетерпением ждем дня, когда сможем разделить с вами радость нашей
          свадьбы! Ваше присутствие — самый ценный подарок для нас. Если вы
          захотите порадовать нас чем-то особенным, мы будем признательны за
          вклад в нашу мечту.
        </p>
        <p>
          Мы просим вас не дарить нам цветы, так как мы не успеем насладиться их
          красотой на все 100%. Мы будем рады подарку в конверте — он приблизит
          нас к путешествию, о котором мы так мечтаем. Главное для нас — ваша
          любовь, теплые слова и счастливые моменты, которые мы проведем вместе
          в этот день!
        </p>
      </motion.div>

      <div>
        <img src={giftIcon} alt="gift" className="cnt-logo" />
      </div>

      <RSVPForm setLoading={setLoading} />

      <hr style={{ margin: "40px auto" }} />
      <div className="our-photo">
        <img src={finalPhoto} alt="love" />
      </div>

      <h5 className="h-italic">Будем вас ждать 26 апреля❤️</h5>
    </div>
  );
}
