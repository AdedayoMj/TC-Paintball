import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './components/store/reducer/rootReducer'
//import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {getFirestore,reduxFirestore} from 'redux-firestore';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux'

import {createFirestoreInstance } from 'redux-firestore';
import {ReactReduxFirebaseProvider } from 'react-redux-firebase';
import FBConfig from './components/config/FBConfig'
import firebase from 'firebase/app'



const rrReact = { 
    userProfile: 'users',
useFirestoreForProfile: true,
attachAuthIsReady: true, }
const store =createStore(
    rootReducer, 
    compose(applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
reduxFirestore(FBConfig),

)
);
  


const rrfProps = {
    firebase,
       config: rrReact,
       dispatch: store.dispatch,
       createFirestoreInstance,   
     }

// store.firebaseAuthIsReady.then(()=>{
// })

    ReactDOM.render(
        <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
         <Router>
             <App />
         </Router>
         </ReactReduxFirebaseProvider>
         </Provider>,
          document.getElementById('root'));
     
     // If you want your app to work offline and load faster, you can change
     // unregister() to register() below. Note this comes with some pitfalls.
     // Learn more about service workers: https://bit.ly/CRA-PWA
     serviceWorker.unregister();
     
    

