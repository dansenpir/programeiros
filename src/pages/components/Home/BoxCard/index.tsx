import styles from './styles.module.css';
import Card from './Card';

export default function BoxCard() {
  return (
    <section className='mt-56 sm:mt-64'>
      <div className='px-10 xl:px-24'>
        <h1
          className={`${styles.textRainbow} font-grotesk font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-24 w-4/5 md:w-3/5`}>
          Está pronto para começar?
        </h1>
        <p className='font-overpass font-light text-base lg:text-xl text-gray-dark mt-7 sm:w-11/12 lg:w-4/5 xl:w-7/12'>
          Nós do Programeiros projetamos esta plataforma para te auxiliar no seu
          desenvolvimento profissional e para isso trouxemos soluções que irão
          te ajudar no percurso.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between mt-16 mx-10 md:mx-0'>
        <Card
          color={'orange'}
          title='Guia de estudos'
          message='Saiba o que deve fazer para aprender aquela tão sonhada tecnologia.'
          setClassName={'mb-12 md:mb-0 md:ml-10 xl:ml-24 lg:mr-16 xl:mr-32'}
        />
        <Card
          color={'green'}
          title={'Recrute ou busque por vagas'}
          message={
            'Encontre vagas remotas para a sua área ou divulgue vagas para recrutar profissionais.'
          }
          setClassName={'mb-12 md:mb-0 md:mx-5 lg:mx-0'}
        />
        <Card
          color={'blue'}
          title={'Desenvolvimento em comunidade'}
          message={
            'Comunidade criada para discutir sobre interesses em comum, reforçar o aprendizado e desenvolver suas habilidades.'
          }
          setClassName={'md:mr-10 xl:mr-24 lg:ml-16 xl:ml-32'}
        />
      </div>
    </section>
  );
}
