import Peer from "peerjs";



export default function StreamerPage() {
    const peer = new Peer("streamer", {
        host: "localhost",
        port: 9000,
        path: "/myapp",
        config: {
            'iceServers': [
                { url: 'stun:stun1.l.google.com:19302' },
                {
                    url: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                }
            ]
        }
    })

    async function startStream() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            });

            const screen = document.getElementById('screen');
            screen.srcObject = stream
            
            peer.on('open', (id) => {
                console.log(id, 'peer id');
                
            })

            peer.on('call', (call) => {
                //answer call
                console.log('answer');
                call.answer(stream);
            })

            


        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>
            <div className="flex items-center h-screen w-full justify-center bg-white">
                <div className="cols w-[700px] h-[500px] border border-2">
                    <video autoPlay={true} id="screen" className="h-[100%] w-[100%] border border-2 mb-4">
                    </video>
                    <div className="flex justify-center items-center">
                        <button className="btn" onClick={() => startStream()}> Stream Now</button>
                    </div>

                </div>
            </div>
        </>
    )
}