import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
type CommentsFormProps = {
  variant: "wall" | "details";
};
const CommentsForm = ({ variant }: CommentsFormProps) => {
  return variant === "wall" ? (
    <div className="flex justify-center ">
      <div className="flex gap-5 w-[calc(100%-100px)]">
        <Input placeholder="Type a comment..." />
        <Button className="cursor-pointer">
          Add <Send />
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center w-[570px]">
      <div className="flex gap-5 w-full">
        <Input placeholder="Type a comment..." />
        <Button className="cursor-pointer">
          Add <Send />
        </Button>
      </div>
    </div>
  );
};

export default CommentsForm;
