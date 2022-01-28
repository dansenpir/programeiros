export default function BoxDive({ titleColor, title, message }) {
  return (
    <div className='bg-p-shadow h-24 w-80 flex flex-col justify-center px-4 rounded-xl'>
      <h3
        className={`${titleColor} font-grotestk font-bold text-base leading-5`}>
        {title}
      </h3>
      <p className='text-white font-overpass font-light text-sm mt-4'>
        {message}
      </p>
    </div>
  );
}
