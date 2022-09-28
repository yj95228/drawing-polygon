import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RenderAfterNavermapsLoaded ncpClientId={'jqe51ds7wm'}>
      <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>
);
