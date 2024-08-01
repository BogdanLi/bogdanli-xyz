interface Props {
  className?: string;
  color: string;
  bgColor: string;
  start: number;
  end: number;
}

const RadialGradient = ({ className, color, bgColor, start, end }: Props) => {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} ${start}%, ${bgColor} ${end}%)`,
      }}
    />
  );
};

export default RadialGradient;
