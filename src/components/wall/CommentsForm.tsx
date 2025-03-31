import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
const CommentsForm = () => {
  return (
    <div className="flex justify-center gap-5 w-full">
      <Input placeholder="Type a comment..." />
      <Button className="cursor-pointer">
        Add <Send />
      </Button>
    </div>
  );
};

export default CommentsForm;
