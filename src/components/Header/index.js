import React from 'react';

import './styles.scss';

import Shield from '../../assets/escudoLogo.png';
import Truck from '../../assets/caminhaoLogo.png';
import Card from '../../assets/cartaoLogo.png';
import Logo from '../../assets/logo.png';
import Lupa from '../../assets/lupa.png';
import Group from '../../assets/Group.png'
import Heart from '../../assets/Heart.png'
import User from '../../assets/UserCircle.png'
import Cart from '../../assets/ShoppingCart.png'
import Crown from '../../assets/CrownSimple.png'
import LeftArrow from '../../assets/CaretDown.png'
import RightArrow from '../../assets/CaretDown2.png'
import DownArrow from '../../assets/points.png';
import Points from '../../assets/CaretBottom.png';


export default function Header() {
  return (
    <main>
      <header>
        <div className='header-info'>
          <section className='header-info-first'>
            <img src={Shield} alt="Logo de escudo" />
            <p>Compra <span>100% segura</span></p>
          </section>
          <section className='header-info-second'>
            <img src={Truck} alt="Logo do caminhão" />
            <p>Frete grátis <span>acima de R$ 200</span></p>
          </section>
          <section className='header-info-third'>
            <img src={Card} alt="Logo de cartão" />
            <p>Parcele <span>suas comprar</span></p>
          </section>
        </div>

        <div className='header-search'>
          <section className='header-logo'>
            <img src={Logo} alt="Logo do website" />
          </section>

          <section className='header-form'>
            <form action="">
              <input type="text" placeholder='O que você está procurando?' maxlength="98" />
              <img src={Lupa} alt="Logo de lupa" />
            </form>
          </section>

          <section className='header-icons'>
            <section className='section-icon-diferente'>
              <a href="#:">
                <img src={Group} alt="Logo de grupo" />
              </a>
            </section>
            <section className='section-icon'>
              <a href="#:">
                <img src={Heart} alt="Logo de coração" />
              </a>
            </section>
            <section className='section-icon'>
              <a href="#:">
                <img src={User} alt="Logo de usuario" />
              </a>
            </section>
            <section className='section-icon'>
              <a href="#:">
                <img src={Cart} alt="Logo de carrinho" />
              </a>
            </section>
          </section>
        </div>

        <div className='links'>
          <section>
            <a href="#:">BRINCAR</a>
          </section>
          <section>
            <a href="#:">MORDER</a>
          </section>
          <section>
            <a href="#:">COMER</a>
          </section>
          <section>
            <a href="#:">PASSEAR</a>
          </section>
          <section>
            <a href="#:">CASA E CONFORTO</a>
          </section>
          <section>
            <a href="#:">EDUCAÇÃO</a>
          </section>
          <section>
            <a href="#:" className='link-oferta'>OFERTAS</a>
          </section>
          <section className='link-outono'>
            <img src={Crown} alt="Logo de coroa" />
            <a href="#:">COLEÇÃO DE OUTONO</a>
          </section>
        </div>

        <div className="background-img">
          <div className="background-img-container">
            <div className="background-img-first">
              <section className='section-arrow-left'>
                <a href="#:">
                  <img src={LeftArrow} alt="Seta esquerda" />
                </a>
              </section>
              <section>
                <p>
                  As melhores guias<br />
                  para os melhores<br />
                  passeios.
                </p>
                <button>Confira</button>
              </section>
            </div>
            <div className="background-img-second">
              <section className="section-arrow-right">
                <a href="#:">
                  <img src={RightArrow} alt="Seta Direita" />
                </a>
              </section>
            </div>
          </div>
        </div>
        <div className="div-navigation">
          <a href="#:">
            <img src={DownArrow} alt="Foto seta para baixo" />
          </a>
          <a href="#:">
            <img src={Points} alt="Foto 3 pontos" />
          </a>
        </div>
      </header>
    </main>
  )
}
