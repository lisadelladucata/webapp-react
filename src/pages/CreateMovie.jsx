import axios from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";

const initialFormData = {
  title: "",
  director: "",
  abstract: "",
  image: undefined,
};

export default function CreateMovie() {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/movies`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        navigate("/");
      });
  };

  return (
    <div className="container new-film info">
      <Heading level={1}>Aggiungi un Film</Heading>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titolo</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Inserisci il titolo"
            value={formData.title}
            onChange={(e) => handleField("title", e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="director">Regista</label>
          <input
            id="director"
            name="director"
            type="text"
            placeholder="Inserisci il regista"
            value={formData.director}
            onChange={(e) => handleField("director", e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Immagine</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => handleField("image", e.target.files[0])}
            required
          />
        </div>
        <div>
          <label htmlFor="abstract">Trama</label>
          <textarea
            id="abstract"
            name="abstract"
            placeholder="Inserisci la trama "
            rows={5}
            value={formData.abstract}
            onChange={(e) => handleField("abstract", e.target.value)}
            required
            minLength={5}></textarea>
        </div>
        <div className="btn">
          <Button type="submit">Invia</Button>
        </div>
      </form>
    </div>
  );
}
