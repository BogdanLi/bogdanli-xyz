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
  {
    title: "Hell`s paradise",
    img: "",
  },
  {
    title: "One Punch Man",
    img: "",
  },
  {
    title: "Evangelion",
    img: "",
  },
  {
    title: "DemonSlayer",
    img: "",
  },
  {
    title: "Kengan Ashura",
    img: "",
  },
  {
    title: "Record of Ragnarok",
    img: "",
  },
  {
    title: "Solo Leveling",
    img: "",
  },
  {
    title: "Spy x Family",
    img: "",
  },
  {
    title: "Blue Lock",
    img: "",
  },
  {
    title: "Deathnote",
    img: "",
  },
  {
    title: "Horimiya",
    img: "",
  },
  {
    title: "Devilman Crybaby",
    img: "",
  },
  {
    title: "Black Clover",
    img: "",
  },
  {
    title: "Shaman King",
    img: "",
  },
];

const HobbiesAnimePage = () => {
  return (
    <div className="h-full w-full overflow-y-scroll">
      <CodeTemplate name="anime.tsx" lines={0} className="w-full">
        <div className="grid w-full grid-cols-1 gap-4 pb-4 md:grid-cols-2 lg:grid-cols-4">
          {animes.map((anime) => (
            <AnimeCard key={anime.title} {...anime} />
          ))}
        </div>
      </CodeTemplate>
    </div>
  );
};

export default HobbiesAnimePage;
