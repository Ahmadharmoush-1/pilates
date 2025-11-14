import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ClassTypesSection from '@/components/ClassTypesSection';
import ScheduleSection from '@/components/ScheduleSection';
import AppSection from '@/components/AppSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ClassTypesSection />
        <ScheduleSection />
        <AppSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;