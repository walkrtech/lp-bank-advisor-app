import { Navbar } from "../Navbar/Navbar"

export const Header = () => {
    return (
        <div className="background">
            <Navbar />
            <div className="d-flex container mt-5">
                <div className="d-column mt-5">
                    <p className="fw-bold" style={{ color: '#FFF', fontSize: 30 }}>Garanta seu ID de Especiaslita e seja ÚNICO{'\n'}no mercado financeiro!</p>
                    <p className="fw-bold" style={{ color: '#29BCBA', fontSize: 16 }}>MAIOR ECOSSISTEMA PARA ESPECIALISTAS DO PAÍS</p>
                </div>
                <img width={300} height={300} src="https://advisor-walkr-bucket.s3.amazonaws.com/CircleWalkr.svg" alt="Circle Walkr" />
            </div>

            <div className="d-flex text-center mt-5">
                <p style={{ color: '#FFF', fontSize: 20 }}>A TECNOLOGIA QUE TRANSFORMA A SUA RELAÇÃO COM O CLIENTE!</p>
            </div>

            <div className="d-flex justify-content-around pb-5">
                <div className="card" style={{ width: '380px', height: '230px' }}>
                    <div className="card-body d-column align-items-center">
                        <div className="logo text-center" style={{ flex: 1 }}>
                            <img width={172} height={34} src="https://advisor-walkr-bucket.s3.amazonaws.com/Logo+WalkrAdvisor.svg" alt="Logo WalkrAdvisor" />
                        </div>
                        <div className="icon" style={{ flex: 1 }}>
                            <img width={50} height={50} src="https://advisor-walkr-bucket.s3.amazonaws.com/ChartIcon.svg" alt="ChartIcon" />
                        </div>
                        <div className="text" style={{ flex: 3 }}>
                            <p className="text-white" style={{ fontSize: '16px', textAlign: 'left' }}>Crie seu ID de Especialista grátis e compartilhe com os seus clientes.</p>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ width: '380px', height: '230px' }}>
                    <div className="card-body d-column align-items-center">
                        <div className="logo text-center" style={{ flex: 1 }}>
                            <img width={172} height={34} src="https://advisor-walkr-bucket.s3.amazonaws.com/WalkrBankBranco.svg" alt="Logo WalkrBank" />
                        </div>
                        <div className="icon" style={{ flex: 1 }}>
                            <img width={50} height={50} src="https://advisor-walkr-bucket.s3.amazonaws.com/WalletIcon.svg" alt="WalletIcon" />
                        </div>
                        <div className="text" style={{ flex: 3 }}>
                            <p className="text-white" style={{ fontSize: '16px', textAlign: 'left' }}>Acesse as vantagens do Banco feito para os Especialistas do Mercado Financeiro.</p>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ width: '380px', height: '230px' }}>
                    <div className="card-body d-column align-items-center">
                        <div className="logo text-center" style={{ flex: 1 }}>
                            <img width={172} height={34} src="https://advisor-walkr-bucket.s3.amazonaws.com/Logo+WalkrAdvisor.svg" alt="Logo WalkrAdvisor" />
                        </div>
                        <div className="icon" style={{ flex: 1 }}>
                            <img width={50} height={50} src="https://advisor-walkr-bucket.s3.amazonaws.com/HashtagIcon.svg" alt="HashtagIcon" />
                        </div>
                        <div className="text" style={{ flex: 3 }}>
                            <p className="text-white" style={{ fontSize: '16px', textAlign: 'left' }}>Tenha em mãos o projeto de vida financeiro dos seus clientes.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}