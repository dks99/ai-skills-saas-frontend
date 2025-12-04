"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    fetch('http://localhost:4000/health')
      .then(r => r.json())
      .then(d => setStatus(JSON.stringify(d)))
      .catch(e => setStatus('error'));
  }, []);
  return (
    <main className="p-8">
      <h1>Frontend talking to backend</h1>
      <pre>{status}</pre>
    </main>
  );
}