import React from 'react';
import Head from 'next/head';
import GameShowHostRoot from '../src/GameShowHostRoot';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Game Show Host</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GameShowHostRoot />
    </div>
  )
}
