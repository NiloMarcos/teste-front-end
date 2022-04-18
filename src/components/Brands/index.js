import React from 'react';

import './styles.scss';

import Brand1 from '../../assets/brand1.png';
import Brand2 from '../../assets/brand2.png';
import Brand3 from '../../assets/brand3.png';
import LeftArrow from '../../assets/CaretDownBrads.png';
import RightArrow from '../../assets/CaretDownBrands2.png';

export default function Brands({ title }) {
  return (
    <main className="container-brans">
      <div className="container-title">
        <section className="section-title">
          <h1>{title}</h1>
        </section>
        <section className="section-link">
          <a href="#:">Ver todos</a>
        </section>
      </div>

      <div className="container-brands">
        <a href="#" className="left-arrow">
          <img src={LeftArrow} alt="Logo da seta esquerda" className="left-arrow" />
        </a>
        <img src={Brand1} alt="Logo da marca 1" />
        <img src={Brand2} alt="Logo da marca 2" />
        <img src={Brand3} alt="Logo da marca 3" />
        <img src={Brand1} alt="Logo da marca 4" />
        <img src={Brand2} alt="Logo da marca 5" />
        <img src={Brand3} alt="Logo da marca 6" />
        <a href="#">
          <img src={RightArrow} alt="Logo da seta direita" className="right-arrow" />
        </a>
      </div>
    </main>
  );
}