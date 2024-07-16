import Peer from "peerjs";
import { useState } from "react";




export default function WatcherPage(){

    const peer = new Peer("watcher", {
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
    

    async function startWatch(e) {
        e.preventDefault();
        try {
            const peer = new Peer();
        
            const screen = document.getElementById('screen')
            console.log(e.target[0].value)  ;
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            });
            peer.connect("watcher");
            peer.on('connection', (conn) => {
                'connected'
            })
            const call = await peer.call("watcher", stream);
            console.log(call);
            call.on('stream', (stream) => {
                screen.srcObj = stream
                console.log('stream hit');
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
       <div className="flex items-center h-screen w-full justify-center bg-white">
                <div className="cols w-[700px] h-[500px] border border-slate-500 border-2">
                    <video id="screen" autoPlay={true} className="h-[100%] w-full border border-black border-2 mb-4">
                    </video>
                    <div className="flex justify-center items-center">
                        <form onSubmit={startWatch}>
                            <input type="text" name="" id="" />
                            <button className="btn">Watch Stream</button>
                        </form>
                        
                    </div>

                </div>
            </div>
        </>
    )
}