import React, { useState } from 'react';

export const FeaturesSection = () => {
    const [activeTab, setActiveTab] = useState(1); // 0: Vars, 1: Model, 2: Export

    const longText = `pelas razões de fato e de direito a seguir aduzidas:

I. DOS FATOS

A parte Autora alega, em síntese, que firmou com a Ré contrato de prestação de serviços, e que teria sofrido danos de ordem material e moral em decorrência de suposta falha. Requer, ao final, a condenação da Ré ao pagamento de indenização.

II. DO MÉRITO

Contudo, as alegações autorais não merecem prosperar. A realidade fática é diversa daquela narrada na exordial, como se passará a demonstrar. A Ré sempre pautou sua conduta pela boa-fé objetiva, cumprindo com todas as suas obrigações contratuais de forma diligente e tempestiva. Não há que se falar em falha na prestação de serviços.`;

    const tabs = [
        {
            title: 'Defina suas Variáveis',
            content: (
                <div style={{ backgroundColor: 'rgb(51, 51, 51)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgb(68, 68, 68)', fontFamily: '"Roboto Mono", monospace', color: 'rgb(248, 248, 242)', fontSize: '0.85rem', lineHeight: 1.7, overflowWrap: 'break-word' }}>
                    <pre style={{ margin: '0px', whiteSpace: 'pre-wrap' }}>
                        <span style={{ color: '#F92672' }}>Autor:</span><br />
                        {'  '}<span style={{ color: '#75715E' }}>Nome:</span> <span style={{ color: '#A6E22E' }}>"João da Silva"</span><br />
                        {'  '}<span style={{ color: '#75715E' }}>CPF:</span> <span style={{ color: '#A6E22E' }}>"123.456.789-00"</span><br />
                        <br />
                        <span style={{ color: '#F92672' }}>Réu:</span><br />
                        {'  '}<span style={{ color: '#75715E' }}>Nome:</span> <span style={{ color: '#A6E22E' }}>"Empresa XYZ"</span><br />
                        {'  '}<span style={{ color: '#75715E' }}>CNPJ:</span> <span style={{ color: '#A6E22E' }}>"11.222.333/0001-44"</span><br />
                         <br />
                        <span style={{ color: '#F92672' }}>Causa:</span><br />
                        {'  '}<span style={{ color: '#75715E' }}>Valor:</span> <span style={{ color: '#AE81FF' }}>15000</span><br />
                         {'  '}<span style={{ color: '#75715E' }}>Juizado:</span> <span style={{ color: '#A6E22E' }}>"1ª Vara Cível"</span><br />
                    </pre>
                </div>
            )
        },
        {
            title: 'Escreva seu Modelo',
            content: (
                 <div style={{ backgroundColor: 'rgb(51, 51, 51)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgb(68, 68, 68)', fontFamily: '"Inter", sans-serif', color: 'rgb(248, 248, 242)', lineHeight: 1.6, fontSize: '0.9rem', overflowWrap: 'break-word', textAlign: 'left' }}>
                    <p style={{ fontWeight: 'bold', color: 'white', textAlign: 'left' }}>EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA <strong style={{ color: 'rgb(255, 210, 166)', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ Causa.Juizado }}`}</strong> DA COMARCA DE <strong style={{ color: 'rgb(255, 210, 166)', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ Réu.Cidade }}/{{ Réu.Estado }}`}</strong></p>
                    <p style={{marginTop: '1.6em'}}><strong>Autos nº <strong style={{ color: 'rgb(255, 210, 166)', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ Causa.NumeroProcesso }}`}</strong></strong></p>
                    <p style={{marginTop: '1.6em'}}><strong style={{ color: 'rgb(255, 210, 166)', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ Réu.Nome }}`}</strong>, pessoa jurídica de direito privado, já qualificada nos autos da <strong>Ação de Indenização por Danos Morais e Materiais</strong> que lhe move <strong style={{ color: 'rgb(255, 210, 166)', background: 'rgba(255, 210, 166, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>{`{{ Autor.Nome }}`}</strong>, vem, respeitosamente, por seu advogado que esta subscreve, apresentar</p>
                    <h2 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.1rem', margin: '1.6em 0', color: 'rgb(255, 255, 255)' }}>CONTESTAÇÃO</h2>
                    <p>pelas razões de fato e de direito a seguir aduzidas:</p>
                </div>
            )
        },
        {
            title: 'Exporte com um Clique',
            content: (
                <div style={{
                    position: 'relative',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '450px',
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '1rem', bottom: '1rem', left: '1rem', right: '1rem',
                        backgroundColor: 'rgb(245, 245, 245)',
                        borderRadius: '8px',
                        border: '1px solid rgb(224, 224, 224)',
                        transform: 'rotate(-3deg)',
                        zIndex: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '1rem', bottom: '1rem', left: '1rem', right: '1rem',
                        backgroundColor: 'rgb(248, 248, 248)',
                        borderRadius: '8px',
                        border: '1px solid rgb(230, 230, 230)',
                        transform: 'rotate(1.5deg)',
                        zIndex: 1,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}></div>
                    <div style={{
                        backgroundColor: 'rgb(250, 250, 250)', color: 'var(--text-primary)',
                        padding: '1.5rem', borderRadius: '8px', border: '1px solid rgb(234, 234, 234)',
                        fontFamily: '"Times New Roman", serif', fontSize: '1rem', lineHeight: 1.6,
                        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                        height: '400px',
                        zIndex: 2,
                    }}>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>1ª Vara Cível</strong> DA COMARCA DE <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>São Paulo/SP</strong></p>
                        <p style={{marginTop: '1.6em'}}><strong>Autos nº <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>0012345-67.2023.8.26.0001</strong></strong></p>
                        <p style={{ textAlign: 'justify', textIndent: '2em', marginTop: '1.6em' }}><strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>Empresa XYZ</strong>, pessoa jurídica de direito privado, já qualificada nos autos da <strong>Ação de Indenização por Danos Morais e Materiais</strong> que lhe move <strong style={{ color: 'var(--accent)', background: 'var(--accent-background)', padding: '2px 4px', borderRadius: '4px' }}>João da Silva</strong>, vem, respeitosamente, por seu advogado que esta subscreve, apresentar</p>
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', margin: '1.6em 0' }}>CONTESTAÇÃO</h2>
                        <p style={{ textAlign: 'justify', textIndent: '2em' }}>{longText}</p>
                        <p style={{ textAlign: 'justify', textIndent: '2em' }}>{longText.replace('II. DO MÉRITO', 'III. DA INEXISTÊNCIA DE DANO')}</p>
                        <div style={{
                            position: 'absolute',
                            bottom: 0, left: 0, right: 0,
                            height: '150px',
                            background: 'linear-gradient(to top, rgb(250, 250, 250) 40%, transparent)',
                        }}></div>
                    </div>
                </div>
            )
        }
    ];
    
    return (
        <section id="features">
            <div className="container features-layout">
                <div className="features-content">
                    <h2 className="section-title">A Lógica por Trás do Documento</h2>
                    <p className="section-subtitle">
                        Diferente de um processador de texto tradicional, o ConnectJus Docs trata seus documentos como dados estruturados. Isso habilita automação, consistência e gerenciamento de informações em uma nova escala.
                    </p>
                </div>

                <div className="features-visual">
                    <div className="how-it-works-tabs">
                        {tabs.map((tab, index) => (
                             <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                style={{
                                    flex: '1 1 0%',
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    backgroundColor: activeTab === index ? 'var(--accent)' : 'transparent',
                                    color: activeTab === index ? 'white' : 'var(--text-secondary)',
                                    fontSize: '0.8rem',
                                }}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    
                    <div style={{ position: 'relative', minHeight: '450px', padding: '1.5rem' }}>
                        {tabs.map((tab, index) => (
                             <div key={index} style={{
                                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                                opacity: activeTab === index ? 1 : 0,
                                transform: `translateY(${activeTab === index ? '0px' : '20px'})`,
                                position: 'absolute',
                                visibility: activeTab === index ? 'visible' : 'hidden',
                                width: 'calc(100% - 3rem)',
                                top: '1.5rem',
                                left: '1.5rem',
                            }}>
                                 {tab.content}
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
