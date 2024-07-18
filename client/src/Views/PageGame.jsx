import { io } from "socket.io-client";
import CardGame from "../Components/ Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const socket = io("http://localhost:3000", {
    autoConnect: false
});



export default function CardPage() {

    const [cards, setCards] = useState([]);
    
    const [otherPlayer, setOtherPlayer] = useState("")
    const [targetCard, setTargetCard] = useState({})

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
            if (targetCard) {
                setTargetCard(targetCard);
            }
            
            console.log(targetCard);
        })

        socket.on("winner", (username) => {
            if(username !== localStorage.username){
                toast.success(`${username} has won the game!!!`)
            }else {
                toast.success(`You has won the game!!!`)
            }
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
                    <h1 className="text-black mb-[200px] text-xl font-bold">Search For: {targetCard.cardName}</h1>
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