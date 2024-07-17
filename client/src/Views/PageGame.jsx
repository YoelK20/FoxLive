import { io } from "socket.io-client";
import CardGame from "../Components/ Cards";
import { useEffect, useState } from "react";




export default function CardPage() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const socket = io("http://localhost:3000");
        
        socket.on("connect", () => {
            console.log("connected");
            socket.on("game-state", (cards, targetCard) => {
                //Cards isinya array kartu2 yang udah di acak 
                //target card kartu yang dicari
                console.log(cards);
                setCards(cards);
            })
            
        })
    }, [])
   
    return (
        <>
           <div className="flex items-center h-screen w-full justify-center bg-white">
            <div className="flex grid grid-cols-3 w-[50%] h-[70%] border border-2 border-black pt-0 mt-0">
                {cards.map((item, index) => (
                    <CardGame key={index} card={item} />
                ))}
            </div>
        </div>
        </>
    )
}