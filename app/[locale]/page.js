import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import initTranslations from "../i18n";
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['common'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main id='heroSection' className="relative flex min-h-screen flex-col items-center justify-between bg-[#000] overflow-hidden">
        <Header />
        <HeroSection />
        <Plans />
        <HowItWorks />
        <Faq />
        <AboutUs />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
