import iconImage from '../assets/buquet2.png'
export default function Divider(){
    return(
        <div id='whoami' className="custom_box-clear row text-center align-items-center">
            <img src={iconImage} className='m-3 w-25 col-6 overflow-visible' alt='Flores coloridas'></img>
            <h2 className="col custom-fancyTipo h1 text-start">Quem Somos</h2>
        </div>
    )
}