import React from 'react';
import './style.css'
export default function Inscrption() {
    return (
        <div className='container min-vh-50 d-flex justify-content-center align-items-center mt-4  conteneur'>
            <div className=''>
                <form action='' method='post' className='align-items-center'>
                    <div className='mb-3'>
                        <input type='text' className='form-control rounded-0' placeholder="Identifiant" id='identifiant' />
                    </div>
                    <div className='mb-3'>
                        <input type='email' className='form-control rounded-0' placeholder="E-mail" id='email' />
                    </div>
                    <div className='mb-3 text-center'>
                        <input type='button' className='btn btn-light rounded-pill' value='Envoyer' />
                    </div>
                    <div className='mb-3 text-center'>
                        <a href='#' className='text-white'>Connexion</a>
                    </div>
                </form>
            </div>
        </div>
    )
}