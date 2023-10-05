export const Mockups = () => {

    const arrData = [
        {
            icon: 'https://walkr-bucket.s3.amazonaws.com/MoneyIcon+(1).svg',
            title: 'Quando você quer parar de trabalhar?',
            subtitle: 'Quantos anos você tem, quando quer parar de trabalhar, qual renda quer ter na aposentadoria e qual sua expectativa de vida.',
        },
        {
            icon: 'https://walkr-bucket.s3.amazonaws.com/userIcon.svg',
            title: 'Criando objetivos',
            subtitle: 'Quer comprar um apartamento? Conhecendo seus sonhos e metas vamos te ajudar a realizar.',
        },
        {
            icon: 'https://walkr-bucket.s3.amazonaws.com/barcodeIcon.svg',
            title: 'Seu projeto de vida',
            subtitle: 'Vamos te ajudar a criar seu projeto de vida, que vai guiar o caminho até todos os seus sonhos.',
        },
        {
            icon: 'https://walkr-bucket.s3.amazonaws.com/listIcon.svg',
            title: 'Descubra do que é feita sua vida financeira',
            subtitle: 'Mostramos o que você precisa para bancar sua independência financeira e, também, atingir seus objetivos até lá.',
        },
        {
            icon: 'https://walkr-bucket.s3.amazonaws.com/businessIcon.svg',
            title: 'Caminho certo',
            subtitle: 'Com base em suas informações e em seus objetivos, vamos mostrar se você está no caminho certo.',
        },
        {
            icon: 'https://walkr-bucket.s3.amazonaws.com/pieChartIcon.svg',
            title: 'Comece a caminhar!',
            subtitle: 'Descobrindo quanto precisa poupar chegou a hora de colocar em prática seu projeto de vida.',
        },
    ]

    return (
        <div id="WalkrApp" className="background-mockup pb-5">
            <div className="container pt-5">
                <p className="ff-bold text-secondary text-start">SEU PROJETO FINANCEIRO DE VIDA</p>

                {window.screen.width > 767 ?
                    <p className="ff-bold text-white text-start fs-2">Entenda como vamos te ajudar a<br />realizar os sonhos e objetivos dos seus<br />clientes com o WalkrApp</p>
                    :
                    <p className="ff-bold text-white text-start fs-2 mt-5">Entenda como vamos te ajudar a realizar os sonhos e objetivos dos seus clientes com o WalkrApp</p>
                }



                <div className="mt-5"></div>

                <div className="tab bg-white position-absolute d-none d-md-flex" style={{ height: 200, width: 2.5 }}></div>


                <div className="row container">
                    <div className="col-md-4 col-12">
                        {arrData.slice(0, 3).map((item, index) => (
                            <div key={index} className="d-flex gap-2 align-items-start">
                                <img className="img-fluid mt-1" src={item.icon} alt="Ícone" />
                                <div className="d-flex flex-column">
                                    <p className="text-white ff-bold fs-4">{item.title}</p>
                                    <p className="fs-6 ff-regular " style={{ color: '#A5A5A5' }}>{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-4 col-12 p-3">
                        <img className="img-fluid" src="https://walkr-bucket.s3.amazonaws.com/mockups-iphone.svg" alt="Imagem do meio" />
                    </div>

                    <div className="col-md-4 col-12 mt-3">
                        {arrData.slice(3).map((item, index) => (
                            <div key={index} className="d-flex gap-2 align-items-start">
                                <img className="img-fluid" src={item.icon} alt="Ícone" />
                                <div className="d-flex flex-column">
                                    <p className="text-white ff-bold fs-4">{item.title}</p>
                                    <p className="fs-6 ff-regular" style={{ color: '#A5A5A5' }}>{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
