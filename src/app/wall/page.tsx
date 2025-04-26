"use client";

import WallCard from "@/components/wall/PosterCard";
import { db } from "@/firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
  director: string;
  genre: string;
  rating: number;
};

const Wall = () => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const dbRef = ref(db, "movies");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const movies: Movie[] = Object.values(snapshot.val());
        setData(movies);
      } else {
        setData([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center flex-col gap-20 mt-10">
      {data.map((item) => (
        <WallCard
          key={item.id}
          title={item.title}
          id={item.id}
          releaseYear={item.releaseYear}
          poster={item.poster}
          director={item.director}
          genre={item.genre}
          rating={item.rating}
          variant="wall"
        />
      ))}
    </div>
  );
};

export default Wall;
