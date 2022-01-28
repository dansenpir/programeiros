import BoxDive from './BoxDive';

export default function Dive() {
  return (
    <section>
      <h1 className='text-p-shadow font-grotesk font-bold text-5xl px-10 xl:px-24 xl:leading-24 mt-36'>
        Mergulhe no mundo da tecnologia.
      </h1>
      <div className='flex justify-between mt-16 px-10 xl:px-24'>
        <BoxDive
          titleColor={'text-title-green'}
          title={'Recrute ou busque por vagas'}
          message={'Contrate desenvolvedores ou encontre sua vaga.'}
        />
        <BoxDive
          titleColor={'text-split-complementary'}
          title='Guia de estudos'
          message='Saiba o que deve fazer para aprender aquela tão sonhada tecnologia.'
        />
        <BoxDive
          titleColor={'text-text-main'}
          title={'Comunidade'}
          message={'Um espaço para aprender, ensinar e criar portfólio.'}
        />
      </div>
    </section>
  );
}
