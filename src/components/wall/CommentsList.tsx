"use client";

import CommentsForm from "./CommentsForm";
import Comment from "./Comment";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WallCardProps } from "./PosterCard";
import AddToCartButton from "../cart/AddToCartButton";
type CommentType = {
  id: number;
  text: string;
  postDate: string;
  likes: number;
  movieId: number;
};

type CommentsListProps = {
  variant: "wall" | "details";
  poster: WallCardProps;
};

const CommentsList = ({ variant, poster }: CommentsListProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const { addToCart, cart } = useCart();

  useEffect(() => {
    const dbRef = ref(db, "comments");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const allComments: CommentType[] = Object.values(snapshot.val());
        console.log("All comments:", allComments);
        const filtered = allComments.filter(
          (comment) => comment.movieId === poster.id
        );
        console.log("Filtered comments:", filtered);
        setComments(filtered);
      } else {
        setComments([]);
        console.log("No comments in DB");
      }
    });

    return () => unsubscribe();
  }, [poster.id]);
  const isInCart = cart.some((item) => item.id === poster.id);
  const addHandle = () => {
    !isInCart && addToCart(poster);
  };
  return variant === "details" ? (
    <div className="w-[600px] px-3 h-[750px]">
      <div className="flex items-center justify-between w-full mb-6">
        <h1 className="text-3xl font-semibold">Comments</h1>
        
      </div>

      <div className="flex justify-start mb-6">
        <CommentsForm variant="details" movieId={poster.id}/>
      </div>
      <div className="flex flex-col gap-3 h-[550px] overflow-y-scroll p-2 mb-[26px]">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            id={comment.id}
            likes={comment.likes}
            postDate={comment.postDate}
            text={comment.text}
          />
        ))}
      </div>

      <AddToCartButton addHandle={addHandle} cart={cart} isDisabled={isInCart}/>
    </div>
  ) : (
    <div className="flex flex-col gap-3 w-[600px]">
      {comments.slice(1, 3).map((comment, index) => (
        <Comment
          key={index}
          id={comment.id}
          likes={comment.likes}
          postDate={comment.postDate}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default CommentsList;
