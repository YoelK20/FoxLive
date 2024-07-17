



export default function ChatBubble() {

    return (
        <>
            
                <div className="flex flex-col flex-grow w-full h-[100%] max-w-xl bg-base-100 shadow-xl rounded-lg overflow-hidden">
                    <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                        <div className="chat chat-end flex flex-col">
                            <div>Raditya Dika</div>
                            <div className="chat-bubble chat-bubble-accent">Bayi ambil tanganku</div>
                        </div>
                        <div className="chat chat-end flex flex-col">
                            <div>You</div>
                            <div className="chat-bubble chat-bubble-accent">Aku mau kamu jadi suamiku</div>
                        </div>
                        <div className="chat chat-end flex flex-col">
                            <div>Raditya Dika</div>
                            <div className="chat-bubble chat-bubble-accent">Karena kamu manusia besiku</div>
                        </div>
                        <div className="chat chat-end flex flex-col">
                            <div>You</div>
                            <div className="chat-bubble chat-bubble-accent">Dan aku cinta kamu 3000</div>
                        </div>
                    </div>
                    <form className="bg-accent p-4 flex flex-row">
                        <input className="flex items-center w-full rounded px-3" type="text" placeholder="Type your message…" />
                        <button className="btn btn-base-100 ml-4" type='submit'>Send</button>
                    </form>
                </div>
        </>
    )
}