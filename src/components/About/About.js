import React from 'react';

function About(){
    return(
        <section className="about-me my-section section-padding" id="about">
            <div className="container">
                <div className="col-12 title-container text-right p-0">
                    <h3 className="my-title">درباره من</h3>
                </div>
                <div className="row text-right">

                    <div className="col-md-4">
                        <div className="my-card">
                            <i className="far fa-handshake"></i>
                            <h4>متعهد</h4>
                            <p>تحویل به موقع پروژه&zwnj;ها و جلب رضایت کارفرما برای رابطه&zwnj;ایی مطمئن و پایدار در الویت کار من قرار دارد</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="my-card">
                            <i className="fas fa-book-reader"></i>
                            <h4>مشتاق یادگیری</h4>
                            <p>یادگیری تکنولوژی&zwnj;های جدید و به&zwnj;روز وب همیشه برای من لذت&zwnj;بخش بوده و و آن را بخشی جدانشدنی از حرفه خود میدانم</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="my-card">
                            <i className="fas fa-laptop-code"></i>
                            <h4>دقیق در جزئیات</h4>
                            <p>از نظر من جزئیات یک پروژه می&zwnj;تواند نشان&zwnj;دهنده جدیت و قابل اطمینان بودن آن باشد و به همین دلیل توجه به این موضوع بسیار مهم است</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default About;