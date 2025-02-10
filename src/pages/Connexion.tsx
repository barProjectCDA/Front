import '../assets/styles/Home.css'

import cactuslogo from '../assets/svg/cactus.svg'

import Footer from '../components/Footer'


function Connexion() {
    
    return (
        <>
            <div className='Connexion'>
                <div className='h2CO'>
                    <p>Connexion</p>
                </div>

                <div className='inputs'>
                    <input placeholder='Identifiant:' type="text" />
                    <input placeholder='Mot de passe:' type="password" />
                </div>

                <div className='button'>
                    <button><a href="#">Valider</a></button>
                </div>

                <div className='besoinAide'>
                    <p>Besoin d'aide ?</p>
                    <a href="#">Contacter le support</a>
                </div>
                <div className='logoCactus'>
                    <img src={cactuslogo} alt="logo cactus" />
                    <p>By myEasyApp</p>
                </div>
            </div>

            <Footer/>
        </>
    )
    }

export default Connexion