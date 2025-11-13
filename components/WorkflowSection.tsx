import React, { useState, useEffect, useRef } from 'react';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { FolderIcon, CjmFileIcon, CjvFileIcon, MdFileIcon, OfficeIcon } from '../icons';

const highlightSpan = (text: React.ReactNode, type: 'variable' | 'partial') => {
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
}: { highlightedFile: string, breadcrumb: string, initialContent: string, finalContent: React.ReactNode }) => {
    const [isRendered, setIsRendered] = useState(false);
    const editorRef = useRef<HTMLDivElement>(null);
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

    const TreeItem = ({ icon, name, level = 0, isHighlighted = false, children = null, open = false }: { icon: React.ReactNode, name: string, level?: number, isHighlighted?: boolean, children?: React.ReactNode, open?: boolean }) => {
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

    const inputStyle: React.CSSProperties = {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: '2px 4px',
        fontWeight: 600,
        fontSize: '0.875rem',
        color: 'var(--text-primary)',
        width: '100%'
    };
    
    const valueInputStyle: React.CSSProperties = {
        width: '100%',
        backgroundColor: 'var(--background-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '6px',
        color: 'var(--text-primary)',
        outline: 'none'
    };
    
    const VariableField = ({ fieldKey, fieldValue }: { fieldKey: string, fieldValue: string }) => {
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

    // FIX: Renamed 'key' property to 'fieldKey' to avoid conflict with React's special 'key' prop.
    const VariableGroup = ({ groupName, fields, fieldCount }: { groupName: string, fields: { fieldKey: string, value: string }[], fieldCount: number }) => {
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
                            {fields.map((field, index) => <VariableField key={index} fieldKey={field.fieldKey} fieldValue={field.value} />)}
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
                        { fieldKey: 'nome', value: 'João da Silva' },
                        { fieldKey: 'cpf', value: '123.456.789-00' }
                    ]} 
                />
                 <VariableGroup 
                    groupName="reu" 
                    fieldCount={2}
                    fields={[
                        { fieldKey: 'nome', value: 'Empresa XYZ' },
                        { fieldKey: 'cnpj', value: '11.222.333/0001-44' }
                    ]} 
                />
            </div>
        </div>
    );
}

const HierarchyVisual = () => {
    const TreeItem = ({ icon, name, level = 0, children = null, open = false, annotation = null }: { icon: React.ReactNode, name: string, level?: number, children?: React.ReactNode, open?: boolean, annotation?: { text: string, isOverride?: boolean } | null }) => {
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