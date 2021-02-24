import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <div className=" bg-gradient-to-r from-yellow-400 via-red-500 to-pink-100 py-4 px-8 bg-black-700 text-white flex justify-between">
        <Link href="/">
        <img src="/Images/nextech-logo.png"   
        width={150}
        height={100} 
        
        alt="Your Name"/>
        </Link>
 
            <div className="flex justify-between">
                <div className="ml-8 text-2xl py-4  font-bold "><Link href=' '>About</Link></div>
                <div className="ml-8 text-2xl py-4 font-bold "><Link href=' '>Portfolio</Link></div>
                <div className="ml-8 text-2xl py-4 font-bold  "><Link href=' '>Pricing</Link></div>
                <div className="ml-8 text-2xl py-4 font-bold "><Link href=' '>Benefit</Link></div>
                <div className="ml-8 text-2xl py-4 font-bold "><Link href=' '>FAQ</Link></div>
                <div className="ml-8 text-2xl py-4 font-bold "><Link href=' '>Contact Number</Link></div>
            </div>

            <style jsx>{`
        .ml-8 {
          color:black;
        }
    

      `}</style>
        </div>       
    )
}
