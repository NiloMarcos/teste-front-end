import React from "react";

import "./styles.scss";

import Dog from "../../assets/dog.png";
import Cat from "../../assets/cat.png";
import Dog2 from "../../assets/dog2.png";
import Dog3 from "../../assets/dog3.png";
import LeftArrow from '../../assets/left.png';
import RightArrow from '../../assets/right.png';

export default function Category({ title }) {
  return (
    <main className="container">
      <div className="category-main">
        <div className="category-wrapper">
          <div className="category-title">
            <h1>{title}</h1>
          </div>

          <div className="category-banner">
            <section className="category-banner-section">
              <a>
                <img src={LeftArrow} alt="Icon seta esquerda" />
              </a>
              <section>
                <img src={Dog} alt="Imagem de cachorro" />
              </section>
              <section className="category-banner-section-links">
                <a href="#:">Brinquedos</a>
              </section>
            </section>

            <section className="category-banner-section">
              <section>
                <img src={Cat} alt="Foto do cachorro" />
              </section>
              <section className="category-banner-section-links">
                <a href="#:">Petiscos</a>
              </section>
            </section>

            <section className="category-banner-section">
              <section>
                <img src={Dog2} alt="Foto do cachorro" />
              </section>
              <section className="category-banner-section-links">
                <a href="#:">Guias</a>
              </section>
            </section>

            <section className="category-banner-section">
              <section>
                <img src={Dog3} alt="Foto do cachorro" />
                <a>
                  <img src={RightArrow} alt="Icone seta direita" />
                </a>
              </section>
              <section className="category-banner-section-links">
                <a href="#:">Higiene</a>
              </section>
            </section>
          </div>
          
        </div>
      </div>
    </main>
  );
}
