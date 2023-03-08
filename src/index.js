import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Spinner from './components/spinner';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Suspense fallback={<Spinner/>}>
      <App/>
    </Suspense>
  </>
);

