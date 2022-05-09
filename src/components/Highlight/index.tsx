import styles from './styles.module.css';
import { SocialButton } from '../SocialButton/index';
import Image from 'next/image';

function Highlight() {
  return (
    <section className='flex flex-col sm:flex-row items-center justify-between mt-16 mx-8 md:mx-16'>
      <div className='mt-0 md:mt-10 lg:mt-24 xl:mt-32 sm:w-4/5 xl:w-1/2 2xl:w-2/5 mr-4 sm:mr-0'>
        <h1 className='text-3xl md:text-4xl lg:leading-10 xl:text-5xl xl:leading-24 text-dark dark:text-white font-grotesk font-bold sm:mr-4'>
          Aprenda <span className={styles.textBlue}>programação</span>
          <br />
          na prática com outros membros da comunidade.
        </h1>
        <h3 className='font-overpass font-light text-green text-xl lg:leading-7 xl:text-2-5xl xl:leading-9 pt-5 md:pt-6'>
          Traceje rotas de estudo, encontre vagas, descubra e aprenda mais sobre
          programação.
        </h3>
        <p className='font-overpass font-normal text-gray text-base leading-5 pt-4 md:pt-12'>
          Conheça também nossas comunidades:
        </p>
        <div className='flex flex-wrap sm:flex-nowrap mt-8'>
          <SocialButton text={'Telegram'} />
          <SocialButton text={'Discord'} />
          <SocialButton text={'GitHub'} />
        </div>
      </div>
      <div className='hidden lg:block lg:mt-24 xl:mt-40 lg:ml-32'>
        <Image
          className='w-full h-full'
          src='/images/highlight.svg'
          width={424}
          height={370}
          alt='Programador'
        />
      </div>
    </section>
  );
}

export { Highlight };
