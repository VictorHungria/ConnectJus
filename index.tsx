import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const styles = `
    :root {
      --background: #FAFAFA;
      --background-secondary: #FFFFFF;
      --background-tertiary: #F5F5F5;
      --border: #E6E6E6;
      --text-primary: #333333;
      --text-secondary: #666666;
      --accent: #DC2626;
      --accent-hover: #B91C1C;
      --accent-glow: rgba(220, 38, 38, 0.2);
      --accent-background: rgba(220, 38, 38, 0.1);
    }
    html {
      scroll-behavior: smooth;
    }
    body {
      background-color: var(--background);
      overflow-x: hidden;
    }
    .container {
      width: 100%;
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 24px;
      padding-right: 24px;
    }
    .button-primary {
      background-color: var(--accent);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
      transition: all 0.2s ease;
      border: 1px solid var(--accent);
    }
    .button-primary:hover {
      background-color: var(--accent-hover);
      border-color: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px var(--accent-glow);
    }
    .section-title {
      font-size: 2.5rem;
      font-weight: 900;
      text-align: center;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }
    .section-subtitle {
      font-size: 1.125rem;
      text-align: center;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto 4rem auto;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
      0%, 100% { color: var(--accent); text-shadow: 0 0 5px var(--accent-glow); }
      50% { color: #ff5252; text-shadow: 0 0 15px var(--accent-glow); }
    }

    .fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }

    .hero-accent {
      animation: pulse 3s infinite ease-in-out;
      display: inline-block;
    }
    
    .hero-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 3rem;
    }
    .hero-layout h1 {
      text-align: left;
      margin-bottom: 0;
    }
    .hero-layout .hero-content {
      text-align: left;
    }
    .hero-layout .hero-content p {
      margin: 0 0 1.5rem 0;
      max-width: none;
    }

    .features-layout {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      align-items: center;
      gap: 3rem;
    }

    .features-layout .features-content {
      text-align: left;
    }
    .features-layout .features-content .section-title,
    .features-layout .features-content .section-subtitle {
      text-align: left;
      margin-left: 0;
      margin-right: 0;
    }

    @media (max-width: 992px) {
      .hero-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .hero-layout h1, .hero-layout .hero-content {
        text-align: center;
      }
      .hero-layout .hero-content p {
          margin: 0 auto 1.5rem auto;
          max-width: 700px;
      }
      .features-layout {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .features-layout .features-content .section-title,
      .features-layout .features-content .section-subtitle {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <Header />
      <main style={{ padding: '0 0 5rem 0' }}>
        <HeroSection />
        
        <section id="features" style={{ padding: '5rem 0', backgroundColor: '#333333' }}>
          <div className="container features-layout">
            <div className="features-content">
              <h2 className="section-title" style={{ color: '#FFFFFF' }}>A Lógica por Trás do Documento</h2>
              <p className="section-subtitle" style={{ color: '#D1D5DB' }}>
                  Diferente de um processador de texto tradicional, o ConnectJus Docs trata seus documentos como dados estruturados. Isso habilita automação, consistência e gerenciamento de informações em uma nova escala.
              </p>
            </div>
            <HowItWorksVisual />
          </div>
        </section>

        <section id="virtual-office" className="container" style={{ paddingTop: '6rem' }}>
            <h2 className="section-title">Gerenciamento de Casos e Arquivos</h2>
            <p className="section-subtitle">Mantenha todos os seus casos, modelos e variáveis em um único lugar, com uma estrutura de arquivos familiar e eficiente.</p>
            <FileTreeVisual />
        </section>

        <IntegratedToolsSection />
        
        <section id="security" className="container" style={{ paddingTop: '6rem' }}>
            <h2 className="section-title">Seguro e Profissional</h2>
            <p className="section-subtitle">Ferramentas que garantem a integridade e a confidencialidade dos seus documentos mais importantes.</p>
            <SecurityVisual />
        </section>

        <section id="cta" className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Disponível para sua Estação de Trabalho</h2>
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>Baixe o ConnectJus Docs e otimize seu fluxo de trabalho de documentação.</p>
            <a href="https://github.com/VictorHungria/ConnectJus/releases/download/v0.0.1-alpha/ConnectJusDocs-Setup-1.0.0.exe" className="button-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
              Download Gratuito
            </a>
        </section>

      </main>
      <Footer />
    </>
  );
};

const Logo = () => (
    <svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.75 68.62" style={{ height: '28px' }}>
      <g id="Camada_1-2" data-name="Camada 1">
        <path 
          style={{
            fill: 'none',
            stroke: '#1f1f1f',
            strokeMiterlimit: 10,
            strokeWidth: '8px',
          }}
          d="M56.38,55.09c-5.53,5.87-13.37,9.53-22.07,9.53-16.74,0-30.31-13.57-30.31-30.31S17.57,4,34.31,4c8.6,0,16.37,3.58,21.89,9.34"
        />
        <path 
          style={{
            fill: 'none',
            stroke: '#dc2727',
            strokeMiterlimit: 10,
            strokeWidth: '8px',
          }}
          d="M48.13,34.31c0-16.74,13.57-30.31,30.31-30.31s30.31,13.57,30.31,30.31"
        />
        <path 
          style={{
            fill: 'none',
            stroke: '#1f1f1f',
            strokeMiterlimit: 10,
            strokeWidth: '8px',
          }}
          d="M108.75,4v30.31c-.37,16.74-13.57,30.31-30.31,30.31s-30.31-13.57-30.31-30.31"
        />
      </g>
    </svg>
);


const Header = () => {
  return (
    <header style={{
      padding: '1rem 0',
      position: 'sticky',
      top: '0',
      zIndex: 10,
      backgroundColor: 'rgba(250, 250, 250, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', textDecoration: 'none' }}>
          <Logo />
          <span style={{ marginLeft: '0.5rem' }}>
            ConnectJus <span style={{ color: 'var(--accent)' }}>Docs.</span>
          </span>
        </a>
        <a href="https://github.com/VictorHungria/ConnectJus/releases/download/v0.0.1-alpha/ConnectJusDocs-Setup-1.0.0.exe" className="button-primary" style={{ padding: '8px 16px' }}>Download Gratuito</a>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container hero-layout">
        <div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 900,
            lineHeight: 1.2,
            color: 'var(--text-primary)'
          }}>
            O Editor Jurídico <span className="hero-accent">Avançado</span> para Profissionais do Direito
          </h1>
        </div>
        <div className="hero-content">
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
          }}>
            Crie, gerencie e exporte documentos complexos com variáveis, cálculos automáticos e formatação profissional. Totalmente offline e seguro.
          </p>
          <a href="#features" className="button-primary">
            Descubra os Recursos
          </a>
        </div>
      </div>
    </section>
  );
};


const MdFileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'rgb(220, 38, 38)', width: '20px', height: '20px', marginRight: '6px', flexShrink: 0 }}>
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
    </svg>
);

const CjvFileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'rgb(20, 184, 166)', width: '20px', height: '20px', marginRight: '6px', flexShrink: 0 }}>
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
    </svg>
);

// FIX: Removed unused `isOpen` prop to fix error.
const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'rgb(245, 158, 11)', width: '20px', height: '20px', marginRight: '6px', flexShrink: 0 }}>
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
    </svg>
);

const CjcFileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: 'rgb(139, 92, 246)', width: '20px', height: '20px', marginRight: '6px', flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>
);

const FileIcon = ({ type, name }) => {
    const style = { display: 'flex', alignItems: 'center', padding: '4px 8px', borderRadius: '4px', marginBottom: '2px' };
    let icon;
    switch(type) {
        case 'folder': icon = <FolderIcon />; break;
        case 'md': icon = <MdFileIcon />; break;
        case 'cjv': icon = <CjvFileIcon />; break;
        case 'cjc': icon = <CjcFileIcon />; break;
        default: icon = null;
    }
    return <div style={style}>{icon}<span>{name}</span></div>;
};


const FileTreeVisual = () => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'var(--background-secondary)',
      borderRadius: '8px',
      border: '1px solid var(--border)',
      padding: '1.5rem',
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '0.9rem',
      color: 'var(--text-primary)'
    }}>
      <FileIcon type="folder" name="Caso 1 - João da Silva" />
      <div style={{ paddingLeft: '20px' }}>
        <FileIcon type="folder" name="Petições" />
        <div style={{ paddingLeft: '20px' }}>
            <FileIcon type="md" name="Inicial.md" />
            <FileIcon type="md" name="Réplica.md" />
        </div>
        <FileIcon type="folder" name="Cálculos" />
         <div style={{ paddingLeft: '20px' }}>
            <FileIcon type="cjc" name="Danos Morais.cjc" />
        </div>
        <FileIcon type="cjv" name="VARS.cjv" />
      </div>
    </div>
  );
};


const HowItWorksVisual = () => {
    const [activeTab, setActiveTab] = useState(1);

    const TabContent = ({ id, children }) => (
        <div style={{
            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
            opacity: activeTab === id ? 1 : 0,
            transform: activeTab === id ? 'translateY(0)' : 'translateY(20px)',
            position: activeTab === id ? 'relative' : 'absolute',
            visibility: activeTab === id ? 'visible' : 'hidden',
            width: 'calc(100% - 3rem)',
            top: '1.5rem',
            left: '1.5rem',
        }}>
            {children}
        </div>
    );
    
    return (
        <div style={{
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            backgroundColor: '#27272A',
            borderRadius: '8px',
            border: '1px solid #444',
            overflow: 'hidden'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.5rem',
                borderBottom: '1px solid #444',
            }}>
                {[
                    { id: 0, label: 'Defina suas Variáveis' },
                    { id: 1, label: 'Escreva seu Modelo' },
                    { id: 2, label: 'Exporte com um Clique' },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            flex: 1,
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            backgroundColor: activeTab === tab.id ? 'var(--accent)' : 'transparent',
                            color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
                            fontSize: '0.8rem'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div style={{ position: 'relative' }}>
                 <TabContent id={0}>
                    <div style={{ backgroundColor: '#333333', padding: '1.5rem', borderRadius: '8px', border: '1px solid #444', fontFamily: '"Roboto Mono", monospace', color: '#F8F8F2', fontSize: '0.85rem', lineHeight: '1.7' }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#F92672' }}>Autor:</span><br />
                            {'  '}<span style={{ color: '#888' }}>Nome:</span> <span style={{ color: '#A6E22E' }}>"João da Silva"</span><br />
                            {'  '}<span style={{ color: '#888' }}>CPF:</span> <span style={{ color: '#A6E22E' }}>"123.456.789-00"</span><br />
                            {'  '}<span style={{ color: '#888' }}>Endereço:</span> <span style={{ color: '#A6E22E' }}>"Rua Fictícia, 123"</span><br />
                            {'  '}<span style={{ color: '#888' }}>E-mail:</span> <span style={{ color: '#A6E22E' }}>"joao@email.com"</span><br />
                            <br />
                            <span style={{ color: '#F92672' }}>Réu:</span><br />
                            {'  '}<span style={{ color: '#888' }}>Nome:</span> <span style={{ color: '#A6E22E' }}>"Empresa XYZ"</span><br />
                            {'  '}<span style={{ color: '#888' }}>CNPJ:</span> <span style={{ color: '#A6E22E' }}>"11.222.333/0001-44"</span><br />
                            {'  '}<span style={{ color: '#888' }}>Endereço:</span> <span style={{ color: '#A6E22E' }}>"Av. Principal, 456"</span><br />
                            {'  '}<span style={{ color: '#888' }}>E-mail:</span> <span style={{ color: '#A6E22E' }}>"contato@empresa.xyz"</span><br />
                            <br />
                            <span style={{ color: '#F92672' }}>Causa:</span><br />
                            {'  '}<span style={{ color: '#888' }}>Valor:</span> <span style={{ color: '#AE81FF' }}>15000</span><br />
                            {'  '}<span style={{ color: '#888' }}>Juizado:</span> <span style={{ color: '#A6E22E' }}>"1ª Vara Cível"</span><br />
                            {'  '}<span style={{ color: '#888' }}>Assunto:</span> <span style={{ color: '#A6E22E' }}>"Danos Morais"</span>
                        </pre>
                    </div>
                </TabContent>
                <TabContent id={1}>
                     <div style={{ backgroundColor: '#333333', padding: '1.5rem', borderRadius: '8px', border: '1px solid #444', fontFamily: '"Inter", sans-serif', color: '#F8F8F2', lineHeight: '1.6', fontSize: '0.9rem' }}>
                       <p style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                           EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA <strong style={{ color: '#FFD2A6', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ dados_processo.vara }}`}</strong> DA COMARCA DE <strong style={{ color: '#FFD2A6', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ reu.cidade }}`}/{`{{ reu.estado }}`}</strong>
                       </p>
                       <br />
                       <p><strong>Autos nº <strong style={{ color: '#FFD2A6', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ dados_processo.numero_processo }}`}</strong></strong></p>
                       <br />
                       <p>
                           <strong style={{ color: '#FFD2A6', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ reu.nome }}`}</strong>, pessoa jurídica de direito privado, já qualificada nos autos da <strong>Ação de Indenização por Danos Morais e Materiais</strong><span style={{ whiteSpace: 'nowrap' }}> que lhe move <strong style={{ color: '#FFD2A6', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ autor.nome }}`}</strong></span>, vem, respeitosamente, por seu advogado que esta subscreve, apresentar
                       </p>
                       <br/>
                       <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem', margin: '0.5rem 0', color: '#fff' }}>CONTESTAÇÃO</h2>
                       <br/>
                       <p>pelas razões de fato e de direito a seguir aduzidas:</p>
                    </div>
                </TabContent>
                <TabContent id={2}>
                    <div style={{
                        backgroundColor: '#FAFAFA',
                        color: 'var(--text-primary)',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '1px solid #EAEAEA',
                        fontFamily: '"Times New Roman", serif',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                     }}>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
                            EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>1ª Vara Cível</strong> DA COMARCA DE <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>São Paulo/SP</strong>
                        </p>
                        <br />
                        <p><strong>Autos nº <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>0012345-67.2023.8.26.0001</strong></strong></p>
                        <br />
                        <p>
                            <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>Empresa XYZ</strong>, pessoa jurídica de direito privado, já qualificada nos autos da <strong>Ação de Indenização por Danos Morais e Materiais</strong> que lhe move <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>João da Silva</strong>, vem, respeitosamente, por seu advogado que esta subscreve, apresentar
                        </p>
                        <br />
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', margin: '0.5rem 0' }}>CONTESTAÇÃO</h2>
                        <br />
                        <p>pelas razões de fato e de direito a seguir aduzidas:</p>
                    </div>
                </TabContent>
            </div>
        </div>
    );
};

