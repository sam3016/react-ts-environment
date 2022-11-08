import { createRoot } from 'react-dom/client';
import React from 'react';
import App from '../components/app';

window.loadApp = (json:string) => {
  const data = JSON.parse(json);
  if (data) {
    const container = document.getElementById('root');
    const root = createRoot(container!); // createRoot(container!) if you use TypeScript
    root.render(<App props={data} />);
  }
}
