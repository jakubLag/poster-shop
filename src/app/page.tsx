"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Vote, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="mt-20">
      <div className="w-screen">
        <div className="flex justify-center gap-10">
          <div className="flex justify-center flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-extrabold text-violet-500">
                Explore & Vote
              </h1>
              <p className="text-xl text-gray-500 w-[500px]">
                Search, discuss and vote for your favourite posters! This is
                some text to fill the container and that is basically means
                nothing, so you can stop reading this text.
              </p>
            </div>
            <div className="flex gap-10">
              <Button variant={"default"} className="w-[120px] cursor-pointer" onClick={() => router.push("/wall")}>Wall <ChevronRight /></Button>
              <Button variant={"secondary"} className="w-[120px] cursor-pointer">Votes <Vote /></Button>
            </div>
          </div>
          <div>
            <Image
              src="/posters/pulpFiction.jpg"
              alt="pulp fiction"
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
