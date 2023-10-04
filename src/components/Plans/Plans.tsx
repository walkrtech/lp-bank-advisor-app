export const Plans = () => {
    return (
        <div className="background-white pt-5 pb-5">
            <div className="container">
                <p className="ff-regular text-secondary text-start">PLANOS</p>
                <p className="ff-bold text-primary fs-3" style={{ letterSpacing: '-2%', lineHeight: '130%' }}>Escolha o plano certo<br />para seu crescimento</p>
                <p className="ff-regular text-gray fs-6" style={{ fontSize: 18 }}>Comece com o plano grátis e explore nosso ecossistema por tempo ilimitado</p>

                <div className="row">
                    <div className="col-md-4 col-12 mb-4">
                        <div className="container free-card p-4">
                            <img className="img-fluid" src="https://walkr-bucket.s3.amazonaws.com/freeIcon.svg" alt="" />
                            <p className="ff-medium text-primary fs-3">Free</p>
                            <p className="ff-regular text-gray fs-6">Crie seu cadastro sem custo e conheça o Ecossistema</p>

                            <div className="pt-3 pb-5">
                                <p className="ff-bold text-primary fs-1">Free</p>
                            </div>

                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-gray fs-6">ID de Especialista</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-gray fs-6">Dados Financeiros</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-gray fs-6">Relacionamento</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 mb-4">
                        <div className="container premium-card p-4">
                            <img className="img-fluid" src="https://walkr-bucket.s3.amazonaws.com/premiumIcon.svg" alt="" />
                            <p className="ff-medium text-white">Premium</p>
                            <p className="ff-regular text-white">Todos os benefícios FREE mais as vantagens exclusivas</p>

                            <p className="ff-bold text-secondary">R$ 299 <span className="ff-bold text-secondary">/mensal</span></p>

                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">40% de comissão</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">Relatório GOLD</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">Banco tarifa ZERO</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">ID 25% DESCONTO</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">Tele Medicina</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 mb-4">
                        <div className="container advisor-card p-4">
                            <img className="img-fluid" src="https://advisor-walkr-bucket.s3.amazonaws.com/Logo+WalkrAdvisor.svg" alt="" />
                            <p className="ff-bold">Insira os dados do seu cadastro</p>

                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">40% de comissão</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">Relatório GOLD</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">Banco tarifa ZERO</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">ID 25% DESCONTO</p>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="fa-solid fa-check" style={{ color: '#169BC0' }}></i>
                                <p className="ff-semiBold text-white">Tele Medicina</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
