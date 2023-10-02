export const Navbar = () => {
    return (
        <div className="d-flex">
            <div className="logo justify-content-start bg-danger">
                <img src="https://advisor-walkr-bucket.s3.amazonaws.com/WalkrLogoLP.svg" width={58} height={24} alt="Logo Walkr" />
            </div>
            <div className="itens d-flex">
                <p className="text-white pt-3" style={{ fontSize: 14 }}>Home</p>
                <p className="text-white pt-3" style={{ fontSize: 14 }}>Walkr Bank</p>
                <p className="text-white pt-3" style={{ fontSize: 14 }}>WalkrApp</p>
                <p className="text-white pt-3" style={{ fontSize: 14 }}>Planos</p>
                <p className="text-white pt-3" style={{ fontSize: 14 }}>FAQ's</p>
            </div>
            <div className="buttons d-flex pt-3 pe-5">
                <button className="btn btn-transparent text-white" style={{ fontSize: 14 }}>Cadastrar-se</button>
                <button type="button" className="btn btn-light">Login</button>
            </div>
        </div>
    )
}