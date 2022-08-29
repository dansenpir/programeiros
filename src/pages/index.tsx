import { Footer, Header } from '../components';
import Home from './home';

export default function Main() {
  return (
    <main className="w-full max-w-full min-h-screen bg-white dark:bg-dark">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}
