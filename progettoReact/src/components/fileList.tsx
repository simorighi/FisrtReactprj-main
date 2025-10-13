import { useState } from "react";

type FileItem = {
  name: string;
  url: string;
};

type Props = {
  subjectName: string;
};

function FileList({ subjectName }: Props) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const addFile = () => {
    if (!fileName || !fileUrl) return;
    setFiles([...files, { name: fileName, url: fileUrl }]);
    setFileName("");
    setFileUrl("");
  };

  return (
    <div>
      <h4 className="mb-3">📁 File di {subjectName}</h4>

      {/* Form per aggiungere link */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nome file"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <input
          type="url"
          className="form-control mb-2"
          placeholder="Link al file"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addFile}>
          Aggiungi file
        </button>
      </div>

      {/* Lista dei file */}
      <ul className="list-group">
        {files.map((file, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
