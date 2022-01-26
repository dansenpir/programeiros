import Header from './components/Home/Header';
import Highlight from './components/Home/Highlight';

export default function Home() {
  return (
    <main className='w-full max-w-full min-h-screen bg-bg-main'>
      <Header />
      <Highlight />
    </main>
  );
}
