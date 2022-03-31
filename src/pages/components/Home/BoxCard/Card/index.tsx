interface Card {
  color: string;
  title: string;
  message: string;
  setClassName?: string;
}

export function Card({ color, title, message, setClassName }: Card) {
  return (
    <div
      className={`h-36 md:h-52 w-full md:w-96 flex flex-col px-4 rounded-3xl border-2 border-${color} ${setClassName}`}>
      <h3
        className={`font-grotesk font-bold text-sm md:text-base lg:text-xl leading-5 mt-4 text-${color}`}>
        {title}
      </h3>
      <p
        className={`text-${color} font-overpass font-light text-xs md:text-sm lg:text-base mt-4`}>
        {message}
      </p>
    </div>
  );
}
