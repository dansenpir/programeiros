import Image from 'next/image';
import { LearningCard, GoTo } from '../../components';

const LearningGuide = () => (
  <>
    <section className='mt-16 mx-8 md:mx-16 flex flex-col lg:flex-row items-start justify-between'>
      <div className='sm:w-4/5 xl:w-1/2 2xl:w-2/5 order-2 lg:order-none'>
        <div className='mb-16'>
          <h3 className='mt-8 mr-6 font-grotesk text-orange font-bold text-3xl md:text-4xl xl:text-5xl'>
            Aprenda com um guia
          </h3>
          <p className='mt-8 font-overpass text-gray-dark dark:text-white font-light text-base md:text-xl'>
            Guias educacionais criados para você saber o que deve estudar para
            qualquer tecnologia.
          </p>
        </div>

        <div className='flex flex-col'>
          <LearningCard
            title='Roadmap'
            description='Mapa mental que te mostra o passo a passo para aprender diferentes áreas de conhecimento.'
          />
          <LearningCard
            title='Indicação de materiais'
            description='Indicação de podcasts, livros, artigos, cursos, etc, selecionada para reforçar o aprendizado.'
          />
          <LearningCard
            title='Reviews de cursos'
            description='Análises de diversos cursos para lhe ajudar a escolher o melhor dentre vários para estudar.'
          />
        </div>
      </div>

      <div className='order-1 lg:order-none pr-10 lg:pr-0'>
        <Image
          src='/images/learning_guide.svg'
          width={424}
          height={370}
          alt='Programador'
        />
      </div>
    </section>

    <GoTo
      text='Vá para o guia'
      color='orange'
      hoverColor='orange'
      clickedColor='orange-dark'
    />
  </>
);

export { LearningGuide };
