import TelegramButton from '../../../../components/TelegramButton';

export default function Highlight() {
  return (
    <section className='flex flex-col sm:flex-row items-center justify-between mt-16 px-10 xl:px-24'>
      <div>
        <h1 className='text-xl md:text-2xl lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-24 text-dark dark:text-white font-grotesk font-bold w-auto md:w-5/6 xl:w-4/6'>
          Aprenda programação na prática com outros membros da comunidade.
        </h1>
        <h3 className='font-overpass font-light text-green text-md lg:text-xl lg:leading-7 xl:text-2-5xl xl:leading-9 pt-5 md:pt-6 md:w-5/6 lg:w-4/6 xl:w-3/6'>
          Traceje rotas de estudo, encontre vagas, descubra e aprenda mais sobre design e programação.
        </h3>
        <p className='font-overpass font-normal text-gray text-sm md:text-base leading-5 pt-4 md:pt-12'>
          Conheça também nossas comunidades
        </p>
        <div className='mb-11 sm:mb-0 mt-11'>
          <TelegramButton />
        </div>
      </div>
      <div>
        <img src='/images/coding.svg' alt='pessoa programando' />
      </div>
    </section>
  );
}
