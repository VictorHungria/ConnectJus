import React from 'react';

export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container hero-layout">
        <div>
          <h1>
            O Editor Jurídico <span className="hero-accent">Avançado</span> para Profissionais do Direito
          </h1>
        </div>
        <div className="hero-content">
          <p>
            Crie, gerencie e exporte documentos complexos com variáveis, cálculos automáticos e formatação profissional. Totalmente offline e seguro.
          </p>
          <a href="#workflow" className="button-primary">
            Descubra como funciona
          </a>
        </div>
      </div>
    </section>
  );
};
