import { useParams, Link } from "react-router-dom";
import FileList from "../components/fileList";
import House from "../assets/house.svg"
import Book from "../assets/book.svg"
import "./subjectPage.css"


function subjectPage() {
  const { name } = useParams();

  return (
    <div className="container pt-5">
      <div className="row align-content-center">
        <div className="col-6">
          <h1 className="mb-3 mt-5">
            <img src={Book} alt="libro" className="book " /> <span className="text-white">{name?.toUpperCase()}</span></h1>
          <p className="mb-4 text-white">
            Qui potrai caricare e visualizzare i tuoi file di{" "}
            <strong>{name}</strong>.
          </p>
        </div>
        <div className="col-6 text-end align-content-center">
          <Link to="/" className="btn border-white border-2 align-items-center home">
            <img src={House} alt="svg" className="svg pe-3 "/>
          </Link>
        </div>
      </div>

      <span className="text-white">
        {name && <FileList subjectName={name} />}
      </span>
      
    </div>
  );
}

export default subjectPage;
