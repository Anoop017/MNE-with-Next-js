import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProductsSection from '@/components/sections/products';
import GallerySection from '@/components/sections/gallery';
import ToolRoomSection from '@/components/sections/tool-room';
import QualitySection from '@/components/sections/quality';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GallerySection />
        <ToolRoomSection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
