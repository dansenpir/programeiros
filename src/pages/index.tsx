import {
  Footer,
  Header,
  Highlight,
  Overview,
  LearningGuide,
  JobsOverview,
} from '../components';

export default function Home() {
  return (
    <main className='w-full max-w-full min-h-screen bg-white dark:bg-dark'>
      <Header />
      <Highlight />
      <Overview />
      <LearningGuide />
      <JobsOverview />
      <Footer />
    </main>
  );
}
