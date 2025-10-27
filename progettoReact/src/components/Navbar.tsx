import { Link } from "react-router-dom";

function Navbar() {

  const subject = ["Reti", "Programmazione Web", "Programmazione 1", "Inglese", "Ing. Software"];
  

  return (
    <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand ms-4">
        Home
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 list-group">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
        </ul>

        {subject.map((subject) => (
          <Link to={`/subject/${subject.toLowerCase()}`} className="text-decoration-none mb-2 navbar-brand " key={subject}>
            <p className="btn w-100 text-white my-1 text-start" >{subject}</p>
          </Link>
        ))}

        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</>
    
  );
}

export default Navbar