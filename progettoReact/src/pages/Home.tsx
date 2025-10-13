import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './Home.css'

const subjects = ["Reti", "ProgramazioneWeb", "Programmazione1", "Inglese"];

function Home() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12 justify-content-center">
          <h1 className="mt-5">APPUNTI</h1>
          <p>
            paragraafono Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>

      <div className="row">
        {subjects.map((subject) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={subject}>
            <Link
              to={`/subject/${subject.toLowerCase()}`}
              className="text-decoration-none"
            >

              <div className="row align-items-center mt-3 ">
                <div className="col  text-center align-content-center">
                  <button className="buttHome p-4">{subject}</button>
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
