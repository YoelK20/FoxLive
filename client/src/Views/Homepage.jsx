import React from "react"

import imageCard1 from '../assets/card1.png'
import imageCard2 from '../assets/card2.png'
import imageCard3 from '../assets/card3.png'
import imageCard4 from '../assets/card4.png'
import imageCard5 from '../assets/card5.png'
import imageCard6 from '../assets/card6.png'
import imageCard7 from '../assets/card7.png'
import imageCard8 from '../assets/card8.png'
import imageCard9 from '../assets/card9.png'
import imageCard10 from '../assets/card10.png'
import imageCard11 from '../assets/card11.png'

import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="h-screen bg-slate-100 overflow-hidden flex-cols justify-center items-center">
                <div className="flex justify-center gap-4 ml-4 pt-10 pl-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered-black w-24 md:w-auto h-10 bg-white"
                    />
                    <button className="w-20 text-black rounded-lg bg-white hover:bg-slate-200 border border-slate-500">Search</button>
                </div>
                <div className="w-[100%] m-2 px-6 pt-4 rounded text-black overflow-auto lg:w-[75%] lg:ml-0">
                    <div className="mb-4 w-full">
                        <h1 className="my-5 font-bold text-2xl">Featured Games</h1>
                        <div className="flex overflow-auto">
                            <div className="min-w-[100%] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] flex gap-4">
                                <img onClick={()=>{navigate('/CardGame')}} className="rounded w-[200px] h-[200px]" src={imageCard1} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard2} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard3} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard4} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard5} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard6} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard7} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard8} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard9} alt="" /> 
                                <img className="rounded w-[200px] h-[200px]" src={imageCard10} alt="" />
                                <img className="rounded w-[200px] h-[200px]" src={imageCard11} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
                        <div className="flex overflow-auto">
                            <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                                <img className="rounded" src={imageCard1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
