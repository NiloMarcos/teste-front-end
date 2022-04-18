import React from 'react';

import Header from '../../components/Header';
import Category from '../../components/Category';
import MyDog from '../../components/MyDog';
import Brands from '../../components/Brands';
import Bullets from '../../components/Bullets';
import Blog from '../../components/Blog';
import Instagram from '../../components/Instagram';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Category title="Categorias" />
      <MyDog title="Meu cachorro..." />
      <Brands title="Principais marcas" />
      <Bullets />
      <Blog title="Confira nosso blog" />
      <Instagram title="Instagram" />
      <Form />
      <Footer />
    </div>
  )
}