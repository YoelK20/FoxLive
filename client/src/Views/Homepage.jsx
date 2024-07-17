import { io } from "socket.io-client"





export default function HomePage() {

    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
        console.log("connected");
        socket.on("game-state", (cards) => {
            //Cards isinya array kartu2 yang udah di acak 
            console.log(cards);
        })
    })


    return (

        <>
            
        </>
    )
}
