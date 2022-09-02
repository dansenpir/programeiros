import { JobsSearchInput } from '../JobsSearchInput';
import MagnifyingGlass from '../../../public/images/magnifyingGlass.svg';

const JobsSearchForm = () => {
  const inputs = {
    income: {
      label: 'Faixa salarial',
      options: [
        'R$1.000,00 até 4.999,99',
        'R$5.000,00 até 9.999,99',
        'R$10.000,00 até 14.999,99',
        'Acima dos R$15.000,00',
      ],
    },
    expLevel: {
      label: 'Nível de experiência',
      options: [
        'Estágio',
        'Júnior',
        'Júnior / Pleno',
        'Pleno',
        'Pleno / Sênior',
        'Sênior',
      ],
    },
    availability: {
      label: 'Disponibilidade',
      options: [
        'Autônomo',
        'CLT',
        'CLT PJ',
        'Freelancer',
        'Meio período',
        'Prestador de serviços (PJ)',
        'Temporário',
        'Tempo integral',
        'Trainee',
      ],
    },
  };
  const { income, expLevel, availability } = inputs;

  return (
    <div>
      <div className="grid gap-x-12 gap-y-60 sm:grid-cols-2 xl:grid-cols-searchForm xl:gap-y-17.28">
        <JobsSearchInput
          type="select"
          label={income.label}
          options={income.options}
        />
        <JobsSearchInput
          type="select"
          label={expLevel.label}
          options={expLevel.options}
        />
        <JobsSearchInput
          type="select"
          label={availability.label}
          options={availability.options}
        />
        <JobsSearchInput
          type="text"
          placeholder="Tags, habilidades, áreas..."
          label="Palavra-chave"
        />
        <div className='col-span-full xl:flex xl:col-auto'>
          <button
            className="flex w-full justify-center bg-green rounded-md px-4 py-2 transition transition-colors hover:bg-green.700 active:bg-green.900 xl:mt-auto xl:mb-0 xl:py-4"
          >
            <MagnifyingGlass
              className="fill-current text-gray.900 w-8 h-8 xl:w-6 xl:h-6 dark:text-white"
            />
          </button>
        </div>
      </div>
      <div className="w-full h-px mt-8 bg-gradient-to-r from-green to-blue.500" />
      <span className="block mt-8 font-grotesk font-light text-xs text-gray.500 dark:text-white">
        Foi encontrado <span className="font-bold">4</span>
        &nbsp;vagas para a sua busca
      </span>
    </div>
  );
};

export { JobsSearchForm };
