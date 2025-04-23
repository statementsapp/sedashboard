import dynamic from 'next/dynamic';

const ClientWrapper = dynamic(() => import('../components/ClientWrapper'), {
  ssr: false
});

export default function Home() {
  return <ClientWrapper />;
} 