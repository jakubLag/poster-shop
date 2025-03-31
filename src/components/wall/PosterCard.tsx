import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
type WallCardProps = {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
  variant: "wall" | "details";
};
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
const PosterCard = ({
  id,
  title,
  releaseYear,
  poster,
  variant,
}: WallCardProps) => {
  return variant === "wall" ? (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle className="text-3xl ml-6">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div>
          <img src={poster} alt="pulp fiction" width={500} height={700} />
        </div>
      </CardContent>
      <CardFooter className="ml-6 flex gap-10 justify-between">
        <div className="flex gap-10 items-center">
          <Button variant={"green"} className="cursor-pointer">
            <ChevronUp />
          </Button>
          <p className="text-red-500">-48</p>

          <Button variant={"destructive"} className="cursor-pointer">
            <ChevronDown />
          </Button>
        </div>
        <div className="mr-6 flex items-center text-gray-500 cursor-pointer gap-1 hover:text-white transition-all">
          <p className="text-base">More</p> <ChevronRight size={16} />
        </div>
      </CardFooter>
      <CommentsForm />
    </Card>
  ) : (
    <Card className="w-[1200px] px-5">
      <CardHeader>
        <CardTitle className="text-4xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="">
          <img src={poster} alt="pulp fiction" width={500} height={700} />
        </div>
        <div>
          <CommentsList />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-10">
        <div className="flex justify-between w-full">
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
        <div className="flex justify-start w-[500px]">
          <CommentsForm />
        </div>
      </CardFooter>
    </Card>
  );
};

export default PosterCard;
