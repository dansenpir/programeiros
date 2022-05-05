import { Footer, Header, Highlight, Overview } from '../components';

export default function Home() {
  return (
    <main className='w-full max-w-full min-h-screen bg-white dark:bg-dark'>
      <Header />
      <Highlight />
      <Overview />
      <Footer />
    </main>
  );
}
