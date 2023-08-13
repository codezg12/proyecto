import React from "react";

function ContentBody() {
  return (
    <div className="root__container">
      <div>
        {/* <!-- slider --> */}
        <div className="ct-slider">
          <div className="ct-slider__wrapper">
            <div className="carousel-root" tabIndex="0">
              <div className="carousel carousel-slider">
                <ul className="control-dots">
                  <li
                    className="dot selected"
                    value="0"
                    role="button"
                    tabIndex="0"
                    aria-label="slide item 1"></li>
                </ul>
                <button
                  type="button"
                  aria-label="previous slide / item"
                  className="control-arrow control-prev control-disabled"></button>
                <div className="slider-wrapper axis-horizontal">
                  <ul className="slider animated">
                    <li className="slide selected previous">
                      <div className="_2durO9KZkaITFPWx0xVVuV">
                        <img src="/assets/images/imagenlargaprincipal.jpg" alt="plato de ramen con una salsa a su lado" title="" />
                      </div>
                    </li>
                    <li className="slide selected previous">
                      <div className="_2durO9KZkaITFPWx0xVVuV">
                        <img src="/assets/images/imagenlargaprincipal.jpg" alt="" title="" />
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  aria-label="next slide / item"
                  className="control-arrow control-next control-disabled"></button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- slider --> */}

        {/* <!-- presentacion de los productos aka product showcase (asi lo ponian en los tutoriales hehehe)--> */}
        <div className="ct-productShowcase">
          <div>
            <div className="os_container os_container_big">
              <div className="container__text">
                <h1 className="max-width-class appSubtitle">
                  Buscas los mejores ramens y bao del mundo...
                </h1>
              </div>

              <div className="box-container">
                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-9.jpeg"
                      alt="Bao de Carne estofada x 2 uni."
                      title="Bao de Carne estofada x 2 uni."
                    />
                  </div>

                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Bao de Carne estofada x 2 uni.
                    </div>
                    <div className="ct-desc__desc">
                      Sobre costilla estofada, zanahoria y cebollín.
                      Ingredientes: Pan bao: Harina de trigo, agua, aceite de
                      palma, levadura, sal. CARNE ESTOFADA: Sobre costilla de
                      vacuno, cebollín, Jengibre, Zanahoria, tomate, Salsa de
                      poroto (agua, poroto de soya, trigo, azúcar, sal), salsa
                      de soya, azúcar, salsa satay (aceite de soya, pescado
                      seco, Jengibre, trigo, sésamo, cebollín, polvo coco, ají,
                      camarón, cebolla, maíz, especies orientales, sal,
                      cardamomo, pimienta negra y pimienta blanca. + CEBOLLÍN.
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$6.990</div>
                  </div>

                  <a className="full-product-info" href="#">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-8.jpeg"
                      alt="Bao de Tofu x 2 uni."
                      title="Bao de Tofu x 2 uni."
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">Bao de Tofu x 2 uni.</div>
                    <div className="ct-desc__desc">
                      Tofu estofado, pickle, polvo de maní, cilantro, pepino y
                      salsa de ajo. (Apto para veganos) Ingredientes: Pan bao:
                      Harina de trigo, agua, aceite de palma, levadura, sal.
                      Tofu deshidratado (agua desmineralizada, poroto de soya,
                      cuajo, azúcar). jengibre, cebollín, salsa de soya, ajo,
                      agua, azúcar, mix de condimentos (canela, anís, pimienta y
                      comino), mirin (azúcar, arroz, agua, alcohol) + PICKLE:
                      repollo picado, vinagre, agua, azúcar y ajo. + POLVO DE
                      MANI: mani sin sal, azúcar flor. + CILANTRO, PEPINO, SALSA
                      DE AJO (ajo, kétchup, azúcar, salsa de soya y harina de
                      tapioca).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$6.990</div>
                  </div>

                  <a
                    className="full-product-info"
                    href="/pedir/Jvrcy5y5Ynswb4P3f/bao-de-tofu-x-2-uni">
                    Ver producto{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-5.jpeg"
                      alt="Bao de Carne Mongoliana x 2 uni."
                      title="Bao de Carne Mongoliana x 2 uni."
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Bao de Carne Mongoliana x 2 uni.
                    </div>
                    <div className="ct-desc__desc">
                      Carne al wok con cebollín. Ingredientes: Pan bao: Harina
                      de trigo, agua, aceite de palma, levadura, sal. CARNE AL
                      WOK: sobre costilla, maicena, salsa de soya, cebollín,
                      salsa de ostra (agua, soya, sal, ostra, azúcar), azúcar
                      +CEBOLLÍN.
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$6.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-12.jpeg"
                      alt="Bao de Cerdo clásico x 2 uni."
                      title="Bao de Cerdo clásico x 2 uni."
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Bao de Cerdo clásico x 2 uni.
                    </div>
                    <div className="ct-desc__desc">
                      Panceta de cerdo estofado, pickle, polvo de maní y
                      cilantro. elige tu cantidad Ingredientes: Panceta de
                      cerdo, cebollín, jengibre, ajo, anís, agua, azúcar y salsa
                      de soya. + PICKLE: Repollo picado, vinagre, agua, azúcar y
                      ajo. + POLVO DE MANI: Mani sin sal, azúcar flor. +
                      CILANTRO.
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$6.990</div>
                  </div>
                  <a className="full-product-info" href="#">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-3.jpeg"
                      alt="Bao de Croqueta Veggy x 2 uni."
                      title="Bao de Croqueta Veggy x 2 uni."
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Bao de Croqueta Veggy x 2 uni.
                    </div>
                    <div className="ct-desc__desc">
                      Croqueta de soya, lechuga, zanahoria, pepino, cilantro,
                      polvo de maní y salsa curry. (Apto para veganos)
                      Ingredientes: Pan bao: Harina de trigo, agua, aceite de
                      palma, levadura, sal. Carne de soya, condimento champiñón
                      (extracto de champiñón taiwanés, extracto de apio,
                      extracto de repollo, poroto de soya, comino, paprika,
                      pimienta, azúcar), harina de trigo, pan rallado, maicena,
                      zanahoria salsa de soya, aceite, pimienta, sal, ajo,
                      cebollín, azúcar. + SALSA DE CURRY: Curry, harina de
                      trigo, harina de maíz, azúcar. + POLVO DE MANI: mani sin
                      sal, azúcar flor. + LECHUGA HIDROPONICA, PEPINO,
                      ZANAHORIA, CILANTRO.
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$6.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ct-productShowcase">
          <div>
            <div className="os_container os_container_big">
              <div className="container__text">
                <h1 className="max-width-class appSubtitle">
                  Nuestros ramen de autor destacados 🤤👍
                </h1>
              </div>
              <div className="box-container">
                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-11.jpeg"
                      alt="Ramen de Carne mongoliana"
                      title="Ramen de Carne mongoliana"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Ramen de Carne mongoliana
                    </div>
                    <div className="ct-desc__desc">
                      Ingredientes: Sobre costilla, maicena, salsa de soya,
                      cebollín, salsa de ostra vegana(soya, sal, shitake,
                      azúcar, trigo), azúcar. Diente de dragón, pak choi,
                      choclo, huevo tierno con salsa (jengibre, cebollín, salsa
                      de soya, ajo, agua, azúcar), mix de hierba (canela, anís,
                      pimienta y comino), mirin (azúcar, arroz, agua, alcohol).
                      Ingredientes caldos: Tonkotsu: Cerdo, sal, Maíz, soya,
                      trigo, pollo, ajo, pimienta salsa satay (aceite de soya,
                      Pescado seco, Jengibre, trigo, sésamo, cebollín, polvo
                      coco, ají, camarón, cebolla, maíz, especies orientales,
                      sal, cardamomo, Pimienta negra, pimienta blanca). Diente
                      de dragón, pak choi, choclo, huevo tierno con salsa
                      (jengibre, cebollín, salsa de soya, ajo, agua, azúcar, mix
                      de hierba (canela, anís, pimienta y comino), mirin
                      (azúcar, arroz, agua, alcohol). Miso: Poroto de soya,
                      arroz, sal, licor, agua, aceite de arroz, sal, arroz y
                      poroto de soya fermentado, azúcar, zanahoria, ajo, aceite
                      de sésamo, pimienta blanca, jengibre, ají, cebolla, maní.
                      Shoyu: Agua, sal, salsa de soya, trigo, cerdo, pimienta
                      blanca, jengibre, azúcar, condimento de cerdo, bonito,
                      ajo, cebolla, trigo, ostra. Caldo de verduras:
                      Champiñones, cebolla blanca, zanahoria, repollo, alga
                      konbu, condimento champiñón (extracto de champiñón
                      taiwanés, extracto de apio, extracto de repollo, poroto de
                      soya, comino, paprika, pimienta, azúcar), satay veggie
                      (aceite de soya, salsa poroto de soya, aceite de sésamo,
                      sal, mani, pimienta, cascara de naranja, curry, canela,
                      polvo de coco, ají).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$7.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-7.jpeg"
                      alt="Ramen de Chuleta apanada"
                      title="Ramen de Chuleta apanada"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Ramen de Chuleta apanada
                    </div>
                    <div className="ct-desc__desc">
                      Ingredientes: Lomo centro de cerdo, harina de tapioca,
                      ají, pimienta, extracto de cerdo, extracto de papaya,
                      salsa de soya, soya, especias taiwanesas, pimienta, sal,
                      ajo, cebollín, azúcar, salsa de ajo (ajo, ketchup, azúcar,
                      salsa de soya y harina de tapioca), mani, azúcar flor,
                      cilantro, pickle picado (Repollo, vinagre de vino blanco,
                      azúcar, melón taiwanés, ajo). Diente de dragón, pak choi,
                      choclo, huevo tierno con salsa (jengibre, cebollín, salsa
                      de soya, ajo, agua, azúcar), mix de hierba (canela, anís,
                      pimienta y comino), mirin (azúcar, arroz, agua, alcohol).
                      Ingredientes caldos: Tonkotsu: Cerdo, sal, Maíz, soya,
                      trigo, pollo, ajo, pimienta salsa satay (aceite de soya,
                      Pescado seco, Jengibre, trigo, sésamo, cebollín, polvo
                      coco, ají, camarón, cebolla, maíz, especies orientales,
                      sal, cardamomo, Pimienta negra, pimienta blanca). Miso:
                      Poroto de soya, arroz, sal, licor, agua, aceite de arroz,
                      sal, arroz y poroto de soya fermentado, azúcar, zanahoria,
                      ajo, aceite de sésamo, pimienta blanca, jengibre, ají,
                      cebolla, maní. Shoyu: Agua, sal, salsa de soya, trigo,
                      cerdo, pimienta blanca, jengibre, azúcar, condimento de
                      cerdo, bonito, ajo, cebolla, trigo, ostra. Caldo de
                      verduras: Champiñones, cebolla blanca, zanahoria, repollo,
                      alga konbu, condimento champiñón (extracto de champiñón
                      taiwanés, extracto de apio, extracto de repollo, poroto de
                      soya, comino, paprika, pimienta, azúcar), satay veggie
                      (aceite de soya, salsa poroto de soya, aceite de sésamo,
                      sal, mani, pimienta, cascara de naranja, curry, canela,
                      polvo de coco, ají).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$7.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-6.jpeg"
                      alt="Ramen de Panceta estofada"
                      title="Ramen de Panceta estofada"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Ramen de Panceta estofada
                    </div>
                    <div className="ct-desc__desc">
                      Ingredientes: Panceta de cerdo, cebollín, jengibre, ajo,
                      anís, agua, azúcar y salsa de soya. Diente de dragón, pak
                      choi, choclo, huevo tierno con salsa (jengibre, cebollín,
                      salsa de soya, ajo, agua, azúcar), mix de hierba (canela,
                      anís, pimienta y comino), mirin (azúcar, arroz, agua,
                      alcohol). Ingredientes caldos: Tonkotsu: Cerdo, sal, Maíz,
                      soya, trigo, pollo, ajo, pimienta salsa satay (aceite de
                      soya, Pescado seco, Jengibre, trigo, sésamo, cebollín,
                      polvo coco, ají, camarón, cebolla, maíz, especies
                      orientales, sal, cardamomo, Pimienta negra, pimienta
                      blanca). Miso: Poroto de soya, arroz, sal, licor, agua,
                      aceite de arroz, sal, arroz y poroto de soya fermentado,
                      azúcar, zanahoria, ajo, aceite de sésamo, pimienta blanca,
                      jengibre, ají, cebolla, maní. Shoyu: Agua, sal, salsa de
                      soya, trigo, cerdo, pimienta blanca, jengibre, azúcar,
                      condimento de cerdo, bonito, ajo, cebolla, trigo, ostra.
                      Caldo de verduras: Champiñones, cebolla blanca, zanahoria,
                      repollo, alga konbu, condimento champiñón (extracto de
                      champiñón taiwanés, extracto de apio, extracto de repollo,
                      poroto de soya, comino, paprika, pimienta, azúcar), satay
                      veggie (aceite de soya, salsa poroto de soya, aceite de
                      sésamo, sal, mani, pimienta, cascara de naranja, curry,
                      canela, polvo de coco, ají).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$7.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-13.jpeg"
                      alt="Ramen de Champiñones apanados"
                      title="Ramen de Champiñones apanados"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Ramen de Champiñones apanados
                    </div>
                    <div className="ct-desc__desc">
                      (Apto para vegetarianos) Ingredientes: Champiñones,
                      pimienta, sal, ajo, cebollín, azúcar, huevo, aceite, agua,
                      maicena, harina tapioca, harina trigo, sal, Diente de
                      dragón, pak choi, choclo, huevo tierno con salsa
                      (jengibre, cebollín, salsa de soya, ajo, agua, azúcar),
                      mix de hierba (canela, anís, pimienta y comino), mirin
                      (azúcar, arroz, agua, alcohol). Ingredientes caldos: Miso:
                      Poroto de soya, arroz, sal, licor, agua, aceite de arroz,
                      sal, arroz y poroto de soya fermentado, azúcar, zanahoria,
                      ajo, aceite de sésamo, pimienta blanca, jengibre, ají,
                      cebolla, maní. Caldo de verduras: Champiñones, cebolla
                      blanca, zanahoria, repollo, alga konbu, condimento
                      champiñón (extracto de champiñón taiwanés, extracto de
                      apio, extracto de repollo, poroto de soya, comino,
                      paprika, pimienta, azúcar), satay veggie (aceite de soya,
                      salsa poroto de soya, aceite de sésamo, sal, mani,
                      pimienta, cascara de naranja, curry, canela, polvo de
                      coco, ají).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$7.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-1.jpeg"
                      alt="Ramen de Pollito taiwanés"
                      title="Ramen de Pollito taiwanés"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">
                      Ramen de Pollito taiwanés
                    </div>
                    <div className="ct-desc__desc">
                      Ingredientes: Pechuga de pollo, Harina de tapioca, , ají,
                      pimienta, extracto de cerdo, extracto de papaya, salsa de
                      soya, soya, varias especias taiwanesas, pimienta, sal,
                      ajo, cebollín, azúcar. Diente de dragón, pak choi, choclo,
                      huevo tierno con salsa (jengibre, cebollín, salsa de soya,
                      ajo, agua, azúcar), mix de hierba (canela, anís, pimienta
                      y comino), mirin (azúcar, arroz, agua, alcohol).
                      Ingredientes caldos: Tonkotsu: Cerdo, sal, Maíz, soya,
                      trigo, pollo, ajo, pimienta salsa satay (aceite de soya,
                      Pescado seco, Jengibre, trigo, sésamo, cebollín, polvo
                      coco, ají, camarón, cebolla, maíz, especies orientales,
                      sal, cardamomo, Pimienta negra, pimienta blanca). Miso:
                      Poroto de soya, arroz, sal, licor, agua, aceite de arroz,
                      sal, arroz y poroto de soya fermentado, azúcar, zanahoria,
                      ajo, aceite de sésamo, pimienta blanca, jengibre, ají,
                      cebolla, maní. Shoyu: Agua, sal, salsa de soya, trigo,
                      cerdo, pimienta blanca, jengibre, azúcar, condimento de
                      cerdo, bonito, ajo, cebolla, trigo, ostra. Caldo de
                      verduras: Champiñones, cebolla blanca, zanahoria, repollo,
                      alga konbu, condimento champiñón (extracto de champiñón
                      taiwanés, extracto de apio, extracto de repollo, poroto de
                      soya, comino, paprika, pimienta, azúcar), satay veggie
                      (aceite de soya, salsa poroto de soya, aceite de sésamo,
                      sal, mani, pimienta, cascara de naranja, curry, canela,
                      polvo de coco, ají).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$7.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ct-productShowcase">
          <div>
            <div className="os_container os_container_big">
              <div className="container__text">
                <h1 className="max-width-class appSubtitle">
                  ¡Deliciosos platos dulces!
                </h1>
              </div>

              <div className="box-container">
                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-2.jpeg"
                      alt="Berry pretty"
                      title="Berry pretty"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">Berry pretty</div>
                    <div className="ct-desc__desc">
                      Waffles de autor con frutilla, mix de pops, salsa de
                      frutilla, leche condensada y crema chantilly. Opción
                      Gluten free: Sin salsa de frutilla (favor especificar con
                      una nota).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$5.590</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-14.jpeg"
                      alt="Bao de Sweet cream"
                      title="Bao de Sweet cream"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">Bao de Sweet cream</div>
                    <div className="ct-desc__desc">
                      Porción de 2 unidades. Ingredientes: Harina de trigo,
                      agua, azúcar, aceite de palma, poroto rojo, leche, yema de
                      huevo.
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$3.990</div>
                  </div>
                  <a className="full-product-info" href="/">
                    Ver producto{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="box-container__content content">
                  <div className="box-container__img-ct">
                    <img
                      className="box-container__img-class"
                      src="/assets/images/p-15.jpeg"
                      alt="Un manjarsh"
                      title="Un manjarsh"
                    />
                  </div>
                  <div className="ct-desc">
                    <div className="ct-desc__title">Un manjarsh</div>
                    <div className="ct-desc__desc">
                      Waffles de autor con banana, manjar, salsa de chocolate,
                      leche condensada, crema chantilly. Opción Gluten free: Sin
                      salsa de chocolate (favor especificar con una nota).
                    </div>
                    <div className="ct-desc__gap"></div>
                    <div className="ct-desc__price">$5.990</div>
                  </div>
                  <a className="full-product-info" href="#">
                    Ver producto
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="svg-class"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- all productShowcase --> */}

        {/* <!-- startOrdering --> */}
        <div className="ct-startOrdering">
          <div className="order-wrapper">
            <div className="order-wrapper__gap"></div>
            <div className="order-wrapper__title">
              <h1 className="order-wrapper__title-h1 appTitle">
                El sabor más auténtico directo a tu mesa. ¡Pide aquí!
              </h1>

              <div class="w-80">
                <div class="ct-button-box">
                  <div class="r-buttons deliveryTypeOptionBoxLight startOrderingOption">
                    <div class="">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 640 512"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131 59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2.5 69.6 57.2 126.5 126.8 127.1 71.6.7 129.8-57.5 129.2-129.1-.7-69.6-57.6-126.4-127.2-126.9zM128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48zm463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5-46.1 2.5-84.4-34.3-84.4-79.9 0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6 45.6-.1 82.3 38.2 79.9 84.3z"></path>
                      </svg>
                    </div>
                    <div class="button-box">Delivery</div>
                  </div>
                  <div class="l-buttons deliveryTypeOptionBoxLight startOrderingOption">
                    <div class="">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
                      </svg>
                    </div>
                    <div class="button-box">Para retirar</div>
                  </div>
                </div>
              </div>
              <a class="b-buttons buttonShadow">Pedir</a>
            </div>
          </div>
        </div>
        {/* <!-- aqui hacer el espacio para el contact.jsx o aparte (afuera del div, abajo)--> */}
      </div>
    </div>
  );
}

export default ContentBody;
