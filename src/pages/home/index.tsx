import styles from './styles.module.css';
import { Card, GoTo, SocialButton } from '../../components';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="mx-8 md:mx-16">
      <Head>
        <title>Programeiros</title>
        <meta property="og:title" content="Programeiros" key="title" />
      </Head>
      <section className="flex flex-col sm:flex-row items-center justify-between mt-16">
        <div className="mt-0 md:mt-10 lg:mt-24 xl:mt-32 sm:w-4/5 xl:w-1/2 2xl:w-2/5 mr-4 sm:mr-0">
          <h1 className="text-3xl md:text-4xl lg:leading-10 xl:text-5xl xl:leading-24 text-dark dark:text-white font-grotesk font-bold sm:mr-4">
            Aprenda <span className={styles.textBlue}>programação</span>
            <br />
            na prática com outros membros da comunidade.
          </h1>
          <h3 className="font-overpass font-light text-green text-xl lg:leading-7 xl:text-2-5xl xl:leading-9 pt-5 md:pt-6">
            Traceje rotas de estudo, encontre vagas, descubra e aprenda mais
            sobre programação.
          </h3>
          <p className="font-overpass font-normal text-gray text-base leading-5 pt-4 md:pt-12">
            Conheça também nossas comunidades:
          </p>
          <div className="flex flex-wrap sm:flex-nowrap gap-y-14 sm:gap-y-0 gap-x-4 sm:gap-x-8 mt-8">
            <SocialButton type='telegram' hasText={true} />
            <SocialButton type='discord' hasText={true} />
            <SocialButton type='github' hasText={true} />
          </div>
        </div>
        <div className="hidden lg:block lg:mt-24 xl:mt-40 lg:ml-32">
          <Image
            className="w-full h-full"
            src="/images/highlight.svg"
            width={424}
            height={370}
            alt="Programador"
          />
        </div>
      </section>
      <section className="mt-56 sm:mt-64">
        <div className="w-4/5 xl:w-3/5">
          <h1
            className={`${styles.textRainbow} font-grotesk font-bold text-3xl md:text-4xl xl:text-5xl xl:leading-24`}
          >
            Está pronto para começar?
          </h1>
          <p className="font-overpass font-light text-base md:text-xl text-gray-dark dark:text-gray-white mt-8">
            Nós do Programeiros projetamos esta plataforma para te auxiliar no
            seu desenvolvimento profissional e para isso trouxemos soluções que
            irão te ajudar no percurso.
          </p>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row lg:flex-nowrap mt-16 w-full">
          <Card
            type="DEFAULT"
            color={'orange'}
            title="Guia de estudos"
            message="Saiba o que deve fazer para aprender aquela tão sonhada tecnologia."
            setClassName={'mb-12 md:mb-16'}
          />
          <Card
            type="DEFAULT"
            color={'green'}
            title={'Vagas'}
            message={
              'Encontre vagas remotas para a sua área ou divulgue vagas para recrutar profissionais.'
            }
            setClassName={'mb-12 md:mb-0 md:ml-16 lg:mx-16'}
          />
          <Card
            type="DEFAULT"
            color={'blue'}
            title={'Comunidade'}
            message={
              'Comunidade criada para discutir sobre interesses em comum, reforçar o aprendizado e desenvolver suas habilidades.'
            }
          />
        </div>
      </section>
      <section className="mt-16">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="sm:w-4/5 xl:w-1/2 2xl:w-2/5 lg:pr-24 xl:pr-0 order-2 lg:order-none">
            <div className="mb-16">
              <h3 className="mt-8 mr-6 font-grotesk text-orange font-bold text-3xl md:text-4xl xl:text-5xl">
                Aprenda com um guia
              </h3>
              <p className="mt-8 font-overpass text-gray-dark dark:text-white font-light text-base md:text-xl">
                Guias educacionais criados para você saber o que deve estudar
                para qualquer tecnologia.
              </p>
            </div>

            <div className="flex flex-col">
              <Card
                type="LEARNING"
                title="Roadmap"
                message="Mapa mental que te mostra o passo a passo para aprender diferentes áreas de conhecimento."
              />
              <Card
                type="LEARNING"
                title="Indicação de materiais"
                message="Indicação de podcasts, livros, artigos, cursos, etc, selecionada para reforçar o aprendizado."
              />
              <Card
                type="LEARNING"
                title="Reviews de cursos"
                message="Análises de diversos cursos para lhe ajudar a escolher o melhor dentre vários para estudar."
              />
            </div>
          </div>

          <div className="order-1 lg:order-none pr-10 lg:pr-0">
            <Image
              src="/images/learning_guide.svg"
              width={424}
              height={370}
              alt="Programador"
            />
          </div>
        </div>

        <div className="mt-14">
          <GoTo
            text="Vá para o guia"
            color="orange"
            hoverColor="orange"
            clickedColor="orange-dark"
            url='/'
          />
        </div>
      </section>
      <section className="mt-48">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-4/5 xl:w-1/2 2xl:w-2/5 lg:pr-32 order-2 lg:order-none">
            <h3 className="mt-8 mr-6 font-grotesk text-green font-bold text-3xl md:text-4xl xl:text-5xl">
              Vagas para todos
            </h3>
            <p className="mt-8 mr-4 sm:mr-0 font-overpass text-gray-dark dark:text-white font-light text-base md:text-xl">
              Procurando vagas? Aqui você pode encontrar com a ajuda da nossa
              plataforma de vagas remotas.
              <br />
              Precisando contratar? Também ofereceremos um espaço para
              divulgação de vagas.
            </p>
          </div>

          <div className="order-1 lg:order-none pr-10 lg:pr-0">
            <Image
              src="/images/jobs.svg"
              width={424}
              height={370}
              alt="Ilustração Vagas"
            />
          </div>
        </div>

        <div className="mt-12 lg:-mt-4 xl:-mt-20 order-3 lg:order-none pr-10 lg:pr-0">
          <GoTo
            text="Vá para as vagas"
            color="green"
            hoverColor="green"
            clickedColor="green-dark"
            url='/'
          />
        </div>
      </section>
      <section className="mt-48">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-4/5 xl:w-1/2 2xl:w-2/5 lg:pr-32 order-2 lg:order-none">
            <h3 className="mt-8 mr-6 font-grotesk text-blue font-bold text-3xl md:text-4xl xl:text-5xl leading-8 md:leading-10 xl:leading-24">
              Uma comunidade feita para você
            </h3>
            <p className="mt-8 mr-4 sm:mr-0 font-overpass text-gray-dark dark:text-white font-light text-base md:text-xl">
              Nossa comunidade foi projetada para que você possa aprender em
              conjunto, se aperfeiçoar e desenvolver networking.
            </p>
          </div>

          <div className="order-1 lg:order-none pr-10 lg:pr-0">
            <Image
              src="/images/community.svg"
              width={424}
              height={370}
              alt="Ilustração Comunidade"
            />
          </div>
        </div>

        <div className="mt-16 lg:mt-0 flex flex-wrap sm:flex-nowrap gap-y-14 gap-y-0 gap-x-4 sm:gap-x-8">
          <SocialButton type='telegram' hasText={true} />
          <SocialButton type='discord' hasText={true} />
          <SocialButton type='github' hasText={true} />
        </div>
      </section>
    </main>
  );
}