const SignerVisual = () => (
    <div style={{
        backgroundColor: 'var(--background-secondary)',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        padding: '1.5rem',
        fontFamily: 'Inter, sans-serif',
        color: 'var(--text-primary)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        height: '100%',
    }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '32px', height: '32px', color: 'rgb(245, 158, 11)'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Assinador Digital P7S</h3>
                <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Assine arquivos no padrão PKCS#7.</p>
            </div>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>ARQUIVO PARA ASSINAR:</p>
            <div style={{ backgroundColor: 'var(--background-tertiary)', padding: '8px 12px', borderRadius: '4px', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                relatorio-calculo.pdf
            </div>
        </div>

        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>CERTIFICADO SELECIONADO:</p>
        <div style={{
            border: '2px solid var(--accent)',
            borderRadius: '6px',
            padding: '12px',
            backgroundColor: 'var(--accent-background)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: '600' }}>JOÃO PEREIRA DA SILVA...</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Emissor: Autoridade Certificadora Brasil v10</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#166534', backgroundColor: '#D1FAE5', padding: '4px 8px', borderRadius: '12px' }}>Válido</span>
            </div>
        </div>
        
        <button disabled style={{
            width: '100%',
            marginTop: '1.5rem',
            backgroundColor: 'var(--accent)',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontWeight: 600,
            border: 'none',
            opacity: 0.5,
        }}>
            Assinar
        </button>
    </div>
);

const CalculatorVisual = () => (
    <div style={{
        backgroundColor: 'var(--background-secondary)',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        padding: '1.5rem',
        fontFamily: 'Inter, sans-serif',
        color: 'var(--text-primary)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        height: '100%',
    }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{width: '32px', height: '32px', color: 'rgb(139, 92, 246)'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Calculadora Jurídica</h3>
                <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Liquidação de sentença e relatórios.</p>
            </div>
        </div>

        <div style={{ backgroundColor: 'var(--background-tertiary)', padding: '1rem', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Danos Morais</span>
                <span style={{ fontSize: '0.9rem', fontFamily: 'Roboto Mono, monospace' }}>R$ 15.000,00</span>
            </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)'}}>+ Juros</span>
                <span style={{ fontSize: '0.9rem', fontFamily: 'Roboto Mono, monospace' }}>R$ 5.053,87</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)'}}>+ Correção</span>
                <span style={{ fontSize: '0.9rem', fontFamily: 'Roboto Mono, monospace' }}>R$ 1.025,41</span>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Total</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'Roboto Mono, monospace' }}>R$ 22.087,21</span>
                </div>
            </div>
        </div>
        
        <div style={{
            marginTop: '1rem',
            backgroundColor: '#27272A',
            borderRadius: '6px',
            padding: '1rem',
            color: '#A1A1AA',
            fontSize: '0.75rem',
            fontFamily: 'Roboto Mono, monospace',
            height: '90px',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <p style={{margin: 0, whiteSpace: 'pre'}}>
{`Iniciando cálculo...
> Aplicando Correção: IPCA
> Aplicando Juros: SELIC
...
VALOR TOTAL GERAL DEVIDO: R$ 22.087,21`}
            </p>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40px',
                background: 'linear-gradient(to top, #27272A, transparent)',
            }}></div>
        </div>
    </div>
);

const IntegratedToolsSection = () => {
    return (
        <section id="tools" style={{ paddingTop: '6rem' }}>
            <div className="container">
                <h2 className="section-title">Ferramentas Integradas para Máxima Eficiência</h2>
                <p className="section-subtitle">
                    Vá além da edição de documentos. O ConnectJus Docs inclui ferramentas essenciais para o dia a dia do advogado, tudo em um só lugar.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    alignItems: 'stretch',
                }}>
                    <SignerVisual />
                    <CalculatorVisual />
                </div>
            </div>
        </section>
    );
};

const SecurityVisual = () => {
    const FeatureCard = ({ icon, title, description }) => (
        <div style={{
            backgroundColor: 'var(--background-secondary)',
            borderRadius: '8px',
            padding: '2rem',
            border: '1px solid var(--border)',
            textAlign: 'center',
        }}>
            <div style={{ marginBottom: '1rem', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{icon}</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>
        </div>
    );

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '36px', height: '36px', color: '#3b82f6'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9" />
                    </svg>}
                title="100% Offline"
                description="Seus dados nunca saem do seu computador. Trabalhe com a segurança de que suas informações estão sob seu controle total."
            />
             <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '36px', height: '36px', color: '#10b981'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>}
                title="Sem Assinaturas"
                description="Uso gratuito. Aproveite todos os recursos sem nenhum custo, incluindo futuras atualizações e melhorias."
            />
             <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '36px', height: '36px', color: '#8b5cf6'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>}
                title="Privacidade Garantida"
                description="Não coletamos dados de uso. Sua prática profissional permanece confidencial, sem telemetria ou rastreamento."
            />
        </div>
    );
};

const Footer = () => {
  return (
    <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 0',
        backgroundColor: 'var(--background-secondary)'
    }}>
        <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <p>&copy; {new Date().getFullYear()} ConnectJus. Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);