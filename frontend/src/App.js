import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Router';
import Header from './components/navbar/Header';

const MyApp = () => {
    return (
        <div className='container'>
            <Header/>
            <RouterProvider router={Routes}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp/>);
