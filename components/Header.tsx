import React from 'react';
import { Logo } from '../icons';

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
