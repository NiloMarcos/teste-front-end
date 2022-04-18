import React from "react";

import "./styles.scss";

import Banner1 from "../../assets/BlogBanner1.png";
import Banner2 from "../../assets/BlogBanner2.png";
import Banner3 from "../../assets/BlogBanner3.png";
import Banner4 from "../../assets/BlogBanner4.png";
import Points from "../../assets/points.png";

export default function Blog({ title }) {
  return (
    <main className="container-blog">
      <div className="div-title-blog">
        <h1 className="title">{title}</h1>
      </div>

      <div className="div-blog">
        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={Banner1} alt="Imagem do blog 1" />
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br />
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit adipiscing
              <br />
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>

        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={Banner2} alt="Imagem do blog 2" />
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br />
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit adipiscing
              <br />
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>

        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={Banner3} alt="Imagem do blog 3" />
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br />
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit adipiscing
              <br />
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>

        <section className="section-blog">
          <section className="section-blog-banner">
            <img src={Banner4} alt="Imagem do blog 4" />
          </section>
          <section className="section-blog-title">
            <p>
              Lorem ipsum dolor sit
              <br />
              amet consectetur.
            </p>
          </section>
          <section className="section-blog-subTitle">
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit adipiscing
              <br />
              dignissim posuere vitae.
            </p>
          </section>
          <section className="section-blog-button">
            <button>LER ARTIGO</button>
          </section>
        </section>
      </div>

      <div className="blog-button-points">
        <button>
          <img src={Points} alt="Img pontos" />
        </button>
      </div>
    </main>
  );
}
