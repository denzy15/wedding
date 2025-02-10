import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import whatsappIcon from "../media/whatsapp.svg";

const API_URL = process.env.REACT_APP_GOOGLE_SHEET_URL;

const RSVPForm = ({ setLoading }) => {
  const [name, setName] = useState("");
  const formRef = useRef(null);

  const [text, setText] = useState("");
  const fullText = "Пожалуйста, подтвердите своё присутствие";
  const speed = 100;
  const [startTyping, setStartTyping] = useState(false); // Запускать анимацию только когда видно

  useEffect(() => {
    if (!startTyping) return; // Не запускаем, пока элемент не в видимости

    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => {
        if (i < fullText.length) {
          i++;
          return fullText.slice(0, i);
        } else {
          clearInterval(interval);
          return fullText;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [startTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Заполните данные перед отправкой");
      return;
    }

    const data = new FormData(formRef.current);

    setLoading(true);

    fetch(API_URL, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName("");
        alert("Ваш ответ отправлен, спасибо!");
      })
      .catch((err) => {
        alert(
          "Упс, произошла ошибка :( Попробуйте еще разок, а если не получится то свяжитесь с нами по WhatsApp!"
        );
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setStartTyping(true)}
        style={{ marginBottom: "10px" }}
      >
        <h5 className="h-italic">{text}</h5>
      </motion.div>
      <p style={{ fontSize: "13px", marginBottom: "45px" }}>
        Ваши ответы помогут нам при организации нашего торжества!
      </p>
      <form className="inv-form" ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name-input">
          Введите ваше имя и фамилию для подтверждения присутствия
        </label>
        <div>
          <input
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name-input"
            name="Name"
            placeholder="Иван Иванов"
          />
        </div>

        <button type="submit">Отправить</button>
      </form>
      <h5>Либо, можете написать нам на WhatsApp:</h5>
      <a
        href="https://wa.me/77776882600"
        className="whatsapp-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="wpp" />
        <span>Написать</span>
      </a>{" "}
    </div>
  );
};

export default RSVPForm;
