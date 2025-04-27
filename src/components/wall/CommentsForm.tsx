"use client";

import { db } from "@/firebase/firebaseConfig";
import { ref, push, set } from "firebase/database";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
type CommentsFormProps = {
  variant: "wall" | "details";
  movieId: number;
};
const CommentsForm = ({ variant, movieId }: CommentsFormProps) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const comment = {
      movieId,
      text: value,
      likes: 0,
      postDate: 2025,
    };
    if (comment.text.length > 0) {
      const commentsRef = ref(db, "comments/");
      await push(commentsRef, comment);

      setValue("");
    }
  };

  return variant === "wall" ? (
    <div className="flex justify-center w-[600px] gap-5">
      <Input
        placeholder="Type a comment..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className="cursor-pointer" onClick={handleSubmit}>
        Add <Send />
      </Button>
    </div>
  ) : (
    <div className="flex justify-center w-[570px]">
      <div className="flex gap-5 w-full">
        <Input
          placeholder="Type a comment..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="cursor-pointer" onClick={handleSubmit}>
          Add <Send />
        </Button>
      </div>
    </div>
  );
};

export default CommentsForm;
