export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen min-w-full min-h-screen p-5 bg-red-500 gap-10">
      <section className="flex items-center justify-center w-full sm:w-1/2">
        <img src="images/construction.png" alt="logo de construção"/>
      </section>

      <section className="text-center">
        <h1 className="text-2xl font-black text-white sm:text-3xl">Desculpe, o site está em construção</h1>
      </section>
    </main>
  )
}
