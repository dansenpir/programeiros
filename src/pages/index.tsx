import { Footer } from '../components/Footer';
import Header from '../components/Header';
import Highlight from './components/Home/Highlight';
import { BoxCard } from './components/Home/BoxCard';

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
