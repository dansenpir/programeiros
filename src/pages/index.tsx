import { Footer, Header, Highlight, Overview, LearningGuide } from '../components';

export default function Home() {
  return (
    <main className='w-full max-w-full min-h-screen bg-white dark:bg-dark'>
      <Header />
      <Highlight />
      <Overview />
      <LearningGuide />
      <Footer />
    </main>
  );
}
