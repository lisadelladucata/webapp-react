import Button from "./ui/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialFormData = {
  name: "",
  text: "",
  vote: 0,
};

export default function FormReview({ fetchMovie }) {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();

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
      .post(`http://localhost:3003/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        fetchMovie();
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Inserisci il tuo nome"
          value={formData.name}
          onChange={(e) => handleField("name", e.target.value)}
          required
        />

        <label htmlFor="vote">Voto</label>
        <input
          id="vote"
          type="number"
          max={5}
          min={1}
          placeholder="Inserisci il voto"
          value={formData.vote}
          onChange={(e) => handleField("vote", e.target.value)}
        />

        <label htmlFor="review">Recensione</label>
        <textarea
          name="review"
          id="review"
          placeholder="Inserisci il testo della recensione"
          rows={5}
          value={formData.text}
          onChange={(e) => handleField("text", e.target.value)}
          required></textarea>

        <Button type="submit">Invia</Button>
      </form>
    </>
  );
}
