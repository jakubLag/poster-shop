import { Data } from "../page";
import PosterCard from "@/components/wall/PosterCard";
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const poster = Data.find((item) => item.id.toString() === slug);

  if (!poster) {
    return <div>Not Found</div>;
  }

  return (
    <div className="min-h-[calc(100vh-96px)] flex justify-center items-center">
      <PosterCard
        id={poster.id}
        releaseYear={poster.releaseYear}
        title={poster.title}
        poster={poster.poster}
        variant="details"
      />
    </div>
  );
}
