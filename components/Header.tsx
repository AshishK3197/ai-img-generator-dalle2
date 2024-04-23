import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    <header className='flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md'>
        {/* Left */}
        <div className='flex space-x-2 items-center'>
            <Image src='https://links.papareact.com/4t3'
            alt='logo'
            width={30}
            height={30} 
            />

            <div>
                <h1 className='font-bold'>In House <span className='text-violet-500'>AI</span> Image Generator</h1>
                <h2 className='text-xs'>Powered by DALLE 2, CHATGPT & Microsoft Azure!</h2>
            </div>
        </div>


        {/* right */}
        <div className='flex text-xs md:text-base divide-x items-center text-gray-500'>
            <Link href="https://github.com/AshishK3197"
            className='px-2 font-light text-right'
            >
                Enjoy the power of AI
            </Link>


            <Link href="https://github.com/AshishK3197"
            className='px-2 font-light'
            >
                Github Repo
            </Link>
        </div>
    </header>
  );
}

export default Header