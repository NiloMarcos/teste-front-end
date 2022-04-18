import React from "react";

import './styles.scss';

import Dog from '../../assets/formDog.png';
import User from '../../assets/userForm.png';

import Envelope from '../../assets/EnvelopeSimple.png';

export default function Form(){
  return(
    <main className="container-form">
      <div className="container-wrapper">
        <section className="section-logo-title">
          <img src={Dog} alt="Foto do Dog" />
          <p>
            Se inscreva para receber<br/>
            novidades e promoções
          </p>
        </section>
        <section className="form-section">
          <form action="" className="form">
            <div className="form-name">
              <img src={User} alt="Logo do usurario" />
              <input type="text" placeholder="Digite seu nome" maxlength="50" />
            </div>
            <div className="form-email">
              <img src={Envelope} alt="Logo do envelope" />
              <input type="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="form-button">
              <button>Enviar</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}