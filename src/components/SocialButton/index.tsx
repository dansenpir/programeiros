interface SocialButton {
  link: string;
  text: string;
  textColor: string;
  borderColor: string;
  image: string;
  alt: string;
  setClassName?: string;
}

export function SocialButton({
  link,
  text,
  textColor,
  borderColor,
  image,
  alt,
  setClassName,
}: SocialButton) {
  return (
    <div className={setClassName}>
      <a href={link} target='_blank' rel='noreferrer'>
        <button
          className={`flex items-center border-1 border-solid ${borderColor} rounded-xl py-1 md:py-2 px-2 text-xs lg:text-base font-grotesk font-normal leading-5`}>
          <img className='w-4 lg:w-6' src={image} alt={alt} />
          <p className={`ml-2 ${textColor}`}>{text}</p>
        </button>
      </a>
    </div>
  );
}
