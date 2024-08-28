import Main from '@/components/Main';
import Nav from '@/components/Nav';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen mn-w-[350px] bg-mybg pt-2">
      <Nav />
      <Main />
    </main>
  );
}
