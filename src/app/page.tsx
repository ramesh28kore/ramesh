import { Hero }         from '@/sections/Hero';
import { About }        from '@/sections/About';
import { Research }     from '@/sections/Research';
import { Publications } from '@/sections/Publications';
import { Teaching }     from '@/sections/Teaching';
import { Skills }       from '@/sections/Skills';
import { CVDownload }   from '@/sections/CVDownload';
import { Contact }      from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Publications />
      <Teaching />
      <Skills />
      <CVDownload />
      <Contact />
    </>
  );
}
