import { io } from "socket.io-client";
import CardGame from "../Components/ Cards";
import { useEffect, useState } from "react";
const socket = io("http://localhost:3000", {
    autoConnect: false
});



export default function CardPage() {

    const [cards, setCards] = useState([]);

    function handleClickCard(id) {
        socket.emit("opencard", id);
        console.log(id);
    }
    useEffect(() => {
        socket.connect()
        
        

        socket.on("game-state", (cards, targetCard) => {
            //Cards isinya array kartu2 yang udah di acak 
            //target card kartu yang dicari
            console.log(cards);
            setCards(cards);
        })

        return () => {
            socket.off('game-state')
            socket.disconnect()
        }
    }, [])

    return (
        <>
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/009/298/086/large/nafise-zeynali-poker-table.jpg?1518186444')" }}>
                </div>
                <div className="flex flex-col items-center justify-center h-screen w-full absolute">
                    <h1 className="text-black mb-[200px] text-xl font-bold">Search For:</h1>
                    <div className="card-grid">
                        {cards.map((item, index) => (
                            <CardGame key={index} card={item} cb={handleClickCard} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}