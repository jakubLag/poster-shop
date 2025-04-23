import { db } from "@/firebase/firebaseConfig";
import PosterCard from "@/components/wall/PosterCard";
import { ref, get } from "firebase/database";

// Typ filmu
type Movie = {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
  director: string;
  genre: string;
  rating: number
};

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const snapshot = await get(ref(db, "movies"));
  let poster: Movie | undefined;

  if (snapshot.exists()) {
    const data = Object.values(snapshot.val()) as Movie[];
    poster = data.find((item) => item.id.toString() === slug);
  }

  if (!poster) {
    return <div>Not Found</div>;
  }

  return (
    <div className="min-h-[calc(100vh-96px)] flex justify-center items-center">
      <PosterCard
        id={poster.id}
        releaseYear={poster.releaseYear}
        title={poster.title}
        poster={poster.poster}
        director={poster.director}
        genre={poster.genre}
        rating={poster.rating}
        variant="details"
      />
    </div>
  );
}
