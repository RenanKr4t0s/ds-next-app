import image from '../assets/reference.jpg'

export default function TextImageSquare(){
    return(
        <div id='rent' className="container primary px-5 pb-5">
            <h2 className="h1 my-5">Aluguel</h2>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-12'>
                    <h3 className='mb-5'>Tudo para decorar sua festa</h3>
                    <p className='h4 lh-base custom_text'>
                    Para quem busca um evento com a decoração intacta 100% do tempo, além do bolo decorativo personalizado, dos arcos, colunas e vasos, as flores permanentes são uma ótima pedida para seus arranjos ou buquês. 
                    Nós trabalhamos com flores delicadas, feitas com tecidos refinados, para montarmos os arranjos perfeitos para você. Nosso objetivo é garantir que a beleza da sua festa não acabe antes da hora.
                    </p>
                </div>
                <div className='col-lg-6 col-12'>
                    <img className='img-fluid rounded shadow-lg' src={image} alt='Logo da DS'></img>
                </div>
            </div>
        </div>
    )
}
