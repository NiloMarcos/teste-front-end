import React from 'react';

import './styles.scss';

import BannerDog2 from '../../assets/bannerdog2.png';

import Points from '../../assets/points.png';

export default function Bullets(){
  return (
    <main className="container-wrapper-bullet">
      <div className="container-bullet grid"> 
        <section className="bullet-first">
          <h1>Parceiros</h1>
          <p>
            Lorem ipsum dolor sit <br/> 
            amet, consectetur
            </p>
          <button>CONFIRA</button>
        </section>
        <section className="bullet-second">
          <section className="bullet-second-first">
            <h1>
              Assinatura <br/>
              Cãoselheiro
            </h1>
            <p>
              Lorem ipsum dolor sit <br/> 
              amet, consectetur
            </p>
            <button>CONFIRA</button>
          </section>
          
          <section className="banner">
            <img src={BannerDog2} alt="Imagem dog 2" />
          </section>
        </section>
      </div>
      <button className="points">
        <img src={Points} alt="Imagem 3 pontos" />
      </button>
    </main>
  )
} 