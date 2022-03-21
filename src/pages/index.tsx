import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Highlight from './components/Home/Highlight';
import BoxCard from './components/Home/BoxCard';

export default function Home() {
  return (
    <main className='w-full max-w-full min-h-screen bg-white dark:bg-dark'>
      <Header />
      <Highlight />
      <BoxCard />
      <Footer />
    </main>
  );
}
