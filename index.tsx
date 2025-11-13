import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header, HeroSection, FeaturesSection, WorkflowSection, IntegratedToolsSection, StylingSection, SecuritySection, CtaSection, Footer } from './components';

const App = () => {
  const styles = `
    :root {
      --background: #FAFAFA;
      --background-secondary: #FFFFFF;
      --background-tertiary: #F5F5F5;
      --border: #E6E6E6;
      --text-primary: #333333;
      --text-secondary: #52525B;
      --accent: #DC2626;
      --accent-hover: #B91C1C;
      --accent-glow: rgba(220, 38, 38, 0.2);
      --accent-background: rgba(220, 38, 38, 0.1);
    }
    html {
      box-sizing: border-box;
      scroll-behavior: smooth;
    }
    *, *::before, *::after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
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
    
    main {
      padding-bottom: 5rem;
    }
    #hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 0;
      padding-bottom: 0;
    }
    #features {
      background-color: #18181B;
      color: #FAFAFA;
      border-top: 1px solid #27272A;
      border-bottom: 1px solid #27272A;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 3rem 0;
    }
    #features .section-title {
        color: #FFFFFF;
    }
    #features .section-subtitle {
        color: #A1A1AA;
        max-width: 700px;
    }
    .features-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        align-items: center;
    }
    .features-content {
        text-align: center;
    }
    .features-visual {
        max-width: 620px;
        width: 100%;
        margin: 0 auto;
        background-color: #27272A;
        border-radius: 8px;
        border: 1px solid #3f3f46;
        overflow: hidden;
    }
    .how-it-works-tabs {
        display: flex;
        gap: 0.5rem;
        padding: 0.5rem;
        background-color: rgba(0,0,0,0.1);
        border-bottom: 1px solid #3f3f46;
    }

    #workflow, #tools, #security, #cta, #styling {
      padding-top: 6rem;
    }

    #tools {
      background-color: var(--background-secondary);
      padding-bottom: 6rem;
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
      font-size: 3.5rem;
      font-weight: 900;
      line-height: 1.2;
      color: var(--text-primary);
      text-align: left;
      margin-bottom: 0;
    }
    .hero-layout .hero-content {
      text-align: left;
    }
    .hero-layout .hero-content p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin: 0 0 1.5rem 0;
      max-width: none;
    }

    .workflow-step {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 4rem;
        align-items: center;
        margin-bottom: 8rem;
    }
    .workflow-step:nth-child(even) {
        grid-template-columns: 1.2fr 1fr;
    }
     .workflow-step:nth-child(even) .workflow-content {
        order: 2;
    }
     .workflow-step:nth-child(even) .workflow-visual {
        order: 1;
    }
    .workflow-step-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }
     .workflow-step-title .step-number {
        display: inline-block;
        color: var(--accent);
        font-weight: 900;
        margin-right: 0.5rem;
     }

    .workflow-step-description {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-secondary);
    }
    .workflow-step-description strong {
      color: var(--text-primary);
      font-weight: 600;
    }
    
    .code-highlight {
      background-color: var(--background-tertiary);
      color: var(--accent);
      font-family: 'Roboto Mono', monospace;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    
    .hierarchy-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
    .hierarchy-item-content {
      display: flex;
      align-items: center;
    }

    @keyframes fade-in-out {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }

    @keyframes expand-content {
      from { max-height: 0; opacity: 0; }
      to { max-height: 500px; opacity: 1; }
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
      .workflow-step, .workflow-step:nth-child(even) {
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
      }
      .workflow-step .workflow-content, .workflow-step:nth-child(even) .workflow-content {
          order: 1;
          text-align: center;
      }
      .workflow-step .workflow-visual, .workflow-step:nth-child(even) .workflow-visual {
          order: 2;
      }
      
      #features {
        padding: 4rem 0;
      }
      #workflow, #tools, #security, #cta, #styling {
        padding-top: 4rem;
      }
      #tools {
        padding-bottom: 4rem;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .section-title {
        font-size: 2rem;
      }
      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 3rem;
      }
      .hero-layout h1 {
        font-size: 2.5rem;
      }
      .hero-layout .hero-content p {
        font-size: 1.125rem;
      }
      .hierarchy-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
      }
      .hierarchy-item-annotation {
        padding-left: 26px; /* icon width + margin */
      }
      #cta .button-primary {
        padding: 14px 28px;
        font-size: 1rem;
      }
      main {
        padding-bottom: 3rem;
      }
      #features {
        padding: 3rem 0;
      }
      #workflow, #tools, #security, #cta, #styling {
        padding-top: 3rem;
      }
      #tools {
        padding-bottom: 3rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-layout h1 {
        font-size: 2.1rem;
      }
      .logo-text-container {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <IntegratedToolsSection />
        <StylingSection />
        <SecuritySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);