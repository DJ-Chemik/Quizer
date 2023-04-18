import React from 'react';
import Head from 'next/head';
import QuizerRoot from '../src/QuizerRoot/QuizerRoot';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quizer Show</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuizerRoot />
    </div>
  );
}
