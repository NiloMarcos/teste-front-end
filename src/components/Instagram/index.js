import React from "react";

import "./styles.scss";

import InstragmPhoto1 from "../../assets/instagram1.png";
import InstragmPhoto2 from "../../assets/instagram2.png";
import InstragmPhoto3 from "../../assets/instagram3.png";

export default function Instagram({ title }) {
  return (
    <main className="container-instagram">
      <div className="div-title">
        <section className="section-title">
          <h1>{title}</h1>
        </section>
        <section className="section-link">
          <a href="#">+Seguir</a>
        </section>
      </div>

      <div className="instagram-photos">
        <section className="instagram-photos-img">
          <img src={InstragmPhoto1} alt="Foto do instagram 1" />
        </section>
        <section className="instagram-photos-img">
          <img src={InstragmPhoto2} alt="Foto do instagram 2" />
        </section>
        <section className="instagram-photos-img">
          <img src={InstragmPhoto3} alt="Foto do instagram 3" />
        </section>
        <section className="instagram-photos-img">
          <img src={InstragmPhoto1} alt="Foto do instagram 4" />
        </section>
        <section className="instagram-photos-img">
          <img src={InstragmPhoto2} alt="Foto do instagram 5" />
        </section>
        <section className="instagram-photos-img">
          <img src={InstragmPhoto3} alt="Foto do instagram 6" />
        </section>
      </div>
    </main>
  );
}
