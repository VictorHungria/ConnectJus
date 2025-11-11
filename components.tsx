import React, { useState, useEffect, useRef } from 'react';
import { FolderIcon, CjmFileIcon, CjvFileIcon, MdFileIcon, Logo, OfficeIcon } from './icons';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export const Header = () => {
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
          <span className="logo-text-container" style={{ marginLeft: '0.5rem' }}>
            ConnectJus <span style={{ color: 'var(--accent)' }}>Docs.</span>
          </span>
        </a>
        <a href="https://github.com/VictorHungria/ConnectJus/releases/download/v0.0.1-alpha/ConnectJusDocs-Setup-1.0.0.exe" className="button-primary" style={{ padding: '8px 16px' }}>Download Gratuito</a>
      </div>
    </header>
  );
};

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

const highlightSpan = (text, type) => {
  const styles = {
    variable: { backgroundColor: 'rgba(255, 210, 166, 0.2)', color: '#C2410C', fontWeight: 500 },
    partial: { backgroundColor: 'rgba(166, 226, 46, 0.2)', color: '#65A30D', fontWeight: 600 }
  };
  return <span className="code-highlight" style={{ ...styles[type], padding: '2px 6px', borderRadius: '4px' }}>{text}</span>
}

const syntaxHighlight = (text: string) => {
    const parts = text.split(/(\{\{[^}]*\}\}|\[\[[^\]]*\]\])/g);
    return parts.map((part, i) => {
        if (part.startsWith('{{') && part.endsWith('}}')) {
             return <React.Fragment key={i}>{highlightSpan(part, 'variable')}</React.Fragment>;
        }
        if (part.startsWith('[[') && part.endsWith(']]')) {
            return <React.Fragment key={i}>{highlightSpan(part, 'partial')}</React.Fragment>;
        }
        return <span key={i}>{part}</span>;
    });
};

