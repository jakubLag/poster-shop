import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
type WallCardProps = {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
};
const WallCard = ({ id, title, releaseYear, poster }: WallCardProps) => {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle className="text-3xl ml-6">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div>
          <Image src={poster} alt="pulp fiction" width={500} height={700} />
        </div>
      </CardContent>
      <CardFooter className="ml-6 flex gap-10 justify-between">
        <div className="flex gap-10 items-center">
          <Button variant={"outline"} className="cursor-pointer">
            <ChevronUp />
          </Button>
          <p className="text-red-500">-48</p>

          <Button variant={"destructive"} className="cursor pointer">
            <ChevronDown />
          </Button>
        </div>
        <div className="mr-6">
          <Button className="cursor-pointer">More <ChevronRight /></Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WallCard;
