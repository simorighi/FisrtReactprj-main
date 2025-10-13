import { useParams, Link } from "react-router-dom";
import FileList from "../components/fileList";

function subjectPage() {
  const { name } = useParams();

  return (
    <div className="container pt-5">
      <div className="row align-content-center">
        <div className="col-6">
          <h1 className="mb-3 mt-5">📖 {name?.toUpperCase()}</h1>
          <p className="text-muted mb-4">
            Qui potrai caricare e visualizzare i tuoi file di{" "}
            <strong>{name}</strong>.
          </p>
        </div>
        <div className="col-6 text-end align-content-center">
          <Link to="/" className="btn btn-dark">
            ← Torna alla Home
          </Link>
        </div>
      </div>

      {name && <FileList subjectName={name} />}
    </div>
  );
}

export default subjectPage;
