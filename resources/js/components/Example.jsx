import React from 'react';
import ReactDOM from 'react-dom/client';
import Inscrption from './Inscription/Index';

function Example() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>Bienvenue chez Booking Flex Office</h2></div>
                        <div className="card-body">Je suis une page de test</div>
                        <div className="card-body">Premier test de GIT yes</div>
                        <div className="card-body">Deuxieme test de GIT yes</div>
                        <div className='card-body'>Troiseme test de GIT yes </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Inscrption />
        </React.StrictMode>
    )
}
