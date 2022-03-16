export default function TelegramButton() {
  return (
    <a href='https://t.me/+p8PHV0M348k3NjE5' target='_blank' rel='noreferrer'>
      <button className='flex items-center border-1 border-solid rounded-xl py-1 px-4 md:px-5 lg:py-2 lg:px-5 xl:py-2.5 xl:px-10 text-xs lg:text-base font-grotesk font-normal leading-5'>
        <img
          className='w-4 lg:w-6 xl:w-8'
          src='/images/telegram_logo.svg'
          alt='Logo do Telegram'
        />
        <p className='ml-4'>Conheça nosso Telegram</p>
      </button>
    </a>
  );
}
