import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./SpotlightCard.css";

const subjects = ["Reti", "ProgrammazioneWeb", "Programmazione1", "Inglese"];

interface SpotlightCardProps {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  children?: React.ReactNode;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  children,
}) => {
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div className={`container mt-5 ${className}`}>
      <div className="text-center mb-5">
        <h1 className="mt-5">APPUNTI</h1>
        <p>Paragrafo Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>

      <div className="row">
        {subjects.map((subject) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={subject}>
            <Link
              to={`/subject/${subject.toLowerCase()}`}
              className=""
            >
              <div
                className="card-spotlight d-flex justify-content-center align-items-center p-4 mt-3"
                onMouseMove={handleMouseMove}
              >
                <button className="buttHome p-4">{subject}</button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {children && <div className="extra-content mt-5">{children}</div>}
    </div>
  );
};

export default SpotlightCard;
