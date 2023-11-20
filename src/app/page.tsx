'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [signin, setSignin] = useState("");
  let i = -1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (i === 0) {
        setSignin("S_");
      } else if (i === 2) {
        setSignin("Si_");
      } else if (i === 4) {
        setSignin("Sin_");
      } else if (i === 6) {
        setSignin("Sing_");
      } else if (i === 8) {
        setSignin("Sing _");
      } else if (i === 10) {
        setSignin("Sing u_");
      } else if (i === 12 || i === 14 || i === 16) {
        setSignin("Sing up");
      } else if (i === 18) {
        setSignin("Sing u_");
      } else if (i === 20) {
        setSignin("Sing _");
      } else if (i === 22) {
        setSignin("Sing i_");
      } else if (i === 24) {
        setSignin("Sing in");
      }
      i++;

      // Mover a verificação do encerramento do intervalo aqui
      if (i > 25) {
        clearInterval(interval);
      }
    }, 300);
  }, [])
  return (
    <main className="w-screen h-screen grid grid-cols-12 bg-black">

      <article className=' absolute w-2/6 h-3/4 left-1/3 self-center bg-gray-950 rounded-xl shadow-lg shadow-black p-9'>
        <section className="w-full h-full rounded-xl flex flex-col justify-between">
          <h1 className='w-full h-1/6 text-4xl text-center  text-greenmatrix'>{signin}</h1>
          <input type="text" name="" id="" placeholder='Username' className='w-full h-1/6 rounded-md mb-5 px-5 bg-gray-900 text-gray-400' />
          <input type="password" name="" id="" placeholder='Password' className='w-full h-1/6 rounded-md  px-5 bg-gray-900 text-gray-400' />
          <div className='w-full h-1/6 flex items-center justify-between px-3'>
            <a href="" className=' text-gray-400 font-light'>Esqueci a Senha</a>
            <a href="" className=' text-greenmatrix font-bold text-lg'>Singup</a>
          </div>
          <button className='w-full h-1/6 rounded-md bg-greenmatrix text-gray-900 active:shadow-inner shadow-md shadow-black'>Login</button>
        </section>
      </article>

      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
      <div className=' w-30 h-30 border-greenmatrix border hover:duration-100 transition-colors hover:bg-greenmatrix duration-3000'></div>
    </main>
  )
}
