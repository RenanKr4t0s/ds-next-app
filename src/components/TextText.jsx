import iconImage from '../assets/dsLogo.jpg'

export default function TextText(){
    return(
        <div className="custom_box-clear">
            <div className="container primary">
                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-12 m-3'>
                        <div className='custom_simple-box rounded'>
                            <h3 className='mb-5 mx-3'>Da nossa família para sua</h3>
                            <p className='h5  mx-3 custom-text'>
                            Bem-vindos à nossa floricultura! Somos uma empresa familiar tradicional, fundada e gerida com amor pela dona Dalva e sua querida família.<br/> Há mais de três décadas, temos o prazer de trazer flores eternas, presentes encantadores e lembranças especiais para os nossos queridos clientes da região do Taboão.
                            </p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img className='img-fluid rounded mt-3 w-50' src={iconImage} alt='Flores'></img>
                        </div>
                    </div>
                    <div className='col-lg-5 col-12 custom_simple-box rounded m-3'>
                        <p className='h5 mx-3 custom-text'>
                        Cada flor e cada presente em nossa loja é escolhido com carinho e dedicação, refletindo a paixão e o cuidado que nossa família tem pelo que faz. Desde o início, nosso objetivo sempre foi oferecer produtos que tragam alegria e beleza aos momentos mais importantes da vida de nossos clientes.
                        Aqui, você não encontra apenas flores, mas também um pedacinho da nossa história e do nosso coração. Venha nos visitar e deixe-nos fazer parte dos seus momentos especiais, transformando cada ocasião em uma lembrança inesquecível.
                        Com carinho,
                        Dona Dalva e Família
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}