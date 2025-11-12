import React from 'react';

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
