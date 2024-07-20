import iconImage from '../assets/buquet2.png'
export default function Divider(){
    return(
        <div className="custom_bg-terciaria custom_100vw shadow-lg row text-center align-items-center">
            <img src={iconImage} className='m-3 w-25 col-6 overflow-visible' alt='Flores coloridas'></img>
            <h2 className="col custom-fancyTipo h1">Quando as palavras fogem, as flores falam.</h2>
        </div>
    )
}