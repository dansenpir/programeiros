import styles from './styles.module.css';
import { Card } from '../../components';

function Overview() {
  return (
    <section className='mt-56 sm:mt-64 mx-8 md:mx-16'>
      <div>
        <h1
          className={`${styles.textRainbow} font-grotesk font-bold text-3xl md:text-4xl xl:text-5xl xl:leading-24`}>
          Está pronto para começar?
        </h1>
        <p className='font-overpass font-light text-base md:text-xl text-gray-dark dark:text-gray-white mt-8'>
          Nós do Programeiros projetamos esta plataforma para te auxiliar no seu
          desenvolvimento profissional e para isso trouxemos soluções que irão
          te ajudar no percurso.
        </p>
      </div>
      <div className='flex flex-wrap flex-col md:flex-row lg:flex-nowrap mt-16 w-full'>
        <Card
          color={'orange'}
          title='Guia de estudos'
          message='Saiba o que deve fazer para aprender aquela tão sonhada tecnologia.'
          setClassName={'mb-12 md:mb-16'}
        />
        <Card
          color={'green'}
          title={'Vagas'}
          message={
            'Encontre vagas remotas para a sua área ou divulgue vagas para recrutar profissionais.'
          }
          setClassName={'mb-12 md:mb-0 md:ml-16 lg:mx-16'}
        />
        <Card
          color={'blue'}
          title={'Comunidade'}
          message={
            'Comunidade criada para discutir sobre interesses em comum, reforçar o aprendizado e desenvolver suas habilidades.'
          }
        />
      </div>
    </section>
  );
}

export { Overview };
