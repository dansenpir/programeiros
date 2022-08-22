interface GoToCard {
  text: string;
}

const GoToCard = ({ text }: GoToCard) => {
  return (
    <button className={`hidden lg:block w-full py-5 pl-5 border border-green rounded-xl bg-green text-left`}>
      <p className={`font-overpass text-white text-xl font-normal`}>
        {text}
      </p>
    </button>
  );
};

export { GoToCard };