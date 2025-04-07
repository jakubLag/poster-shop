// uploadData.js
import { ref, set } from "firebase/database";
import { db } from "@/firebase/firebaseConfig";

export const uploadData = () => {
  const Data = [
    {
      id: 0,
      title: "Pulp Fiction",
      releaseYear: 1994,
      poster: "/posters/pulpFiction.jpg",
      director: "Quentin Tarantino",
      genre: "Crime",
      rating: 20
    },
    {
      id: 1,
      title: "Inception",
      releaseYear: 2010,
      poster: "/posters/inception.jpg",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      rating: -5
    },
  ];

  set(ref(db, "movies/"), Data)
    .then(() => {
      console.log("Dane zostały dodane!");
    })
    .catch((error) => {
      console.error("Błąd:", error);
    });
};

export const addComments = () => {
  const Comments = [
    {
      id: 0,
      text: "Ten film jest najlepszy",
      postDate: "25-03-2023",
      likes: 12,
      movieId: 1,
    },
    {
      id: 1,
      text: "Świetna gra aktorska!",
      postDate: "12-04-2023",
      likes: 25,
      movieId: 1,
    },
    {
      id: 2,
      text: "Muzyka w tym filmie to arcydzieło.",
      postDate: "05-06-2023",
      likes: 18,
      movieId: 0,
    },
    {
      id: 3,
      text: "Fabuła była trochę przewidywalna, ale i tak mi się podobało.",
      postDate: "19-07-2023",
      likes: 9,
      movieId: 1,
    },
    {
      id: 4,
      text: "Nie rozumiem, dlaczego ten film ma tak dobre recenzje...",
      postDate: "30-08-2023",
      likes: 3,
      movieId: 0,
    },
    {
      id: 5,
      text: "Mój ulubiony moment to scena w deszczu. Mistrzostwo!",
      postDate: "14-09-2023",
      likes: 21,
      movieId: 1,
    },
    {
      id: 6,
      text: "Film był OK, ale książka była lepsza.",
      postDate: "02-10-2023",
      likes: 7,
      movieId: 0,
    },
    {
      id: 7,
      text: "Zakończenie mnie totalnie zaskoczyło!",
      postDate: "15-11-2023",
      likes: 30,
      movieId: 1,
    },
    {
      id: 8,
      text: "Chciałbym zobaczyć kontynuację tej historii.",
      postDate: "28-12-2023",
      likes: 16,
      movieId: 0,
    },
    {
      id: 9,
      text: "Efekty specjalne były na najwyższym poziomie.",
      postDate: "10-01-2024",
      likes: 22,
      movieId: 1,
    },
  ];
  set(ref(db, "comments/"), Comments)
    .then(() => console.log("dodano komenty"))
    .catch((error) => console.error(error));
};
