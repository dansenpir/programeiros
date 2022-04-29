import styles from './styles.module.css';
import { SocialButton } from '../SocialButton/index';
import Image from 'next/image';

function Highlight() {
  return (
    <section className='flex flex-col sm:flex-row items-center justify-between mt-16 mx-10 xl:mx-16'>
      <div className='flex justify-between'>
        <div className='mt-0 md:mt-10 lg:mt-24 xl:mt-32 w-4/5 sm:w-3/5 xl:w-1/2 2xl:w-2/5'>
          <h1 className='text-3xl md:text-4xl lg:leading-10 xl:text-5xl xl:leading-24 text-dark dark:text-white font-grotesk font-bold'>
            Aprenda <span className={styles.textBlue}>programação</span>
            <br />
            na prática com outros membros da comunidade.
          </h1>
          <h3 className='font-overpass font-light text-green text-md lg:text-xl lg:leading-7 xl:text-2-5xl xl:leading-9 pt-5 md:pt-6'>
            Traceje rotas de estudo, encontre vagas, descubra e aprenda mais
            sobre programação.
          </h3>
          <p className='font-overpass font-normal text-gray text-sm md:text-base leading-5 pt-4 md:pt-12'>
            Conheça também nossas comunidades
          </p>
          <div className='flex flex-wrap sm:mb-0 mt-4'>
            <SocialButton
              link={'https://t.me/+p8PHV0M348k3NjE5'}
              text={'Telegram'}
              textColor={'text-btn-telegram'}
              borderColor={'border-btn-telegram'}
              image={'/images/telegram_icon.svg'}
              alt={'Ícone do Telegram'}
              setClassName={'mb-4 sm:mb-0'}
            />
            <SocialButton
              link={'https://discord.gg/pDxbmrzNaJ'}
              text={'Discord'}
              textColor={'text-btn-discord'}
              borderColor={'border-btn-discord'}
              image={'/images/discord_icon.svg'}
              alt={'Ícone do Discord'}
              setClassName={'mx-4 sm:mx-8'}
            />
            <SocialButton
              link={'https://github.com/programeiros'}
              text={'GitHub'}
              textColor={'text-btn-github'}
              borderColor={'border-btn-github'}
              image={'/images/github_icon.svg'}
              alt={'Ícone do GitHub'}
            />
          </div>
        </div>
        <div className='hidden lg:block lg:mt-24 xl:mt-40 lg:ml-32'>
          <Image
            className='w-full h-full'
            src='/images/highlight.svg'
            width={424}
            height={370}
            alt='Programador'
          />
        </div>
      </div>
    </section>
  );
}

export { Highlight };
