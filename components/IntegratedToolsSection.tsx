import React, { useState, useEffect, useRef } from 'react';

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

const CalculatorVisual = () => {
    const [total, setTotal] = useState(0);
    const calculatorRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const finalTotal = 22087.21;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = calculatorRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const duration = 1500;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentAmount = progress * finalTotal;
                
                setTotal(currentAmount);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setTotal(finalTotal);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isVisible]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    return (
        <div ref={calculatorRef} style={{
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
                        <span style={{ fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'Roboto Mono, monospace' }}>{formatCurrency(total)}</span>
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
};


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
