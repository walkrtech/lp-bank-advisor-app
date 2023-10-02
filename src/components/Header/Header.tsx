export const Header = () => {
    return (
        <div className="background pt-5">
            <div className="container pt-md-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mt-5">
                        <div className="d-flex flex-column">
                            <p className="ff-bold fs-3" style={{ color: '#FFF' }}>Garanta seu ID de Especialista e seja ÚNICO{'\n'}no mercado financeiro!</p>
                            <p className="ff-bold fs-6" style={{ color: '#29BCBA' }}>MAIOR ECOSSISTEMA PARA ESPECIALISTAS DO PAÍS</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="img-fluid" src="https://advisor-walkr-bucket.s3.amazonaws.com/CircleWalkr.svg" alt="Circle Walkr" />
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p className="ff-regular" style={{ color: '#FFF', fontSize: 20 }}>A TECNOLOGIA QUE TRANSFORMA A SUA RELAÇÃO COM O CLIENTE!</p>
                </div>

                <div className="card-group d-md-flex pb-5">
                    <div className="card p-4" style={{ borderRadius: '24px', backgroundColor: '#29BCBA' }}>
                        <img src="https://walkr-bucket.s3.amazonaws.com/Logo+WAdvisor+Branca.svg" width={172} height={34} className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column ">
                            <img className="" width={50} height={50} src="https://walkr-bucket.s3.amazonaws.com/ChartIcon+(1).svg" alt="" />
                            <p className="card-text ff-semiBold text-white">Crie seu ID de Especialista grátis e compartilhe com os seus clientes.</p>
                        </div>
                    </div>
                    <div className="card p-4" style={{ borderRadius: '24px', backgroundColor: 'transparent' }}>
                        <img src="https://walkr-bucket.s3.amazonaws.com/Logo+WalkrBank+Branca.svg" width={150} height={60} className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column ">
                            <img width={50} height={50} src="https://walkr-bucket.s3.amazonaws.com/WalletIcon+(1).svg" alt="" />
                            <p className="card-text ff-semiBold text-white">Acesse as vantagens do Banco feito para os Especialistas do Mercado Financeiro.</p>
                        </div>
                    </div>
                    <div className="card p-4" style={{ borderRadius: '24px', backgroundColor: 'transparent' }}>
                        <img src="https://walkr-bucket.s3.amazonaws.com/Logo+WalkrApp+Branca.svg" width={172} height={34} className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column ">
                            <img width={50} height={50} src="https://walkr-bucket.s3.amazonaws.com/HashtagIcon+(1).svg" alt="" />
                            <p className="card-text ff-semiBold text-white">Tenha em mãos o projeto de vida financeiro dos seus clientes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
