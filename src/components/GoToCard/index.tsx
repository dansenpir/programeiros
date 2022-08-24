interface GoToCard {
  text: string;
};

const GoToCard = ({ text }: GoToCard) => (
  <button
    className={`hidden lg:block w-full py-5 pl-5 border border-green rounded-xl bg-green bg-opacity-25 text-left`}
  >
    <p className={`font-overpass text-black dark:text-white text-xl font-normal`}>
      {text}
    </p>
  </button>
);

export { GoToCard };
