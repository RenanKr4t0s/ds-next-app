import image from '../assets/DalvaSouza.png'
import detail from '../assets/fineLineFlowers.png'

export default function Profile(){
    return(
        <div id='profile' className="container primary my-5 px-5 pb-5">
            <div className='row justify-content-center'>
            <div className='col-lg-6 col-12 custom_simple-box-clear rounded'>
                <img className='my-5 img-fluid rounded ' src={image} alt='Logo da DS'></img>
            </div>
                <div className='col-lg-6 col-12 ps-4'>
                    <h3 className='h1 mb-5'>Dalva Souza Presentes</h3>
                    <p className='h5'>
                    Dalva, nascida em um lugar pequeno, no interior da Bahia, sempre amou as flores. Suas favoritas? As orquídeas. <br/>
                    Em meio a roça, rodeada por natureza, estudou, ensinou, costurou, dançou e ajudou sua família. <br/>
                    Acabou se apaixonando por seu melhor amigo de infância e, com ele, teve três filhos. Mas não é como se tudo estivesse fácil, por isso, decidiram ir para São Paulo, alimentar o sonho de crescer.<br/>
                    E deu certo!<br/>
                    Começou vendendo na casa das pessoas. Fazia “reuniões” com a vizinhança para vender seus produtos, e não escondia o amor pelas flores, vasos e decorações. <br/>
                    </p>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <p className='h5'>
                            Fez amigos, parceiros, clientes e fornecedores. <br/>
                            Hoje, vive seu sonho: uma família feliz, criada em meio às flores, pois construiu do zero, com todo esforço, a DS Presentes, o lugar que a acolhe todos os dias para dividir com o mundo sua paixão.
                            </p>
                            <p className='my-5'>Texto: Taynara Ramos</p>
                        </div>
                        <img src={detail} className='col-md-6 col-12' alt='Flores em fineline'></img>
                    </div>



                </div>
            </div>
        </div>
    )
}