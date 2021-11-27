import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducer from './reducer';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Storage  from 'redux-persist/lib/storage';
import localStorage from 'redux-persist/es/storage';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  stateReconciler: autoMergeLevel2 
 };
 const pReducer = persistReducer(persistConfig, allReducer);
 const store = createStore(pReducer);
 const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate loading={<App/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
