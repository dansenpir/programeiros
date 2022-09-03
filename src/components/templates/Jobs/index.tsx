import Image from 'next/image';
import Head from 'next/head';

import { GoTo, GoToCard, JobsCard, JobsSearchForm } from '../../atoms';
import { Footer, Header } from '../../organisms';

function Jobs() {
  return (
    <>
      <Head>
        <title>Programeiros | Vagas</title>
        <meta property="og:title" content="Programeiros | Vagas" key="title" />
      </Head>
      <Header />
      <main className="w-full max-w-full min-h-screen bg-white dark:bg-dark">
        <section className="mt-48 mx-8 md:mx-16 flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-4/5 xl:w-1/2 2xl:w-2/5 lg:pr-30 order-2 lg:order-none">
            <h3 className="mt-8 mr-6 font-grotesk font-bold text-3xl md:text-4xl xl:text-5xl">
              Ache a <span className="text-green"> vaga remota </span> perfeita
              para a sua especialização.
            </h3>
          </div>

          <div className="order-1 lg:order-none pr-10 lg:pr-0">
            <Image
              src="/images/jobs.svg"
              width={424}
              height={370}
              alt="Ilustração Vagas"
            />
          </div>
        </section>
        <div className="mt-12 lg:-mt-4 xl:-mt-20 mx-8 md:mx-16 order-3 lg:order-none pr-10 lg:pr-0">
          <GoTo
            text="Vamos descobrir"
            color="green"
            hoverColor="green"
            clickedColor="green-dark"
            url="/"
          />
        </div>
        <div className="mt-64 mx-8 md:mx-16">
          <JobsSearchForm />
        </div>
        <div className="mt-16 mx-8 md:mx-16">
          <GoToCard text="Quer se destacar nas vagas? Estude com a ajuda de guias para as áreas que a vaga desejada pede. Clique neste card." />
        </div>
        <div className="px-16 mt-16 flex flex-wrap gap-11 mx-auto">
          <JobsCard
            jobTitle="Frontend Developer (Pleno)"
            jobCompanyLogo="/jobs/microsoftLogo.png"
            jobDateTime="Ontem"
            jobDescription="O EasyCrédito está buscando Frontend Developer para compor seu time!
          Somos uma Fintech que conecta pessoas que dispõem de pouco acesso a serviços financeiros ..."
            jobExp="Pleno"
            jobType="Tempo integral"
            jobPageInfoLink="/"
            jobRedirectLink="/"
          />
          <JobsCard
            jobTitle="Frontend Developer (Pleno)"
            jobCompanyLogo="/jobs/microsoftLogo.png"
            jobDateTime="Ontem"
            jobDescription="O EasyCrédito está buscando Frontend Developer para compor seu time!
          Somos uma Fintech que conecta pessoas que dispõem de pouco acesso a serviços financeiros ..."
            jobExp="Pleno"
            jobType="Tempo integral"
            jobPageInfoLink="/"
            jobRedirectLink="/"
          />
          <JobsCard
            jobTitle="Frontend Developer (Pleno)"
            jobCompanyLogo="/jobs/microsoftLogo.png"
            jobDateTime="Ontem"
            jobDescription="O EasyCrédito está buscando Frontend Developer para compor seu time!
          Somos uma Fintech que conecta pessoas que dispõem de pouco acesso a serviços financeiros ..."
            jobExp="Pleno"
            jobType="Tempo integral"
            jobPageInfoLink="/"
            jobRedirectLink="/"
          />
          <JobsCard
            jobTitle="Frontend Developer (Pleno)"
            jobCompanyLogo="/jobs/microsoftLogo.png"
            jobDateTime="Ontem"
            jobDescription="O EasyCrédito está buscando Frontend Developer para compor seu time!
          Somos uma Fintech que conecta pessoas que dispõem de pouco acesso a serviços financeiros ..."
            jobExp="Pleno"
            jobType="Tempo integral"
            jobPageInfoLink="/"
            jobRedirectLink="/"
          />
          <JobsCard
            jobTitle="Frontend Developer (Pleno)"
            jobCompanyLogo="/jobs/microsoftLogo.png"
            jobDateTime="Ontem"
            jobDescription="O EasyCrédito está buscando Frontend Developer para compor seu time!
          Somos uma Fintech que conecta pessoas que dispõem de pouco acesso a serviços financeiros ..."
            jobExp="Pleno"
            jobType="Tempo integral"
            jobPageInfoLink="/"
            jobRedirectLink="/"
          />
        </div>
        <Footer />
      </main>
    </>
  );
}

export { Jobs };
