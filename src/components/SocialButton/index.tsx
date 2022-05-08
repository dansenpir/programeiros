interface SocialButton {
  link: string;
  text: string;
  textColor: string;
  borderColor: string;
  image: string;
  alt: string;
  setClassName?: string;
}

function SocialButton({
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
          className={`flex items-center border-1 border-solid ${borderColor} rounded-xl py-2 px-2 text-base font-grotesk font-normal leading-5 h-12 w-32`}>
          <img src={image} alt={alt} />
          <p className={`ml-2 ${textColor}`}>{text}</p>
        </button>
      </a>
    </div>
  );
}

export { SocialButton };
