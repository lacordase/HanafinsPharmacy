import { Header } from '@/components/body/Header';
import { Landing } from '@/components/body/Landing';
import { Info } from '@/components/body/Info';
import { Pharmacists } from '@/components/body/Pharmacists';
import Contact from '@/components/body/Contact';

export function HomePage() {
  return (
    <>
      <Header />
      <Landing />
      <Info />
      <Pharmacists />
      <Contact />
    </>
  );
}
