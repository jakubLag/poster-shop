"use client"
import { Card, CardContent, CardHeader } from "../ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";
interface CommentProps {
    id: number;
    text: string;
    postDate: string;
    likes: number;
}

const Comment = ({ id, text, postDate, likes }: CommentProps) => {
    const [liked, setLiked] = useState<boolean>(false)
    return <Card>
        <CardContent className="flex justify-between">
            <p>{text}</p>
            <div className="flex gap-2">
                {liked ? <Heart fill="#F44336" color="#F44336" className="cursor-pointer" onClick={() => setLiked(false)}/> : <Heart className="cursor-pointer" onClick={() => setLiked(true)}/>}
                <p className="text-gray-500 select-none">{likes}</p>
            </div>
        </CardContent>
    </Card>
};

export default Comment;