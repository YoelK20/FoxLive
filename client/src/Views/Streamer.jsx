import CardGame from "../Components/ Cards";


export default function StreamerPage() {

    return (
        <>
            <div className="flex items-center h-screen w-full justify-center bg-white">

                <div className=" w-[90%] h-[90%] border border-2 border-black rounded">   
                    <div className="h-[100%] w-[90%] border border-2 flex grid grid-cols-3 rows-3">
                        <CardGame />
                        </div> 
                    <div className="flex justify-center items-center">
                        <button className="btn">Play now</button>
                    </div>
                </div>
            </div>
        </>
    )
}