export const Header = () => {

    const cardData = [
        {
            image: 'https://walkr-bucket.s3.amazonaws.com/Logo+WAdvisor+Branca.svg',
            icon: 'https://walkr-bucket.s3.amazonaws.com/ChartIcon+(1).svg',
            text: 'Crie seu ID de Especialista grátis e compartilhe com os seus clientes.',
        },
        {
            image: 'https://walkr-bucket.s3.amazonaws.com/Logo+WalkrBank+Branca.svg',
            icon: 'https://walkr-bucket.s3.amazonaws.com/WalletIcon+(1).svg',
            text: 'Acesse as vantagens do Banco feito para os Especialistas do Mercado Financeiro.',
        },
        {
            image: 'https://walkr-bucket.s3.amazonaws.com/Logo+WalkrApp+Branca.svg',
            icon: 'https://walkr-bucket.s3.amazonaws.com/HashtagIcon+(1).svg',
            text: 'Tenha em mãos o projeto de vida financeiro dos seus clientes.',
        }
    ]


    return (
        <div className="background">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex flex-column">
                            <p className="ff-bold fs-2 text-white" style={{ marginTop: window.screen.width > 767 ? 10 : 100 }}>
                                Garanta seu ID de Especialista e seja ÚNICO no mercado financeiro!
                            </p>
                            <p className="ff-bold fs-6 text-secondary">
                                MAIOR ECOSSISTEMA PARA ESPECIALISTAS DO PAÍS
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="img-fluid pt-md-4" src="https://advisor-walkr-bucket.s3.amazonaws.com/CircleWalkr.svg" alt="Circle Walkr" style={{ maxWidth: '80%' }} />
                    </div>
                </div>

                <div className="text-center pt-3">
                    <p className="ff-regular text-white fs-6">
                        A TECNOLOGIA QUE TRANSFORMA A SUA RELAÇÃO COM O CLIENTE!
                    </p>
                </div>

                <div className="row">
                    {cardData.map((item, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className={`${index === 0 ? 'p-3' : 'border p-3'}`} style={{ borderRadius: '20px', height: '100%', background: index === 0 ? 'linear-gradient(180deg,#29BCBA, #1C5585 96.35%)' : 'transparent' }}>
                                <div className="d-flex flex-column h-100">
                                    <div className="text-center">
                                        <img src={item.image} alt="" className="img-fluid" style={{ height: '40px', objectFit: 'contain' }} />
                                    </div>
                                    <div className="pt-3">
                                        <img src={item.icon} alt="" className="img-fluid" style={{ height: '40px', objectFit: 'contain' }} />
                                        <p className="text-white ff-bold fs-6 pt-2">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    )
}
