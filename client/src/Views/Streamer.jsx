import { io } from "socket.io-client";
import CardGame from "../Components/ Cards";
import { useEffect, useState } from "react";




export default function StreamerPage() {

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

                <div className=" w-[90%] h-[90%] border border-2 border-black rounded">   
                    <div className="h-[100%] w-[90%] border border-2 flex grid grid-cols-3 rows-3">
                        {cards.map((item) => {
                            return <CardGame card={item}/>
                        })}
                        
                        </div> 
                    <div className="flex justify-center items-center">
                        <button className="btn">Play now</button>
                    </div>
                </div>
            </div>
        </>
    )
}