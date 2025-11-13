import React from 'react';
import { useWindowWidth } from '../hooks/useWindowWidth';

// FIX: Added 'default' to the type union for the 'type' prop and to the 'styles' object to match the default prop value and prevent type errors.
const StyleTag = ({ children, type = 'default' }: { children: React.ReactNode, type?: 'default' | 'custom' | 'partial' | 'header' | 'quote' }) => {
    const styles = {
        default: {},
        custom: { color: 'var(--accent)', backgroundColor: 'var(--accent-background)' },
        partial: { color: '#65A30D', backgroundColor: 'rgba(166, 226, 46, 0.2)', fontWeight: 500 },
        header: { color: '#818cf8', fontWeight: 'bold' },
        quote: { color: '#a1a1aa' }
    };
    const selectedStyle = styles[type];

    return (
        <span style={{
            fontFamily: '"Roboto Mono", monospace',
            padding: type === 'custom' || type === 'partial' ? '2px 6px' : '0',
            borderRadius: type === 'custom' || type === 'partial' ? '4px' : '0',
            fontSize: 'inherit',
            ...selectedStyle
        }}>
            {children}
        </span>
    );
};

export const StylingSection = () => {
    const width = useWindowWidth();
    const isMobile = width < 992;

    const editorCode = (
`[[modelo/introdução]]
 
# dos fatos
 
O Autor foi vítima de grave falha...
 
## da responsabilidade civil
 
A responsabilidade civil da Ré...
 
<art>Art. 186. Aquele que, por ação ou omissão voluntária...</art>
 
São Paulo, {{ tdate() }}.
 
<ass>
Dr. Carlos Alberto Mendes
OAB/123.456/SP
</ass>
`
    ).trim();
    
    const HighlightedCode = () => {
        const highlightContent = (content: string) => {
            const parts = content.split(/(\{\{.*?\}\}|\[\[.*?\]\])/g);
            return parts.map((part, i) => {
                if (part.match(/^(\{\{.*\}\}|\[\[.*\]\])$/)) {
                    return <StyleTag key={i} type="partial">{part}</StyleTag>;
                }
                return <React.Fragment key={i}>{part}</React.Fragment>;
            });
        };

        const lines = editorCode.split('\n');
        return (
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: '"Roboto Mono", monospace', fontSize: '0.8rem', lineHeight: '1.6' }}>
                {lines.map((line, i) => {
                    if (line.match(/^<(ass|art)>|^<\/(ass|art)>/)) {
                        return <div key={i}><StyleTag type="custom">{line}</StyleTag></div>;
                    }
                    if (line.startsWith('# ')) {
                        return <div key={i}><StyleTag type="header">{line.substring(0,2)}</StyleTag>{highlightContent(line.substring(2))}</div>
                    }
                     if (line.startsWith('## ')) {
                        return <div key={i}><StyleTag type="header">{line.substring(0,3)}</StyleTag>{highlightContent(line.substring(3))}</div>
                    }
                    if (line.startsWith('> ')) {
                        return <div key={i}><StyleTag type="quote">{line.substring(0,2)}</StyleTag>{highlightContent(line.substring(2))}</div>
                    }
                    return <div key={i}>{highlightContent(line)}</div>
                })}
            </pre>
        );
    };

    return (
        <section id="styling" className="container">
            <h2 className="section-title">Foco no Conteúdo, Não na Formatação</h2>
            <p className="section-subtitle">
                Use tags semânticas como <code className="code-highlight">&lt;art&gt;</code> para artigos, <code className="code-highlight">#</code> para títulos e funções como <code className="code-highlight">{`{{ tdate() }}`}</code> para inserir a data atual. O ConnectJus cuida da formatação. Defina o estilo do seu escritório uma vez, e ele será aplicado em todos os documentos automaticamente.
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '2rem',
                alignItems: 'center',
                backgroundColor: 'var(--background-secondary)',
                padding: isMobile ? '1rem' : '2rem',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)'
            }}>
                {/* Editor View */}
                <div style={{ padding: '1rem', backgroundColor: '#27272A', color: '#FAFAFA', borderRadius: '8px', border: '1px solid #3f3f46' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #3f3f46' }}>
                        <div style={{ flex: '1', display: 'flex', gap: '6px' }}>
                            <span style={{width: '12px', height: '12px', backgroundColor: '#ef4444', borderRadius: '50%'}}></span>
                            <span style={{width: '12px', height: '12px', backgroundColor: '#f59e0b', borderRadius: '50%'}}></span>
                            <span style={{width: '12px', height: '12px', backgroundColor: '#22c55e', borderRadius: '50%'}}></span>
                        </div>
                        <div style={{ color: '#a1a1aa', fontSize: '0.75rem', fontFamily: '"Roboto Mono", monospace'}}>Petição_Inicial.md</div>
                    </div>
                    <HighlightedCode />
                </div>
                {/* Preview View */}
                <div style={{
                    backgroundColor: '#FDFBF7',
                    backgroundImage: 'url("https://raw.githubusercontent.com/VictorHungria/ConnectJus/main/assets/paper.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#000000',
                    borderRadius: '8px',
                    padding: '1.55cm 2rem 2.5cm 2rem',
                    fontFamily: '"Times New Roman", Times, serif',
                    border: '1px solid var(--border)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    aspectRatio: '210 / 297',
                    overflow: 'hidden',
                    maxHeight: '500px',
                    position: 'relative',
                    fontSize: '9px', /* Base font size for preview */
                }}>
                    <div style={{ fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '2em', lineHeight: '1.5' }}>
                        <p>EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO</p>
                    </div>

                    <div style={{ marginBottom: '2em', lineHeight: '1.5', textIndent: '5em' }}>
                        <p><strong>João da Silva Santos</strong>, brasileiro, portador do CPF nº <strong>123.456.789-00</strong>, residente e domiciliado na Rua das Flores, 123, vem, por seu advogado, propor a presente</p>
                        <p style={{ fontWeight: 'bold', textAlign: 'center', margin: '1em 0', textIndent: '0' }}>AÇÃO DE INDENIZAÇÃO</p>
                        <p style={{ marginBottom: '2em', lineHeight: '1.5', textIndent: '0' }}>em face de <strong>Empresa XPTO Ltda.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº <strong>11.222.333/0001-44</strong>, com sede na Avenida Paulista, nº 1000, São Paulo/SP.</p>
                    </div>

                    <h1 style={{ fontSize: '1.2em', fontWeight: 'bold', textTransform: 'uppercase', margin: '2em 0 1.5em 0' }}>I - DOS FATOS</h1>
                    <p style={{ textAlign: 'justify', textIndent: '5em', lineHeight: '1.5', marginBottom: '1em' }}>
                        O Autor foi vítima de grave falha...
                    </p>
                    <h2 style={{ fontSize: '1.1em', fontWeight: 'bold', margin: '1.5em 0' }}>2.1. Da Responsabilidade Civil</h2>
                    <p style={{ textAlign: 'justify', textIndent: '5em', lineHeight: '1.5', marginBottom: '1em' }}>
                       A responsabilidade civil da Ré...
                    </p>
                    <div style={{
                        margin: '1em 0 1em 4cm',
                        paddingLeft: '1.5em',
                        borderLeft: '3px solid var(--border)',
                        fontStyle: 'italic',
                        fontSize: '0.9em',
                        lineHeight: '1.5',
                        color: 'var(--text-primary)',
                    }}>
                         Art. 186. Aquele que, por ação ou omissão voluntária...
                    </div>
                    <div style={{ marginTop: '2em' }}>
                        <p>São Paulo, {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}.</p>
                    </div>
                     <div style={{ textAlign: 'center', marginTop: '2em', lineHeight: '1.5' }}>
                        <p>_________________________</p>
                        <p style= {{ lineHeight: '1' }}><b>Dr. Carlos Alberto Mendes</b></p>
                        <p style= {{ lineHeight: '0' }}>OAB/123.456/SP</p>
                    </div>
                    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(to top, #FDFBF7 20%, transparent)'}}></div>
                </div>
            </div>
        </section>
    );
};