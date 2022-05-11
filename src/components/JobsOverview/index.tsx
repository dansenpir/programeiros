import Image from 'next/image';
import { GoTo } from '../../components';

const JobsOverview = () => (
  <>
    <section className='mt-48 mx-8 md:mx-16 flex flex-col lg:flex-row items-start justify-between'>
      <div className='lg:w-4/5 xl:w-1/2 2xl:w-2/5 lg:pr-32 order-2 lg:order-none'>
        <h3 className='mt-8 mr-6 font-grotesk text-green font-bold text-3xl md:text-4xl xl:text-5xl'>
          Vagas para todos
        </h3>
        <p className='mt-8 mr-4 sm:mr-0 font-overpass text-gray-dark dark:text-white font-light text-base md:text-xl'>
          Procurando vagas? Aqui você pode encontrar com a ajuda da nossa
          plataforma de vagas remotas.
          <br />
          Precisando contratar? Também ofereceremos um espaço para divulgação de
          vagas.
        </p>
      </div>

      <div className='order-1 lg:order-none pr-10 lg:pr-0'>
        <Image
          src='/images/jobs.svg'
          width={424}
          height={370}
          alt='Ilustração Vagas'
        />
      </div>
    </section>
    <div className='mt-12 lg:mt-0 order-3 lg:order-none pr-10 lg:pr-0'>
      <GoTo
        text='Vá para as vagas'
        color='green'
        arrowColor='#04C8A7'
        hoverColor='green'
        clickedColor='green-dark'
      />
    </div>
  </>
);

export { JobsOverview };
