import React from "react";
import "./Services.css";
import cakeico from "../../img/cakeico.png";
import cupcakeico from "../../img/cupcakeico.png";
import waiter from "../../img/menu.png";

const Services = () => {

  return (
    <section id="pricing" class="pricing">

      <div class="container-expand-md" data-aos="fade-up">

        <header class="section-header">
          <h2>خدمات ما</h2>
        </header>

        <div class="row gy-4 mt-3" data-aos="fade-left">

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <div class="price"><sup>$</sup>0<span> / mo</span></div>
              <img src={cakeico} class="img-fluid" alt=""/>
              <h3>خرید راحت با قیمت مناسب</h3>
              <span> سفارش آنلاین محصولات ما بدون نیاز به مراجعه حضوری</span>
              <span> و با بسته بندی های زیبا</span>
              </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <div class="price"><sup>$</sup>19<span> / mo</span></div>
              <img src={cupcakeico} class="img-fluid" alt=""/>
              <h3>خرید راحت با قیمت مناسب</h3>
              <span> سفارش آنلاین محصولات ما بدون نیاز به مراجعه حضوری</span>
              <span> و با بسته بندی های زیبا</span>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div class="box">
              <div class="price"><sup>$</sup>29<span> / mo</span></div>
              <img src={waiter} class="img-fluid" alt=""/>
              <h3>خرید راحت با قیمت مناسب</h3>
              <span> سفارش آنلاین محصولات ما بدون نیاز به مراجعه حضوری</span>
              <span> و با بسته بندی های زیبا</span>
              </div>
          </div>


        </div>

      </div>

  </section>

  );
};

export default Services;
