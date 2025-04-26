"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ShoppingCart,
  Dot,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ref, update } from "firebase/database";
import { db } from "@/firebase/firebaseConfig";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

type WallCardProps = {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
  director: string;
  genre: string;
  rating: number;
  variant: "wall" | "details";
};

const PosterCard = ({
  id,
  title,
  releaseYear,
  poster,
  director,
  genre,
  rating,
  variant,
}: WallCardProps) => {
  const router = useRouter();
  const [currentRating, setCurrentRating] = useState<number>(rating);
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    const votedMovies = JSON.parse(localStorage.getItem("votedMovies") || "{}");
    setHasVoted(!!votedMovies[id]);
  }, [id]);

  const handleVote = async (type: "up" | "down") => {
    if (hasVoted) {
      alert("You have already voted for this movie.");
      return;
    }

    const movieRef = ref(db, `movies/${id}`);
    const newRating = type === "up" ? currentRating + 1 : currentRating - 1;

    try {
      await update(movieRef, { rating: newRating });
      setCurrentRating(newRating);
      setHasVoted(true);

      // Zapisz głos lokalnie
      const votedMovies = JSON.parse(localStorage.getItem("votedMovies") || "{}");
      votedMovies[id] = true;
      localStorage.setItem("votedMovies", JSON.stringify(votedMovies));
    } catch (error) {
      console.error("Błąd przy aktualizacji oceny:", error);
    }
  };

  return variant === "wall" ? (
    <Card className="w-[800px] px-6">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div>
          <img src={poster} alt={title} width={600} height={700} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-7">
        <div className="w-full flex gap-10 justify-between">
          <div className="flex gap-10 items-center">
            <Button
              variant={"green"}
              className="cursor-pointer"
              onClick={() => handleVote("up")}
              disabled={hasVoted}
            >
              <ChevronUp />
            </Button>
            {currentRating > 0 ? (
              <p className="text-green-500">{currentRating}</p>
            ) : currentRating === 0 ? (
              <p className="text-white">{currentRating}</p>
            ) : (
              <p className="text-red-500">{currentRating}</p>
            )}
            <Button
              variant={"destructive"}
              className="cursor-pointer"
              onClick={() => handleVote("down")}
              disabled={hasVoted}
            >
              <ChevronDown />
            </Button>
          </div>
          <div
            className="flex items-center text-gray-500 cursor-pointer gap-1 hover:text-white transition-all"
            onClick={() => router.push(`/wall/${id}`)}
          >
            <p className="text-base">More</p> <ChevronRight size={16} />
          </div>
        </div>
        <CommentsForm variant="wall"/>
        <div>
          <CommentsList variant="wall" movieId={id} />
        </div>
      </CardFooter>
    </Card>
  ) : (
    <Card className="w-[1200px] px-5">
      <CardHeader>
        <CardTitle className="text-4xl flex gap-3 justify-between">
          {title}
          <div className="flex items-end">
            <div className="flex">
              <span className="text-gray-600 text-lg">{releaseYear}</span>
              <Dot color="#4a5565" />
              <span className="text-gray-600 text-lg">{director}</span>
              <Dot color="#4a5565" />
              <span className="text-gray-600 text-lg">{genre}</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div>
          <img src={poster} alt={title} width={500} height={700} />
        </div>
        <div>
          <CommentsList variant="details" movieId={id} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-[500px] cursor-pointer">
          Add to cart <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PosterCard;
