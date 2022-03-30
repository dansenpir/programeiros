import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { SocialButton } from '../../../../components/SocialButton/index';
import { useBreakpoint } from '../../../../hooks/tailwind';

export default function Highlight() {
  const animation = [
    ['programação', `${styles.textAnimationBlue}`],
    ['design gráfico', `${styles.textAnimationPurple}`],
    ['UX/UI design', `${styles.textAnimationOrange}`],
  ];
  const [category, setCategory] = useState('programação');
  const [categoryTextColor, setCategoryTextColor] = useState('text-blue');
  const [counter, setCounter] = useState(0);
  const isDesktop = useBreakpoint('sm');

  useEffect(() => {
    setTimeout(() => {
      if (counter <= animation.length - 2) setCounter(counter + 1);
      else setCounter(0);
    }, 1500);
    setCategory(animation[counter][0]);
    setCategoryTextColor(animation[counter][1]);
  }, [counter]);

  return (
    <section className='flex flex-col sm:flex-row items-center justify-between mt-16 pl-10 xl:pl-24'>
      <div className='flex justify-between'>
        <div className='mt-0 md:mt-10 lg:mt-24 xl:mt-32'>
          {isDesktop ? (
            <h1 className='text-3xl md:text-2xl lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-24 text-dark dark:text-white font-grotesk font-bold w-auto pr-10 sm:pr-0'>
              Aprenda <span className={categoryTextColor}>{category}</span>{' '}
              <br />
              na prática com outros membros da comunidade.
            </h1>
          ) : (
            <h1 className='text-3xl md:text-2xl lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-24 text-dark dark:text-white font-grotesk font-bold w-4/5 sm:w-auto pr-10 sm:pr-0'>
              Aprenda <br />{' '}
              <span className={categoryTextColor}>{category}</span> <br />
              na prática com outros membros da comunidade.
            </h1>
          )}
          <h3 className='font-overpass font-light text-green text-md lg:text-xl lg:leading-7 xl:text-2-5xl xl:leading-9 pt-5 md:pt-6 md:w-5/6 lg:w-4/6 xl:w-3/5 pr-16 md:pr-0'>
            Traceje rotas de estudo, encontre vagas, descubra e aprenda mais
            sobre design e programação.
          </h3>
          <p className='font-overpass font-normal text-gray text-sm md:text-base leading-5 pt-4 md:pt-12'>
            Conheça também nossas comunidades
          </p>
          <div className='flex flex-wrap sm:mb-0 mt-8 sm:mt-11'>
            <SocialButton
              link={'https://t.me/+p8PHV0M348k3NjE5'}
              text={'Telegram'}
              textColor={'text-btn-telegram'}
              borderColor={'border-btn-telegram'}
              image={'/images/telegram_icon.svg'}
              alt={'Ícone do Telegram'}
              setClassName={'mb-8 sm:mb-0'}
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
        <div className='hidden md:block w-auto md:w-5/6 xl:w-3/4 pl-44'>
          <img src='/images/highlight.svg' alt='Ilustração Highlight' />
        </div>
      </div>
    </section>
  );
}
