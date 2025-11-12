import React from 'react';

const SecurityVisual = () => {
    const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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
