import styles from './styles.module.css';
import Card from './Card';

export default function BoxCard() {
  return (
    <section>
      <div className='px-10 xl:px-24'>
        <h1
          className={`${styles.textRainbow} font-grotesk font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-24 mt-36 w-4/5 md:w-3/5`}>
          Está pronto para começar?
        </h1>
        <p className='font-overpass font-light text-xl mt-7 w-7/12'>
          Nós do Programeiros, projetamos esta plataforma para te auxiliar no
          seu desenvolvimento profissional e para isso trouxemos soluções que
          irão te ajudar no percurso.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between mt-16 mx-10 md:mx-0'>
        <Card
          color={'orange'}
          title='Guia de estudos'
          message='Aprenda aquela tão sonhada tecnologia.'
          setClassName={'mb-32 md:mb-0 md:ml-10 xl:ml-24 lg:mr-36'}
        />
        <Card
          color={'blue'}
          title={'Comunidade'}
          message={'Um espaço para aprender, ensinar e criar portfólio.'}
          setClassName={'mb-32 md:mb-0 md:mx-5 lg:mx-0'}
        />
        <Card
          color={'green'}
          title={'Recrute ou busque por vagas'}
          message={'Contrate desenvolvedores ou encontre sua vaga.'}
          setClassName={'md:mr-10 xl:mr-24 lg:ml-36'}
        />
      </div>
    </section>
  );
}
