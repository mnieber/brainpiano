import { applyFormatters } from 'mobx-log';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/app/components';
import './index.css';

const strict = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (process.env.NODE_ENV === 'development') {
  applyFormatters();
}

const body = <App />;

root.render(strict ? <React.StrictMode>{body}</React.StrictMode> : body);
