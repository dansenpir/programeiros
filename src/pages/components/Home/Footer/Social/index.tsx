export default function Social() {
  return (
    <div className='flex items-center'>
      <a
        className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8'
        href='https://github.com/Programeiros'
        target='_blank'
        rel='noreferrer'>
        <img src='/images/GithubLogo.svg' alt='Logo GitHub' />
      </a>
      <a
        className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 mx-9'
        href='https://t.me/+p8PHV0M348k3NjE5'
        target='_blank'
        rel='noreferrer'>
        <img src='/images/TelegramLogo.svg' alt='Logo GitHub' />
      </a>
      <a
        className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8'
        href='https://discord.gg/GGjVCppR9a'
        target='_blank'
        rel='noreferrer'>
        <img src='/images/DiscordLogo.svg' alt='Logo GitHub' />
      </a>
    </div>
  );
}
