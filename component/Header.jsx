import { ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='bg-[#F6EEE7] flex justify-between items-center h-[8vh]'>

            <div className='flex justify-start items-center gap-8'>

                <Image src={'/slack.png'} width={120} height={100} alt="Slack Logo" />

                <nav className='flex justify-center items-center gap-5'>
                    <div className='flex justify-center items-center gap-0.5'>
                        <Link className='text-sm font-semibold ' href={'#'}>Product</Link>
                        <ChevronDown className='mt-0.5' width={15} />
                    </div>
                    <Link className='text-sm font-semibold' href={'#'}>Enterprise</Link>
                    <Link className='text-sm font-semibold ' href={'#'}>Resources</Link>
                    <Link className='text-sm font-semibold ' href={'#'}>Pricing</Link>
                </nav>
            </div>


            <div className='flex justify-end items-center gap-10'>
                <div className='flex justify-center items-center gap-10'>
                    <Search width={20} />
                    <Link className='text-sm font-medium' href={'#'}>Sign In</Link>
                </div>

                <div className='flex justify-between items-center gap-3.5'>
                    <Link className='text-sm px-5 py-2  text-[#611f69] rounded-sm outline outline-[#611f69] font-semibold tracking-wide uppercase' href={'#'}>Talk To Sales</Link>
                    <Link className='text-sm px-5 py-2 text-background  bg-[#611f69] rounded-sm outline outline-[#611f69] font-semibold tracking-wide uppercase' href={'#'}>Try For Free</Link>
                </div>
            </div>

        </header>
    )
}

export default Header