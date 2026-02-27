import { Header } from './home/Header';
import { SecondaryNavbar } from './home/SecondaryNavbar';
import { HeroSection } from './home/HeroSection';
import { CoursesSection } from './home/CoursesSection';
import { FeaturesSection } from './home/FeaturesSection';
import { ResourcesSection } from './home/ResourcesSection';
import { RecentlyAddedSection } from './home/RecentlyAddedSection';
import { ContactSection } from './home/ContactSection';
import { Footer } from './home/Footer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <ResourcesSection />
      <RecentlyAddedSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
