import { Chat } from '../components/Chat'
import React from 'react';
import { Header } from '../components/Header';


function Home() {
  return (
    <div className="bg-white dark:bg-dark">
      <Header></Header>
      <section className="flex flex-col gap-6">
        <p className="h1">OpenAI Generative pre-trained transformer 3 text model</p>
        <p className="text-zinc-600">
          In this example, a simple chat bot is implemented using Next.js, API
          Routes, and OpenAI API.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h1 className="text-3xl">GPT Bot</h1>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </div>
  )
}



export default Home
