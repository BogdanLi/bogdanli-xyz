import CodeTemplate from "components/Templates/CodeTemplate";
import AnimeCard from "components/UI/AboutPage/AnimeCard";

const animes = [
  {
    title: "Bleach",
    img: "",
  },
  {
    title: "Jujutsu Kaisen",
    img: "",
  },
  {
    title: "Attack on Titan",
    img: "",
  },
  {
    title: "Noragami",
    img: "",
  },
  {
    title: "Link Click",
    img: "",
  },
];

const HobbiesAnimePage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate name="anime.tsx" lines={0} className="w-full">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {animes.map((anime) => (
            <AnimeCard key={anime.title} {...anime} />
          ))}
        </div>
      </CodeTemplate>
    </div>
  );
};

export default HobbiesAnimePage;
