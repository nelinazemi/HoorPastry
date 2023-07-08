import React from "react";
import "./Intro.css";

const Intro = () => {

  return (
    <div class="hero container-expand-md my-5">
        <div class="row">

            <div class="col-md-6 d-flex flex-column justify-content-center p-5">
                <h1>شیرینی پزی هور</h1>
                <h2>و هور نامیست از نام های خدا</h2>
                <button className="btn mt-5"><a>ثبت سفارش</a></button>
            </div>

            <div class="col-md-6 hero-img">
                <img src="img/detail_bb_Carrot_Cake_2-0007_2022.jpg" class="w-100 mt-5"/>
            </div>

        </div>
    </div>
  );
};

export default Intro;
