import ChatBubble from "../Components/ChatBox";



export default function StreamerPage() {

    return (
        <>
            <div className="flex items-center h-screen w-full justify-center bg-white">

                <div className=" w-[90%] h-[90%] border border-2">
                <div className=" w-[90%] h-[90%] border border-2">
                    <div className="flex w-[100%] h-[100%]">  
                    <div className="h-[100%] w-[100%] border border-2 mb-4 "></div>   
                    <div className="h-[100%]">
                        <ChatBubble />
                    </div>
                    </div>
                </div>
                    <div className="flex justify-center items-center">
                        <button className="btn"> Stream Now</button>
                    </div>
                </div>


            </div>
        </>
    )
}