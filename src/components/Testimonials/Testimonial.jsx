import React from "react";
import "./Testimonial.css";
import profilePic1 from "../../img/raha.jpeg";


const Testimonial = () => {

  return (
    
    <section id="team" class="team m-5">

        <header class="section-header">
            <h2>آشنایی با بنیان گذار</h2>
        </header>

        <div class="container-expand-md border border-3 my-5" data-aos="fade-up" data-aos-delay="100">
            <div class="member row p-5">
                <div class="member-img col-md-5">
                    <img src={profilePic1} class="img-fluid rounded-circle" alt="" />
                </div>
                <div class="member-info col-md-7 justify-content-center">
                    <h3>رها محقق زاده</h3>
                    <h4>بنیان گذار شیرینی پزی هور</h4>
                    <p>من رها محقق زاده هستم.20 ساله و حدود یک ساله پیوسته و با عشق در حوزه شیرینی پزی فعالیت میکنم. دارای چند مدرک در زمینه شیرینی و کیک پزی هستم. به تازگی کسب و کار خودم رو تحت عنوان هور راه اندازی کردم. امید و هدفم این است که بتونم با نهایت اشتیاق و ذوق هنری بهترین کارها رو عرضه کنم</p>
                </div>
            </div>
        </div>

    </section>    
  );
};

export default Testimonial;
