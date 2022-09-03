interface ICard {
  type: string;
  color?: string;
  title: string;
  message: string;
  setClassName?: string;
}

function Card({ type, color, title, message, setClassName }: ICard) {
  switch (type) {
    case 'LEARNING':
      return (
        <div className={`mb-4 h-32 w-full flex flex-col px-4 sm:px-5`}>
          <h3
            className={`font-grotesk font-bold text-2xl leading-5 mt-6 text-red`}
          >
            {title}
          </h3>
          <p
            className={`text-gray-dark dark:text-white font-overpass font-light text-lg mt-6`}
          >
            {message}
          </p>
        </div>
      );
    default:
      return (
        <div
          className={`h-40 md:h-52 w-full md:w-72 flex flex-col px-4 rounded-3xl border-2 border-${color} ${setClassName} hover:bg-${color} hover:bg-opacity-10`}
        >
          <h3
            className={`font-grotesk font-bold text-xl leading-5 mt-4 text-${color}`}
          >
            {title}
          </h3>
          <p
            className={`text-${color} font-overpass font-light text-base mt-6 md:mt-4`}
          >
            {message}
          </p>
        </div>
      );
  }
}

export { Card };
