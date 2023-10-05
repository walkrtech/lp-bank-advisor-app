import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import { isValidCPF } from '../../utils/isValidCPF.util';
import requestService from '../../services/request.service';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { extractErrorData } from '../../hooks/response-api/extract-error-data';
import { isValidEmail } from '../../utils/isValidEmail.util';


type RequestInterface = {
    cpf: string
    name: string
    email: string
    phone: string
}

export const Plans = () => {

    const { register, handleSubmit } = useForm<RequestInterface>();
    const [terms, setTerms] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')


    const onInvalid = (errors: any) => console.log(errors)

    const onSubmit: SubmitHandler<RequestInterface> = (async (data: RequestInterface) => {
        if (terms) {
            await requestService.register({
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                phone: data.phone
            }).then(async () => {
                await requestService.acceptRequest({
                    name: data.name,
                    email: data.email,
                    cpf: data.cpf,
                    phone: data.phone,
                    percent: 0
                }).then(() => {
                    toast.success('Você receberá uma senha temporária por email!')
                }).catch((err: any) => {
                    toast.warning(extractErrorData(err));
                })
            }).catch((err: any) => {
                toast.warning(extractErrorData(err));
            })
        } else {
            toast.error('Você deve ler e estar de acordo com os Termos de Sigilo!')
        }
    });

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value.toLowerCase().replace(/\s/g, ''));
    };


    return (
        <div id="Planos" className="background-white pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p className="ff-bold text-secondary text-start">PLANOS</p>
                        <p className="ff-bold text-primary fs-3" style={{ letterSpacing: '-2%', lineHeight: '130%' }}>Escolha o plano certo<br />para seu crescimento</p>
                        <p className="ff-regular text-gray fs-6" style={{ fontSize: 18 }}>Comece com o plano grátis e explore nosso ecossistema por tempo ilimitado</p>

                        <div className="row">
                            <div className="col-md-6 col-12 mb-4">
                                <div className="free-card p-5">
                                    <img className="img-fluid" src="https://walkr-bucket.s3.amazonaws.com/freeIcon.svg" alt="" />
                                    <p className="ff-medium text-primary fs-3 pt-3">Free</p>
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
                                    <div className="d-flex gap-3">
                                        <i className="fa-solid fa-check text-white"></i>
                                        <p className="ff-semiBold text-white">ID 25% DESCONTO</p>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <i className="fa-solid fa-check text-white"></i>
                                        <p className="ff-semiBold text-white">Tele Medicina</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12 mb-4">
                                <div className="premium-card p-5">
                                    <img className="img-fluid" src="https://walkr-bucket.s3.amazonaws.com/premiumIcon.svg" alt="" />
                                    <p className="ff-medium text-white fs-3 pt-3">Premium</p>
                                    <p className="ff-regular text-white">Todos os benefícios FREE mais as vantagens exclusivas</p>

                                    <div className="pt-3 pb-5">
                                        <p className="ff-bold text-secondary fs-1">R$ 299 <span className="ff-bold text-secondary fs-6">/mensal</span></p>
                                    </div>

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
                    <div className="col-md-4 col-12 mb-4">
                        <div className="advisor-card p-4">
                            <img className="img-fluid" src="https://advisor-walkr-bucket.s3.amazonaws.com/Logo+WalkrAdvisor.svg" alt="" />
                            <p className="ff-bold text-center pt-2">Insira os dados do seu cadastro</p>

                            <div className="bg-white p-4 rounded">
                                <form className="" onSubmit={handleSubmit(onSubmit, onInvalid)}>
                                    <div className="d-flex flex-column">

                                        <label htmlFor="cpf" className="ff-semiBold text-gray mt-3">CPF*</label>
                                        <InputMask
                                            {...register("cpf", { validate: (value: string) => isValidCPF(value) || "CPF inválido" })}
                                            id="cpf"
                                            name="cpf"
                                            mask="999.999.999-99"
                                            type="text"
                                            className="w-full p-1 border border-gray-300 rounded mt-1"
                                            required={true}
                                        />

                                        <label htmlFor="name" className="ff-semiBold text-gray mt-3">Nome*</label>
                                        <input {...register("name", { required: true })} id="name" name="name" type="text" className="input border rounded mt-1 p-1" />

                                        <label htmlFor="email" className="ff-semiBold text-gray mt-3">Email*</label>
                                        <input {...register("email", { required: true, validate: (value: string) => isValidEmail(value) || "E-mail inválido" })}
                                            id="email" name="email" value={email} onChange={handleEmailChange} type="text"
                                            className="input border rounded mt-1 p-1" />

                                        <label htmlFor="email" className="ff-semiBold text-gray mt-3">Confirmar Email*</label>
                                        <input {...register("email", { required: true, validate: (value: string) => isValidEmail(value) || "E-mail inválido" })}
                                            id="email" name="email" value={email} onChange={handleEmailChange} type="text"
                                            className="input border rounded mt-1 p-1" />

                                        <label htmlFor="phone" className="ff-semiBold text-gray mt-3">Celular com DDD*</label>
                                        <InputMask
                                            {...register("phone")}
                                            id="phone"
                                            name="phone"
                                            mask="(99) 99999-9999"
                                            type="text" 
                                            className="w-full p-1 border border-gray-300 rounded mt-1"
                                            required={true}
                                        />

                                        <div className="d-flex mt-4">
                                            <input checked={terms} onChange={() => setTerms(!terms)} type="checkbox" id="terms" name="terms" className="h-6 w-6 text-blue-300 rounded cursor-pointer align-self-center " />
                                            <p className="ff-semiBold text-gray ps-3">Li e estou de acordo com os <u style={{ color: '#2070e5' }}>Termos de Sigilo</u> e <u style={{ color: '#2070e5' }}>Contratos de Comissão</u> do sistema Walkr Advisor</p>
                                        </div>
                                        <div className="d-flex flex-column mt-2 gap-3">
                                            <button type='submit' className="btn bg-primary text-white ff-semiBold">Registrar Solicitação</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
