import { useState } from "react"


export const Footer = () => {

    const questionsData = [
        {
            question: 'O que é o Walkr? Como ele vai ajudar no meu dia a dia e na realização dos meus sonhos?',
            answer: 'Walkr é o primeiro e único APP capaz de reunir e traduzir todos os seus objetivos financeiros e os seus maiores sonhos em um único número. Ele irá, no seu dia a dia, ajudar você a encontrar as respostas certas para quatro perguntas fundamentais: quanto custa a realização dos seus sonhos? Quanto é necessário poupar? Qual o rendimento ideal do patrimônio e das sobras? Com quantos anos será possível conseguir a independência financeira? Isso lhe permitirá visualizar o seu momento atual, transformando você em protagonista da sua jornada.'
        },
        {
            question: 'O Walkr é um gerenciador de orçamento ou um gerenciador de investimentos?',
            answer: 'Walkr agrega as duas funcionalidades e vai muito mais além, pois permite que, em um único lugar, você determine a rentabilidade ideal da sua carteira de investimentos, conheça seu perfil de investidor e visualize, em tempo real, o passo a passo da sua jornada rumo à conquista do que você sempre quis.'
        },
        {
            question: 'Por que é importante eu saber qual o meu número para realizar meu projeto de vida?',
            answer: 'Saber o seu número permite a você entender em que momento da sua jornada financeira você está e quais as possibilidades e alternativas para corrigir a rota ou seguir no caminho correto até atingir seus objetivos. Esse conhecimento significa empoderamento para o seu projeto de vida.'
        },
        {
            question: 'Qual a idade ideal para eu encontrar o número que representará minha independência financeira?',
            answer: 'Qualquer idade permite o início da sua caminhada rumo à realização dos seus maiores sonhos. Nunca é cedo demais para começar ou tarde demais para dar a largada. Com Walkr, aliado a foco e disciplina, você irá atingir a sua independência financeira e conquistar suas metas de vida, em qualquer idade.'
        },
        {
            question: 'O Walkr é um app gratuito?',
            answer: 'O Walkr é um app em constante evolução, no momento é 100% gratuito e sem anúncios. Você não precisa pagar nenhuma assinatura e nem cadastrar cartão de crédito para usar.'
        },
        {
            question: 'Meus dados estão protegidos?',
            answer: 'Sim. No Walkr, todas as informações são acessadas somente com sua autorização e apenas no formato de visualização, sem a possibilidade de qualquer movimentação em suas contas. Ao conectar suas contas e cartões, os seus dados são usados apenas para analisar as suas movimentações e acompanhar o desenvolvimento das suas metas e objetivos.'
        },
    ]

    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>()

    return (
        <div id="FAQ" className="background-footer p-4">
            <div className="">
                <div className="row flex-md-row flex-column">

                    <div className="col-md-6 col-12 mb-4">
                        <div className="blue-risked p-5">
                            <p className="ff-semiBold text-secondary text-center">BAIXE AGORA</p>
                            <p className="ff-bold text-white text-center fs-2">WalkrApp</p>
                            <div className="d-md-flex d-flex flex-md-row flex-column gap-4 justify-content-center align-items-center">
                                <img src="https://walkr-bucket.s3.amazonaws.com/btn-store-apple.svg" alt="Apple" />
                                <img src="https://walkr-bucket.s3.amazonaws.com/btn-store-android+(2).svg" alt="Android" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="blue-risked p-5">
                            <p className="ff-semiBold text-secondary text-center">BAIXE AGORA</p>
                            <p className="ff-bold text-white text-center fs-2">Walkr Bank</p>
                            <div className="d-md-flex d-flex flex-md-row flex-column gap-4 justify-content-center align-items-center">
                                <img src="https://walkr-bucket.s3.amazonaws.com/btn-store-apple.svg" alt="Apple" />
                                <img src="https://walkr-bucket.s3.amazonaws.com/btn-store-android+(2).svg" alt="Android" />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="d-md-flex mt-2 justify-content-around pt-3">
                    <div>
                        <p className="ff-bold text-white fs-3">Ficou com alguma dúvida?</p>
                        <div className="d-flex gap-2">
                            <img src="https://walkr-bucket.s3.amazonaws.com/whatsappIcon.svg" alt="" />
                            <p className="ff-regular text-white mt-4">Entre em contato</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-md-none">
                            {questionsData.map((item, index) => (
                                <>
                                    <div onClick={() => { setShowAnswer(!showAnswer); setSelectedIndex(index) }} key={index}
                                        className="pointer d-flex align-items-center gap-3 mt-2">
                                        <p className="text-white fs-3">+</p>
                                        <p className="text-white ff-semiBold">{item.question}</p>
                                    </div>
                                    {showAnswer && index == selectedIndex &&
                                        <div className="">
                                            <p className="text-white ff-regular "> {item.answer}</p>
                                        </div>
                                    }
                                </>
                            ))}
                        </div>
                        <div className="d-none d-md-block">
                            {questionsData.map((item, index) => (
                                <>
                                    <div onClick={() => { setShowAnswer(!showAnswer); setSelectedIndex(index) }} key={index}
                                        className="pointer d-flex gap-3 align-items-center">
                                        <p className="text-white fs-3">+</p>
                                        <p className="text-white ff-semiBold">{item.question}</p>
                                    </div>
                                    {showAnswer && index == selectedIndex &&
                                        <div className="">
                                            <p className="text-white ff-regular "> {item.answer}</p>
                                        </div>
                                    }
                                </>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="" style={{ height: 3, backgroundColor: '#033C59' }}></div>



                <div className="d-flex justify-content-between  pt-5">
                    <p className="ff-regular text-white text-start">© 2023 – 41.339.465/0001-59 – Walkr Tecnologia Ltda.</p>
                    <div className="d-flex gap-3">
                        <i className="fa-brands fa-facebook text-white"></i>
                        <i className="fa-brands fa-linkedin text-white"></i>
                        <i className="fa-brands fa-instagram text-white"></i>
                        <i className="fa-brands fa-youtube text-white"></i>
                    </div>
                </div>

            </div>
        </div >
    )
}