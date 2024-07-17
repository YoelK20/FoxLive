import { useNavigate } from "react-router-dom"

export default function CardGame({ card }) {
    // console.log(card.im,"<<<")

    const navigate = useNavigate


    return (
        <>
                                            <div className="card w-[100px] h-[170px] shadow-xl flex justify-center items-center mb-3 ml-0">
                                        <figure className="bg-auto">
                                            <img
                                                src={card.imageUrl}
                                                onClick={()=>{navigate('/')}}
                                            />
                                        </figure>
                                        <figure className="bg-auto">
                                            <img src="" />
                                            </figure>                                  
                                    </div>
        </>
    )
}