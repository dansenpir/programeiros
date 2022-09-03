interface IGoToCard {
  text: string;
}

const GoToCard = ({ text }: IGoToCard) => (
  <button
    className={`block w-full py-5 px-5 border border-green rounded-xl bg-green bg-opacity-25 text-left cursor-pointer`}
  >
    <p
      className={`font-overpass text-black dark:text-white text-xl font-normal`}
    >
      {text}
    </p>
  </button>
);

export { GoToCard };
