import image from '../assets/cerejeira.jpg'

export default function Contacts(){
    return(
        <div id='contacts' className='custom_bg-secundaria custom_100vw shadow-lg'>
            <div className="container my-5 px-5 pb-5">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h1 className='custom_fancy-text'>Redes Sociais</h1>
                        <p><a href="https://www.instagram.com/dspresentes/"
                            className="custom-nav__itens link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Instagram
                        </a></p>
                        <p><a href="https://www.facebook.com/dspresentesloja"
                            className="custom-nav__itens link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Facebook
                        </a></p>
                        <p><a href="https://wa.me//5511983577493?text=Bom%20dia%20!%20Gostaria%20de%20conversar"
                            className="custom-nav__itens link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Whatsapp (11)98357-7493
                        </a></p>
                        <p><a href="tel:+551141732582"
                            className="custom-nav__itens link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Fone (11)4173-2582
                        </a></p>
                        <p><a href="mailto:dspresentes@hotmail.com"
                            className="custom-nav__itens link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            dspresentes@hotmail.com
                        </a></p>
                    </div>
                    <div className="col-md-4 col-12">
                        <h1 className='custom_fancy-text'>Endereço</h1>
                        <p className='h4 my-4 pe-3'>
                            Rua Turquia, 199 <br/>
                            Taboão<br/>
                            São Bernardo do Campo<br/>
                            São Paulo
                        </p>
                        <p className='h4'> CEP.: 09671-000</p>
                    </div>
                    <div className='col-md-1 col-6'>
                    </div>
                    <div className="col-md-3 col-6 row justify-content-end">
                        <img src={image} alt='Flores de Cerejeira' className='w-100 rounded'></img>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}