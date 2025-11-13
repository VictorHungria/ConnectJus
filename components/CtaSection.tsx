import React from 'react';
import { GITHUB_LATEST_RELEASE_URL } from '../config';
import { trackDownloadClick } from '../analytics';

export const CtaSection = () => {
    return (
        <section id="cta" className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Disponível para sua Estação de Trabalho</h2>
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>Baixe o ConnectJus Docs e otimize seu fluxo de trabalho de documentação.</p>
            <a
               href={GITHUB_LATEST_RELEASE_URL}
               className="button-primary" 
               style={{ padding: '16px 32px', fontSize: '1.125rem' }}
               onClick={() => trackDownloadClick('cta_section')}>
              Download Gratuito
            </a>
        </section>
    );
};
