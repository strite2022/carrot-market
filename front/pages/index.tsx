// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className='bg-red-500'>
//       <h1 className='text-blue-100'>it works</h1>
//     </div>
//   )
// }

import type { NextPage } from "next";

const Home: NextPage=()=>{
  return(
    <div className="bg-red-500 text-center flex grid">
      <h1 className="text-blue-500">it works</h1>
    </div>
  );
};

export default Home;