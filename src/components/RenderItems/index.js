import React from 'react';
import './styles.scss';

import SemFoto from '../../assets/semFoto.jpg';
import Heart from '../../assets/Heart.png';

export default function RenderItems({ itemsApi }) {
  return (
    <div className="container-wrapper-mydog">
      {itemsApi.map((item) => {
        return (
          <div key={item.price} className="container-item">
            <section className="container-item-img">
              <span>40% OFF</span>
              { item ? <img src={item.photo} alt="Foto do produto" /> : <img src={SemFoto} alt="Sem foto do produto" /> }
              <a href="#:">
                <img src={Heart} alt="Logo coração" className="icon-heart-api"/>
              </a>
            </section>
            <section className="container-item-texts">
              <p className="container-item-texts-title">{item.productName}</p>
              <p className="container-item-texts-price">De R$ 96.69</p>
              <p className="container-item-text-bold">Por R$ 90,69</p>
              <p className="container-item-text--price-special">R$ 85,69</p>
              <span>Para assinantes</span><br/>
              <button>Adicionar</button>
            </section>
          </div>
        );
      })}
    </div>
  )
}
