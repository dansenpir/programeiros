import { Footer, Header, Highlight, BoxCard } from '../components';

export default function Home() {
  return (
    <main className='w-full max-w-full min-h-screen bg-dark'>
      <Header />
      <Highlight />
      <BoxCard />
      <Footer />
    </main>
  );
}
