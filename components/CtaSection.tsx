import React from 'react';

export const CtaSection = () => (
    <section id="cta" className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '2rem' }}>Disponível para sua Estação de Trabalho</h2>
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>Baixe o ConnectJus Docs e otimize seu fluxo de trabalho de documentação.</p>
        <a href="https://github.com/VictorHungria/ConnectJus/releases/latest" target="_blank" rel="noopener noreferrer" className="button-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
          Download Gratuito
        </a>
    </section>
);