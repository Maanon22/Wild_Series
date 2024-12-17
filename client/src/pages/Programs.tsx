import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]); // State pour stocker les données

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => {
        console.info(data); // Affiche les données dans la console
        setPrograms(data); // Met à jour le state avec les données récupérées
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []); // Le tableau vide [] pour exécuter l'effet uniquement au montage du composant

  return (
    <>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>{program.title}</li> // Affiche le nom de chaque série
        ))}
      </ul>
    </>
  );
}

export default Programs;
