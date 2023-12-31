import React, {createContext} from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import UserStore  from './Store/UserStore'
import BookStore from "./Store/BookStore";


export const Context = createContext(null)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
console.log(process.env.REACT_APP_API_URL)
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        book: new BookStore()
    }}>
        <App />
    </Context.Provider>,
);

