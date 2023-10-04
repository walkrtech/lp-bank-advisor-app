

export const Carrer = () => {
    return (
        <div id="walkrBank" className="background-white pb-5 pt-5">
            <div className="container">


                {window.screen.width < 767 ?
                    <>
                        <p className="ff-bold text-primary text-center fs-1" >Transforme sua CARREIRA<br />em apenas 4 passos</p>
                        <div className="d-flex flex-column">
                            <p className="ff-regular fs-6">Você se cadastra <strong>sem custos</strong>, gera seu <strong>ID de Especialista EXCLUSIVO</strong> para compartilhar com prospects e clientes.</p>
                            <img className="img-fluid mt-5" src="https://walkr-bucket.s3.amazonaws.com/FirstPathComplete.svg" alt="" />
                            <p className="ff-regular fs-6 mt-5">Você poderá ter também o <strong>Walkr Bank</strong> e aderir ao plano <strong> Advisor Premium</strong> obtendo benefícios únicos.</p>
                            <img className="mt-5" src="https://walkr-bucket.s3.amazonaws.com/SecondPathComplete.svg" alt="" />

                            <div className="justify-content-center d-flex align-items-center pt-5 pb-5">
                                <img src="https://walkr-bucket.s3.amazonaws.com/Logo+WA.svg" width={150} height={150} className="" alt="Walkr Circle" />
                            </div>

                            <p className="ff-regular fs-6">O cliente final <strong>vincula seu ID de Especialista</strong> e você passa a ter acesso aos dados financeiros, bem como, o <strong>relatório GOLD em PDF</strong> com todo o projeto de vida do seu cliente, oferecendo <strong>soluções precisas e individualizadas.</strong></p>
                            <img className="mt-5" src="https://walkr-bucket.s3.amazonaws.com/ThirdPathComplete.svg" alt="" />
                            <p className="ff-regular fs-6 mt-5"> <strong>Indique</strong> para seu cliente o <strong>Relatório GOLD</strong> em PDF dentro do WalkrApp , com um pagamento único e receba <strong>40% de comissão.</strong></p>
                            <img className="" src="https://walkr-bucket.s3.amazonaws.com/FourthPathComplete.svg" alt="" />
                        </div>
                    </>
                    :
                    <>
                        <p className="ff-bold text-primary text-center" style={{ fontSize: 48, letterSpacing: 12 }}>Transforme sua CARREIRA<br />em apenas 4 passos</p>
                        <div className="d-flex justify-content-center">
                            <img src="https://walkr-bucket.s3.amazonaws.com/containerCarrer+(1).svg" width={'95%'} alt="" />
                        </div>
                    </>
                }

            </div>
        </div>

    )
}