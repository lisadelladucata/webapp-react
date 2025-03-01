import Heading from "./Heading";
import Button from "./Button";
import Stars from "./Stars";
import { Link } from "react-router-dom";

export default function Card({ image, title, content, link, vote }) {
  return (
    <>
      <div className="img">
        <img src={image} alt={title} />
      </div>

      <div className="info">
        <div className="title">
          <Heading level={3}>{title}</Heading>
        </div>
        <div className="vote">
          <Stars vote={vote} />
        </div>
        <div className="content">
          <p>{content}</p>
        </div>

        <div className="btn">
          <Link to={link}>
            <Button>Leggi di più</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