const EditorLayoutVisual = ({
    highlightedFile,
    breadcrumb,
    initialContent,
    finalContent,
}) => {
    const [isRendered, setIsRendered] = useState(false);
    const editorRef = useRef(null);
    const width = useWindowWidth();
    const isMobile = width < 768;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => {
                        setIsRendered(true);
                    }, 1000);
                    return () => clearTimeout(timer);
                } else {
                    setIsRendered(false);
                }
            },
            { threshold: 0.5 }
        );

        if (editorRef.current) {
            observer.observe(editorRef.current);
        }

        return () => {
            if (editorRef.current) {
                observer.unobserve(editorRef.current);
            }
        };
    }, []);

    const TreeItem = ({ icon, name, level = 0, isHighlighted = false, children = null, open = false }) => {
        const itemPadding = level * 1.25;
        const contentPadding = itemPadding + 0.5;
        
        return (
            <div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 8px',
                    paddingLeft: `${contentPadding}rem`,
                    borderRadius: '4px',
                    backgroundColor: isHighlighted ? 'var(--accent-background)' : 'transparent',
                    color: isHighlighted ? 'var(--accent)' : 'var(--text-secondary)',
                    fontWeight: isHighlighted ? 600 : 500,
                    fontSize: '0.875rem',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease-in-out',
                }}
                onMouseOver={(e) => { if(!isHighlighted) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.03)'}}
                onMouseOut={(e) => { if(!isHighlighted) e.currentTarget.style.backgroundColor = 'transparent'}}
                >
                    {icon}
                    <span style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: isHighlighted ? 'var(--accent)' : 'var(--text-primary)'}}>{name}</span>
                </div>
                {open && children && <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${itemPadding + 1.125}rem`, width: '1px', backgroundColor: 'var(--border)'}}></div>
                    {children}
                </div>}
            </div>
        );
    }

    return (
        <div ref={editorRef} style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05)',
            display: 'flex',
            height: '100%',
            minHeight: '450px',
            maxHeight: '450px',
            overflow: 'hidden'
        }}>
            {/* File Tree */}
            {!isMobile && (
              <div style={{
                  flex: '1',
                  minWidth: '220px',
                  maxWidth: '320px',
                  borderRight: '1px solid var(--border)',
                  backgroundColor: 'var(--background-tertiary)',
                  fontFamily: 'Inter, sans-serif',
                  display: 'flex',
                  flexDirection: 'column',
              }}>
                   <div style={{ 
                      padding: '0.5rem 0.75rem', 
                      borderBottom: '1px solid var(--border)', 
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexShrink: 0
                  }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>CONNECTJUS DOCS</span>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px', color: 'var(--text-secondary)', cursor: 'pointer'}}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px', color: 'var(--text-secondary)', cursor: 'pointer'}}><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                      </div>
                   </div>
                   <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem' }}>
                      <TreeItem icon={<OfficeIcon/>} name="Ação Indenizatória - João Silva" level={0} open>
                          <TreeItem icon={<FolderIcon/>} name="Modelos" level={1} open>
                               <TreeItem icon={<FolderIcon/>} name="Qualificações" level={2} open>
                                  <TreeItem icon={<CjmFileIcon/>} name="credenciais.cjm" level={3} isHighlighted={highlightedFile === 'credenciais.cjm'} />
                              </TreeItem>
                              <TreeItem icon={<FolderIcon/>} name="Contestação" level={2} open>
                                  <TreeItem icon={<CjmFileIcon/>} name="introdução.cjm" level={3} isHighlighted={highlightedFile === 'introdução.cjm'}/>
                              </TreeItem>
                          </TreeItem>
                          <TreeItem icon={<FolderIcon/>} name="Peças Processuais" level={1} open>
                               <TreeItem icon={<MdFileIcon/>} name="Contestação.md" level={2} isHighlighted={highlightedFile === 'Contestação.md'}/>
                          </TreeItem>
                          <TreeItem icon={<CjvFileIcon/>} name="Variaveis.cjv" level={1} isHighlighted={highlightedFile === 'Variaveis.cjv'}/>
                      </TreeItem>
                   </div>
              </div>
            )}
            {/* Editor */}
            <div style={{
                flex: isMobile ? 1 : 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                 <div style={{
                    display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)',
                    padding: '8px 12px',
                    color: 'var(--text-secondary)', fontSize: '0.8rem',
                    height: '36px',
                    flexShrink: 0
                 }}>
                    {breadcrumb}
                 </div>
                 <div style={{padding: '1.5rem', fontFamily: '"Roboto Mono", monospace', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.7, flex: 1, overflowY: 'auto'}}>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%',
                            transition: 'opacity 0.4s ease-out',
                            opacity: isRendered ? 0 : 1,
                            whiteSpace: 'pre-wrap',
                            pointerEvents: 'none',
                        }}>
                            {syntaxHighlight(initialContent)}
                        </div>
                        <div style={{
                            transition: 'opacity 0.4s ease-in 0.3s',
                            opacity: isRendered ? 1 : 0,
                            whiteSpace: 'pre-wrap',
                            color: 'var(--text-primary)',
                            fontWeight: 500,
                            minHeight: '200px'
                        }}>
                            {finalContent}
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

const VariablesEditorVisual = () => {
    // New Icons for the visual
    const AddIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px'}} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
        </svg>
    );

    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: '16px', width: '16px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
    );
    
    const DragHandleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{height: '16px', width: '16px', color: 'var(--text-secondary)', cursor: 'move'}}>
            <circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle>
        </svg>
    );
    
    const VarGroupIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{height: '20px', width: '20px', color: 'rgb(75, 85, 99)'}}>
            <rect x="5" y="3" width="14" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="13" y2="17"></line>
        </svg>
    );

    const VarFieldIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{height: '20px', width: '20px', color: 'rgb(59, 130, 246)'}}>
            <path d="M4 7V4h16v3"></path><path d="M9 20h6"></path><path d="M12 4v16"></path>
        </svg>
    );

    const DeleteIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
    );

    const inputStyle = {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: '2px 4px',
        fontWeight: 600,
        fontSize: '0.875rem',
        color: 'var(--text-primary)',
        width: '100%'
    };
    
    const valueInputStyle = {
        width: '100%',
        backgroundColor: 'var(--background-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '6px',
        color: 'var(--text-primary)',
        outline: 'none'
    };
    
    const VariableField = ({ fieldKey, fieldValue }) => {
        const [isRowHovered, setIsRowHovered] = useState(false);
        const [isIconHovered, setIsIconHovered] = useState(false);

        return (
            <div style={{ position: 'relative', paddingBottom: '6px' }} onMouseEnter={() => setIsRowHovered(true)} onMouseLeave={() => setIsRowHovered(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', backgroundColor: 'var(--background-secondary)', border: '1px solid var(--border)', borderRadius: '6px' }}>
                    <div style={{ cursor: 'move', color: 'var(--text-secondary)' }}><DragHandleIcon /></div>
                    <div style={{ color: 'rgb(59, 130, 246)' }}><VarFieldIcon /></div>
                    <div style={{ flex: 1 }}>
                        <input type="text" style={inputStyle} defaultValue={fieldKey} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <input type="text" style={valueInputStyle} defaultValue={fieldValue} />
                    </div>
                    <button
                        style={{
                            color: isIconHovered ? 'var(--accent)' : 'var(--text-secondary)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            borderRadius: '9999px',
                            opacity: isRowHovered ? 1 : 0,
                            transition: 'opacity 0.2s ease-in-out, color 0.2s ease-in-out'
                        }}
                        onMouseEnter={() => setIsIconHovered(true)}
                        onMouseLeave={() => setIsIconHovered(false)}
                    >
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        );
    };

    const VariableGroup = ({ groupName, fields, fieldCount }) => {
        const [isRowHovered, setIsRowHovered] = useState(false);
        const [isIconHovered, setIsIconHovered] = useState(false);
        
        return (
            <div style={{ position: 'relative', paddingBottom: '6px' }}>
                <div style={{ border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>
                    <div 
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', backgroundColor: 'var(--background-tertiary)', borderBottom: '1px solid var(--border)' }}
                        onMouseEnter={() => setIsRowHovered(true)}
                        onMouseLeave={() => setIsRowHovered(false)}
                    >
                        <button style={{ padding: '4px', borderRadius: '9999px', background: 'none', border: 'none', cursor: 'pointer' }}><ChevronDownIcon /></button>
                        <div style={{ cursor: 'move', color: 'var(--text-secondary)' }}><DragHandleIcon /></div>
                        <div style={{ color: 'rgb(75, 85, 99)' }}><VarGroupIcon /></div>
                        <input type="text" style={{ ...inputStyle, flex: 1 }} defaultValue={groupName} />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', flexShrink: 0 }}>{fieldCount} campo(s)</span>
                        <button style={{ color: 'var(--accent)', fontSize: '0.75rem', padding: '4px 8px', background: 'var(--accent-background)', border: 'none', borderRadius: '6px', cursor: 'pointer', flexShrink: 0 }}>+ Adicionar</button>
                        <button
                            style={{
                                color: isIconHovered ? 'var(--accent)' : 'var(--text-secondary)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '9999px',
                                opacity: isRowHovered ? 1 : 0,
                                transition: 'opacity 0.2s ease-in-out, color 0.2s ease-in-out'
                            }}
                            onMouseEnter={() => setIsIconHovered(true)}
                            onMouseLeave={() => setIsIconHovered(false)}
                        >
                            <DeleteIcon />
                        </button>
                    </div>
                    <div style={{ padding: '16px', paddingLeft: '24px' }}>
                        <div style={{ borderLeft: '2px solid var(--border)', paddingLeft: '16px' }}>
                            {fields.map(field => <VariableField key={field.key} fieldKey={field.key} fieldValue={field.value} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05)',
            padding: '1.5rem',
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Editor de Variáveis</h3>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'var(--accent)', color: 'white', fontSize: '0.875rem', fontWeight: 600, borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                    <AddIcon /> Adicionar Campo
                </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <VariableGroup 
                    groupName="autor" 
                    fieldCount={2}
                    fields={[
                        { key: 'nome', value: 'João da Silva' },
                        { key: 'cpf', value: '123.456.789-00' }
                    ]} 
                />
                 <VariableGroup 
                    groupName="reu" 
                    fieldCount={2}
                    fields={[
                        { key: 'nome', value: 'Empresa XYZ' },
                        { key: 'cnpj', value: '11.222.333/0001-44' }
                    ]} 
                />
            </div>
        </div>
    );
}

const HierarchyVisual = () => {
    const TreeItem = ({ icon, name, level = 0, children = null, open = false, annotation = null }) => {
        const itemPadding = level * 1.25;
        const contentPadding = itemPadding + 0.5;
        
        return (
            <div>
                <div className="hierarchy-item" style={{
                    padding: '6px 8px',
                    paddingLeft: `${contentPadding}rem`,
                    position: 'relative',
                    fontSize: '0.875rem',
                }}>
                    <div className="hierarchy-item-content">
                        {icon}
                        <span style={{
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>{name}</span>
                    </div>
                    {annotation && (
                        <span className="hierarchy-item-annotation" style={{ 
                            color: 'var(--text-secondary)',
                            fontWeight: 400,
                            fontSize: '0.8rem',
                        }}>
                           ➞ <code className="code-highlight" style={ annotation.isOverride ? {
                               backgroundColor: 'var(--accent-background)',
                               color: 'var(--accent)',
                               fontWeight: 600,
                           } : {}}>{annotation.text}</code> {annotation.isOverride && <span style={{fontWeight: 600, color: 'var(--accent)'}}>(Sobrescreve)</span>}
                        </span>
                    )}
                </div>
                {open && children && <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${itemPadding + 1.125}rem`, width: '1px', backgroundColor: 'var(--border)'}}></div>
                    {children}
                </div>}
            </div>
        );
    }

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      border: '1px solid var(--border)',
      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05)',
      fontFamily: 'Inter, sans-serif',
      overflow: 'hidden',
    }}>
        <div style={{ 
            padding: '0.5rem 0.75rem', 
            borderBottom: '1px solid var(--border)', 
            height: '36px',
            display: 'flex',
            alignItems: 'center',
        }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>HIERARQUIA DE VARIÁVEIS</span>
        </div>
        <div style={{ padding: '0.5rem' }}>
            <TreeItem icon={<OfficeIcon />} name="Meu Escritório" level={0} open>
                <TreeItem icon={<CjvFileIcon />} name="Dados_ADV.cjv" level={1} annotation={{ text: 'adv.oab: "SP12345"' }} />
                <TreeItem icon={<FolderIcon />} name="Ações contra Empresa X" level={1} open>
                    <TreeItem icon={<CjvFileIcon />} name="Dados_EmpresaX.cjv" level={2} annotation={{ text: 'reu.nome: "Empresa X"' }} />
                    <TreeItem icon={<FolderIcon />} name="Ações em SP" level={2} open>
                        <TreeItem icon={<MdFileIcon />} name="Petição_Inicial.md" level={3} annotation={{ text: 'Usa OAB de SP, Réu "Empresa X"' }} />
                    </TreeItem>
                    <TreeItem icon={<FolderIcon />} name="Ações em RJ" level={2} open>
                         <TreeItem icon={<CjvFileIcon />} name="Adv.OAB RJ12345.cjv" level={3} annotation={{ text: 'adv.oab: "RJ12345"', isOverride: true }} />
                         <TreeItem icon={<MdFileIcon />} name="Contestação.md" level={3} annotation={{ text: 'Usa OAB do RJ, Réu "Empresa X"' }} />
                    </TreeItem>
                </TreeItem>
            </TreeItem>
        </div>
    </div>
  );
};

