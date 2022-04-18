import React, { useEffect, useState } from 'react';

import './styles.scss';

import FlexaEsquerda from '../../assets/CaretDown2Yellow.png';
import FlexaDireita from '../../assets/CaretDownYellow.png';
import Pontos from '../../assets/3points.png';
import SetaEsquerda from '../../assets/CaretDownBrads.png';
import SetaDireita from '../../assets/CaretDownBrands2.png';

import api from '../../services/api';
import RenderItems from '../RenderItems';

export default function MyDog({ title }) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsParPage, setItemsParPage] = useState(4)

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/');

      console.log(response.data.products)
      setItems(response.data.products);
    }
    loadItems();
  }, []);

  const itemsApi = Math.ceil(items.length / itemsParPage);
  const startIndex = currentPage * itemsParPage;
  const endIndex = startIndex + itemsParPage;
  const currenteItems = items.slice(startIndex, endIndex);

  return (
    <main className="container-mydog">
      <div className="header-my-dog">
        <section className="section-title">
          <h1>{title}</h1>
        </section>
        <section className="section-links">
          <img src={FlexaEsquerda} alt="Icone flexa esquerda" />
          <a href="#:" className="link-principal">É AGITADO</a>
          <a href="#:" className="link-second">MORDE</a>
          <a href="#:" className="link-second">LATE MUITO</a>
          <a href="#:" className="link-second">É ANSIOSO</a>
          <a href="#:" className="link-second">É ESTRESSADO</a>
          <img src={FlexaDireita} alt="Icone flexa direita" />
        </section>
      </div>

      <div className="items">
        <a href="#:"><img src={SetaEsquerda} alt="Seta esquerda" /></a>
          <RenderItems itemsApi={currenteItems} />
        <a href="#:"><img src={SetaDireita} alt="Seta direita" /></a>
      </div>

      <div className="div-more-items">
        <a href="#:">Ver todos</a>
        <button><img src={Pontos} alt="Logo 3 pontos" /></button>
      </div>

    </main>
  );
}