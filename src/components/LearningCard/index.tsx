interface LearningCard {
  title: string;
  description: string;
}

function LearningCard({ title, description }: LearningCard) {
  return (
    <div className={`mb-4 h-32 w-full flex flex-col px-4 sm:px-5`}>
      <h3 className={`font-grotesk font-bold text-2xl leading-5 mt-6 text-red`}>
        {title}
      </h3>
      <p
        className={`text-gray-dark dark:text-white font-overpass font-light text-lg mt-6`}>
        {description}
      </p>
    </div>
  );
}

export { LearningCard };