export const WorkflowSection = () => {
    
    const resolvedCredenciais = 'Empresa XYZ, pessoa jurídica de direito privado, já qualificada nos autos da Ação de Indenização por Danos Morais e Materiais que lhe move João da Silva, vem, respeitosamente, por seu advogado que esta subscreve, apresentar';
    
    const resolvedIntroducao = `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA 1ª Vara Cível DA COMARCA DE São Paulo/SP

Autos nº 0012345-67.2023.8.26.0001

${resolvedCredenciais}

CONTESTAÇÃO

pelas razões de fato e de direito a seguir aduzidas:`;
    
    return (
        <section id="workflow" className="container">
            <h2 className="section-title">Como Funciona</h2>
            <p className="section-subtitle">
                O ConnectJus Docs transforma a criação de documentos em um processo lógico e modular, permitindo automação e reuso de conteúdo em uma nova escala.
            </p>

            <div className="workflow-step">
                <div className="workflow-content">
                    <h3 className="workflow-step-title"><span className="step-number">1.</span> Defina suas Variáveis</h3>
                    <p className="workflow-step-description">
                       Centralize todas as informações do caso em um único arquivo de variáveis. Dados como <code className="code-highlight">autor.nome</code> ou <code className="code-highlight">reu.cnpj</code> são definidos uma vez e podem ser usados em todos os seus documentos.
                    </p>
                </div>
                <div className="workflow-visual">
                    <VariablesEditorVisual />
                </div>
            </div>

            <div className="workflow-step">
                <div className="workflow-content">
                     <h3 className="workflow-step-title"><span className="step-number">2.</span> Crie Modelos Reutilizáveis</h3>
                    <p className="workflow-step-description">
                       Quebre seus documentos em blocos lógicos, como qualificações, pedidos ou endereçamentos. Cada bloco é um "modelo" que pode ser chamado e reaproveitado, garantindo consistência e agilidade.
                       Salve este bloco como <code className="code-highlight">credenciais.cjm</code>.
                    </p>
                </div>
                <div className="workflow-visual">
                     <EditorLayoutVisual
                        highlightedFile="credenciais.cjm"
                        breadcrumb="Modelos / Qualificações / credenciais.cjm"
                        initialContent={`{{ reu.nome }}, pessoa jurídica de direito privado, já qualificada nos autos da Ação de Indenização por Danos Morais e Materiais que lhe move {{ autor.nome }}, vem, respeitosamente, por seu advogado que esta subscreve, apresentar`}
                        finalContent={<>
                            {highlightSpan('Empresa XYZ', 'variable')}
                            {', pessoa jurídica de direito privado, já qualificada nos autos da Ação de Indenização por Danos Morais e Materiais que lhe move '}
                            {highlightSpan('João da Silva', 'variable')}
                            {', vem, respeitosamente, por seu advogado que esta subscreve, apresentar'}
                        </>}
                     />
                </div>
            </div>

            <div className="workflow-step">
                <div className="workflow-content">
                    <h3 className="workflow-step-title"><span className="step-number">3.</span> Use modelos para criar outros modelos</h3>
                     <p className="workflow-step-description">
                       Combine blocos para montar estruturas mais complexas. Crie uma introdução de contestação, por exemplo, que já inclui o modelo de credenciais. A lógica é <strong>100% modular</strong>.
                    </p>
                </div>
                <div className="workflow-visual">
                    <EditorLayoutVisual
                        highlightedFile="introdução.cjm"
                        breadcrumb="Modelos / Contestação / introdução.cjm"
                        initialContent={`EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA {{ dados_processo.vara }}

Autos nº {{ dados_processo.numero_processo }}

[[modelos/qualificações/credenciais]]

CONTESTAÇÃO

pelas razões de fato e de direito a seguir aduzidas:`}
                        finalContent={<>
                            {'EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA '}
                            {highlightSpan('1ª Vara Cível DA COMARCA de São Paulo/SP', 'variable')}
                            {`

Autos nº `}
                            {highlightSpan('0012345-67.2023.8.26.0001', 'variable')}
                            {`

`}
                            {highlightSpan(resolvedCredenciais, 'partial')}
                            {`

CONTESTAÇÃO

pelas razões de fato e de direito a seguir aduzidas:`}
                        </>}
                    />
                </div>
            </div>
            
            <div className="workflow-step">
                 <div className="workflow-content">
                    <h3 className="workflow-step-title"><span className="step-number">4.</span> Assemble seu Documento Final</h3>
                    <p className="workflow-step-description">
                       Na sua peça final, basta chamar o modelo que você compôs. O ConnectJus Docs montará o documento, substituindo as variáveis e os modelos inclusos pelos seus respectivos valores, de forma automática.
                    </p>
                </div>
                <div className="workflow-visual">
                    <EditorLayoutVisual
                        highlightedFile="Contestação.md"
                        breadcrumb="Peças Processuais / Contestação.md"
                        initialContent={`[[modelos/contestação/introdução.cjm]]

I. SÍNTESE DA INICIAL

O Autor ajuizou a presente demanda visando a condenação da Ré ao pagamento de indenização por danos morais e materiais, alegando, em suma, que teria sofrido prejuízos decorrentes de suposta falha na prestação de serviços.

Contudo, como se demonstrará a seguir, as alegações do Autor não merecem prosperar, uma vez que desprovidas de qualquer fundamento fático ou jurídico.`}
                        finalContent={<>
                            {highlightSpan(resolvedIntroducao, 'partial')}
                            {`

I. SÍNTESE DA INICIAL

O Autor ajuizou a presente demanda visando a condenação da Ré ao pagamento de indenização por danos morais e materiais, alegando, em suma, que teria sofrido prejuízos decorrentes de suposta falha na prestação de serviços.

Contudo, como se demonstrará a seguir, as alegações do Autor não merecem prosperar, uma vez que desprovidas de qualquer fundamento fático ou jurídico.`}
                        </>}
                    />
                </div>
            </div>
            
            <div className="workflow-step">
                 <div className="workflow-content">
                    <h3 className="workflow-step-title"><span className="step-number">5.</span> Hierarquia Inteligente de Variáveis</h3>
                    <p className="workflow-step-description">
                       As variáveis funcionam de cima para baixo. As definidas em pastas superiores são herdadas pelas pastas filhas. No entanto, <strong>a variável mais próxima do documento sempre tem prioridade</strong>, permitindo personalizações específicas sem alterar o modelo principal.
                    </p>
                </div>
                <div className="workflow-visual">
                    <HierarchyVisual />
                </div>
            </div>

        </section>
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

export const IntegratedToolsSection = () => {
    return (
        <section id="tools">
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

export const SecuritySection = () => (
    <section id="security" className="container">
        <h2 className="section-title">Seguro e Profissional</h2>
        <p className="section-subtitle">Ferramentas que garantem a integridade e a confidencialidade dos seus documentos mais importantes.</p>
        <SecurityVisual />
    </section>
);

export const CtaSection = () => (
    <section id="cta" className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '2rem' }}>Disponível para sua Estação de Trabalho</h2>
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>Baixe o ConnectJus Docs e otimize seu fluxo de trabalho de documentação.</p>
        <a href="https://github.com/VictorHungria/ConnectJus/releases/download/v0.0.1-alpha/ConnectJusDocs-Setup-1.0.0.exe" className="button-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
          Download Gratuito
        </a>
    </section>
);

export const Footer = () => {
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