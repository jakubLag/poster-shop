"use client"

import CommentsForm from "./CommentsForm";
import Comment from "./Comment";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

type CommentType = {
  id: number;
  text: string;
  postDate: string;
  likes: number;
  movieId: number;
};

type CommentsListProps = {
  variant: "wall" | "details";
  movieId: number;
};

const CommentsList = ({ variant, movieId }: CommentsListProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    const dbRef = ref(db, "comments");
  
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const allComments: CommentType[] = Object.values(snapshot.val());
        console.log("All comments:", allComments);
        const filtered = allComments.filter((comment) => comment.movieId === movieId);
        console.log("Filtered comments:", filtered);
        setComments(filtered);
      } else {
        setComments([]);
        console.log("No comments in DB");
      }
    });
  
    return () => unsubscribe();
  }, [movieId]);
  

  return variant === "details" ? (
    <div className="w-[600px] px-3 h-[750px]">
      <div className="flex items-center justify-between w-full mb-6">
        <h1 className="text-3xl font-semibold">Comments</h1>
        <div className="flex gap-10 items-center">
          <Button variant={"green"} className="cursor-pointer">
            <ChevronUp />
          </Button>
          <p className="text-red-500">-48</p>
          <Button variant={"destructive"} className="cursor-pointer">
            <ChevronDown />
          </Button>
        </div>
      </div>

      <div className="flex justify-start mb-6">
        <CommentsForm />
      </div>
      <div className="flex flex-col gap-3 h-[600px] overflow-y-scroll">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            likes={comment.likes}
            postDate={comment.postDate}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="w-full flex flex-col gap-3">
      {comments.slice(1,3).map((comment) => (
        <Comment
          key={comment.id}
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
