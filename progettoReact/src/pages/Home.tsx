import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Home.css";

const subjects = [
  "Reti",
  "Programazione Web",
  "Programmazione 1",
  "Inglese",
  "Ing. Software",
];

function Home() {
  return (
    <div className="container mt-5">
      <div
        className="row text-center"
        style={{ marginBottom: "20%", marginTop: "23%" }}
      >
        <div className="col-12 justify-content-center">
          <h1 className="mt-5 fs-1 text-white">
            <strong className="text-white-50">APPUNTI</strong>
          </h1>
          <p className="text-white fs-5 text-white-50">
            <strong >AF 2025/27 <br /></strong>
            Simone Righi
          </p>
        </div>
      </div>

      <div className="row">
        {subjects.map((subject) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 align-items-center justify-content-center" key={subject}>
            <Link
              to={`/subject/${subject.toLowerCase()}`}
              className="text-decoration-none"
            >

              <div className="row align-items-center mt-3 ">
                <div className="col text-center align-items-center align-content-center">
                  <button className="btn btn-dark w-100 rounded-4 px-4 py-4 spotlighCard"><p className="fs-5 pt-1 text-white-50">{subject}</p></button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
