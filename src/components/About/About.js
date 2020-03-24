import React from "react";
import Card from "./Card";

function About() {
  const about_data = [
    {
      title: "متعهد",
      icon: <i className="far fa-handshake"></i>,
      des: (
        <p>
          تحویل به موقع پروژه&zwnj;ها و جلب رضایت کارفرما برای رابطه&zwnj;ایی
          مطمئن و پایدار در الویت کار من قرار دارد
        </p>
      )
    },
    {
      title: "مشتاق یادگیری",
      icon: <i className="fas fa-book-reader"></i>,
      des: (
        <p>
          یادگیری تکنولوژی&zwnj;های جدید و به&zwnj;روز وب همیشه برای من
          لذت&zwnj;بخش بوده و و آن را بخشی جدانشدنی از حرفه خود میدانم
        </p>
      )
    },
    {
      title: "دقیق در جزئیات",
      icon: <i className="fas fa-laptop-code"></i>,
      des: (
        <p>
          از نظر من جزئیات یک پروژه می&zwnj;تواند نشان&zwnj;دهنده جدیت و قابل
          اطمینان بودن آن باشد و به همین دلیل توجه به این موضوع بسیار مهم است
        </p>
      )
    }
  ];
  return (
    <section className="about-me my-section section-padding" id="about">
      <div className="container">
        <div className="col-12 title-container text-right p-0">
          <h3 className="my-title">درباره من</h3>
        </div>
        <div className="row text-right">
          {about_data.map(card => (
            <Card card_info={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
