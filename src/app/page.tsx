'use client';

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';

export default function Home() {
  const [msg, setMsg] = useState('Waiting for Rust...');

  useEffect(() => {
    // Calling the 'greet' command defined in src-tauri/src/lib.rs
    invoke('greet', { name: 'Next.js' })
      .then((response: any) => setMsg(response))
      .catch(console.error);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">{msg}</h1>
    </main>
  );
}
