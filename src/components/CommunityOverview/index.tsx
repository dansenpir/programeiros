import Image from 'next/image';
import { SocialButton } from '../../components';

const CommunityOverview = () => (
  <>
    <section className='mt-48 mx-8 md:mx-16 flex flex-col lg:flex-row items-start justify-between'>
      <div className='lg:w-4/5 xl:w-1/2 2xl:w-2/5 lg:pr-32 order-2 lg:order-none'>
        <h3 className='mt-8 mr-6 font-grotesk text-blue font-bold text-3xl md:text-4xl xl:text-5xl leading-8 md:leading-10 xl:leading-24'>
          Uma comunidade feita para você
        </h3>
        <p className='mt-8 mr-4 sm:mr-0 font-overpass text-gray-dark dark:text-white font-light text-base md:text-xl'>
          Nossa comunidade foi projetada para que você possa aprender em
          conjunto, se aperfeiçoar e desenvolver networking.
        </p>
      </div>

      <div className='order-1 lg:order-none pr-10 lg:pr-0'>
        <Image
          src='/images/community.svg'
          width={424}
          height={370}
          alt='Ilustração Comunidade'
        />
      </div>
    </section>

    <div className='mt-16 lg:mt-0 mx-8 md:mx-16 flex flex-wrap sm:flex-nowrap'>
      <SocialButton text={'Telegram'} />
      <SocialButton text={'Discord'} />
      <SocialButton text={'GitHub'} />
    </div>
  </>
);

export { CommunityOverview };
