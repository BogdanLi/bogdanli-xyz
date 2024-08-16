interface Props {
  title: string;
  img: string;
}

const AnimeCard = ({ title, img }: Props) => {
  return (
    <div className="rounded-2xl border border-lines p-8">
      <h1>{title}</h1>
    </div>
  );
};

export default AnimeCard;
