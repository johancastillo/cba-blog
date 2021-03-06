

const  Navigation  = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        
    <a class="navbar-brand" href="#">
      <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
    </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                    Inicio
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/nosotros">
                    Nosotros
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/blogueros">
                    Blogueros
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/login">
                    Iniciar sesión
                </a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="/register">
                    ¡Regístrate!
                </a>
            </li>

        </ul>


        </div>
    </div>
    </nav>

    )
};

export default Navigation;