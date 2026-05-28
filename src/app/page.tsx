import { Hero }         from '@/sections/Hero';
import { About }        from '@/sections/About';
import { Experience }   from '@/sections/Experience';
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
      <Experience />
      <Research />
      <Publications />
      <Teaching />
      <Skills />
      <CVDownload />
      <Contact />
    </>
  );
}
