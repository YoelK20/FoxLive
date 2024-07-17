


export default function CardGame({card, cb}){

    return(
        <>

                <div className="card-compact w-[40%] h-[50%] shadow-xl transition-transform border-2 border-black" onClick={() => cb(card.id)}>
                    <figure>
                        <img 
                            src={card.hidden ? "https://opengameart.org/sites/default/files/card%20back%20red.png" : card.imageUrl}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="font italic font text-2xl text-black"></h2>
                    </div>
                </div>
                

        </>
    )
}