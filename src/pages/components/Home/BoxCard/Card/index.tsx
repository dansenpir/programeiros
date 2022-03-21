export default function Card({ titleColor, title, message, setClassName }) {
  return (
    <div
      className={`h-24 w-full md:w-1/3 flex flex-col justify-center px-4 rounded-xl ${setClassName}`}>
      <h3
        className={`font-grotestk font-bold text-sm xl:text-base leading-5 ${titleColor}`}>
        {title}
      </h3>
      <p className='text-white font-overpass font-light text-xs lg:text-sm mt-4'>
        {message}
      </p>
    </div>
  );
}
