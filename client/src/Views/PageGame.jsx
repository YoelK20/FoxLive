import { io } from "socket.io-client";
import CardGame from "../Components/ Cards";
import { useEffect, useState } from "react";
const socket = io("http://localhost:3000", {
    autoConnect: false
});



export default function CardPage() {

    

    const [cards, setCards] = useState([]);
    
    const [otherPlayer, setOtherPlayer] = useState("")

    function handleClickCard(id) {
        socket.emit("opencard", id);
        console.log(id);
    }

    useEffect(() => {
        // console.log(socket.auth);
        socket.auth = {
            access_token: localStorage.access_token
        }
        socket.connect()

        
        
        socket.on("players", (players) => {
            const other = players.find(username => username !== localStorage.username)
            setOtherPlayer(other)
            
            console.log('other player ' + other);
        })

        
        

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
            <p>My username {localStorage.username}</p>
            <p>Player 2 {otherPlayer}</p>
           <div className="flex items-center h-screen w-full justify-center bg-white">
            <div className="flex grid grid-cols-3 w-[70%]] h-[60%] border border-2 border-black overflow">
                {cards.map((item, index) => (
                    <CardGame key={index} card={item} cb={handleClickCard}/>
                ))}
            </div>
        </div>
        </>
    )
}