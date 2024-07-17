


export default function CardGame({card}){

    return(
        <>

                <div className="card-compact w-[40%] h-[50%] shadow-xl transition-transform border-2 border-black">
                    <figure>
                        <img
                            src={card.imageUrl}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="font italic font text-2xl text-black"></h2>
                    </div>
                </div>
                

        </>
    )
}