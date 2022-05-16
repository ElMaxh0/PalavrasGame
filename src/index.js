import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PalavrasProvider from './global/hook/PalavrasArray';
import LettersProvider from './global/hook/lettersArray';
import SelectedCordenatesProvider from './global/hook/selectedCordenates';
import SelectedWordProvider from './global/hook/SelectedWord';
import UserRowProvider from './global/hook/userRow';
import PageContentProvider from './global/hook/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContentProvider>
      <PalavrasProvider>
        <UserRowProvider>
          <PalavrasProvider>
            <LettersProvider>
              <SelectedCordenatesProvider>
                <SelectedWordProvider>
                  <App />
                </SelectedWordProvider>
              </SelectedCordenatesProvider>
            </LettersProvider>
          </PalavrasProvider>
        </UserRowProvider>
      </PalavrasProvider>
    </PageContentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
