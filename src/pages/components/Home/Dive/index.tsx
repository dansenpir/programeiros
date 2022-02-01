import BoxDive from './BoxDive';

export default function Dive() {
  return (
    <section>
      <h1 className='text-p-shadow font-grotesk font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-10 xl:px-24 xl:leading-24 mt-36 w-4/5 md:w-3/5'>
        Mergulhe no mundo da tecnologia
      </h1>
      <div className='flex flex-col md:flex-row justify-between mt-16 mx-10 md:mx-0'>
        <BoxDive
          titleColor={'text-split-complementary'}
          title='Guia de estudos'
          message='Aprenda aquela tão sonhada tecnologia.'
          setClassName={'mb-32 md:mb-0 md:ml-10 xl:ml-24 lg:mr-36'}
        />
        <BoxDive
          titleColor={'text-text-main'}
          title={'Comunidade'}
          message={'Um espaço para aprender, ensinar e criar portfólio.'}
          setClassName={'mb-32 md:mb-0 md:mx-5 lg:mx-0'}
        />
        <BoxDive
          titleColor={'text-title-green'}
          title={'Recrute ou busque por vagas'}
          message={'Contrate desenvolvedores ou encontre sua vaga.'}
          setClassName={'md:mr-10 xl:mr-24 lg:ml-36'}
        />
      </div>
    </section>
  );
}
