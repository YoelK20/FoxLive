import { useNavigate } from "react-router-dom"

export default function CardGame({ card, cb }) {
    // console.log(card.im,"<<<")
    const navigate = useNavigate()

    return (
        <>
            <div className="card bg-base-100 w-[250px] h-[380px] shadow-xl" onClick={() => cb(card.id)}>
            <figure className="bg-auto">
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