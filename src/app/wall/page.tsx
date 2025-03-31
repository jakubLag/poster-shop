import WallCard from "@/components/wall/PosterCard";

export const Data = [
  {
    id: 0,
    title: "Pulp Fiction",
    releaseYear: 1994,
    poster: "/posters/pulpFiction.jpg",
  },
  {
    id: 1,
    title: "Inception",
    releaseYear: 2010,
    poster: "/posters/inception.jpg",
  },
];

const Wall = () => {
  return (
    <div className="flex items-center flex-col gap-20 mt-10">
      {Data.map((item, index) => (
        <WallCard
          key={index}
          title={item.title}
          id={item.id}
          releaseYear={item.releaseYear}
          poster={item.poster}
          variant="wall"
        />
      ))}
    </div>
  );
};

export default Wall;
