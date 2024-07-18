import { io } from "socket.io-client";
import CardGame from "../Components/ Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../helpers/baseUrl";
import { useNavigate } from "react-router-dom";
const socket = io(baseUrl, {
    autoConnect: false
});



export default function CardPage() {

    const [cards, setCards] = useState([]);
    const [otherPlayer, setOtherPlayer] = useState("")
    const [targetCard, setTargetCard] = useState({})
    const [loading, setLoading] = useState(false)
    const [winner, setWinner] = useState("")
    const nav = useNavigate()

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
            // console.log(cards);
            if(cards) setLoading(true)
            setCards(cards);
            if (targetCard) {
                setTargetCard(targetCard);
            }
            
            console.log(targetCard);
        })

        socket.on("winner", (username) => {
            setWinner(username)
            if(username !== localStorage.username){
                toast.success(`${username} has won the game!!!`)
            }else {
                toast.success(`You has won the game!!!`)
            }
        })

        return () => {
            socket.off('game-state')
            socket.off("winner")
            socket.disconnect()
        }
    }, [])

    return (
        <>
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/009/298/086/large/nafise-zeynali-poker-table.jpg?1518186444')" }}>
                </div>
                <div className="flex flex-col items-center justify-center h-screen w-full absolute">
                    {!loading ? (
                        <>
                        <div className="bg-black mt-20 mb-[-20px] p-10 rounded-full ">
                        <h1 className="text-white text-2xl font-bold">Waiting For Opponent</h1>
                        </div>
                        </>
                    ): (
                    <>
                    <h1 className="text-white mb-[200px] text-2xl font-bold">Search For: {targetCard.cardName}</h1>
                    <div className="card-grid">
                        {cards.map((item, index) => (
                            <CardGame key={index} card={item} cb={handleClickCard} />
                        ))}

                        {winner &&
                        <div className="flex justify-center items-center ml-[290%]">
                        <a href="/CardGame">
                        <button className="btn glass"> Restart </button>
                        </a>
                    </div>
                        }

                    </div>
                    
                    </>
                    )
                    }
                </div>
            </div>
        </>
    )
}