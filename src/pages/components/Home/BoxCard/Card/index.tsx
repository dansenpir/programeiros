interface Card {
  color: string;
  title: string;
  message: string;
  setClassName?: string;
}

export default function Card({ color, title, message, setClassName }: Card) {
  return (
    <div
      className={`h-24 w-full md:w-1/3 flex flex-col justify-center px-4 rounded-xl border-2 border-${color} ${setClassName}`}>
      <h3
        className={`font-grotestk font-bold text-sm xl:text-xl leading-5 text-${color}`}>
        {title}
      </h3>
      <p
        className={`text-${color} font-overpass font-light text-xs lg:text-base mt-4`}>
        {message}
      </p>
    </div>
  );
}
