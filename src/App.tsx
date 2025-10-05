import { HeroSection } from './components/hero-section';
import { HowItWorks } from './components/how-it-works';
import { ValueSection } from './components/value-section';
import { NoticeBanner } from './components/notice-banner';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <ValueSection />
      <NoticeBanner />
      <Footer />
    </div>
  );
}