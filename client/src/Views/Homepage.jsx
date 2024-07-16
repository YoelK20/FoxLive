import { io } from "socket.io-client"





export default function HomePage() {

    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
        console.log("connected");
        socket.on("game-state", (message) => {
            console.log(`msg: ${message}`);
        })
    })


    return (

        <>
            <div className="flex items-center h-screen w-full justify-center bg-white">
                <div className="flex w-[700px] h-[700px] justify-center items-center">
                    <h1>
                        Welcome to PuberTv
                    </h1>
                </div>
            </div>
        </>
    )
}
