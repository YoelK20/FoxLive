import { useNavigate } from "react-router-dom"

export default function CardGame({ card }) {
    // console.log(card.im,"<<<")
    const navigate = useNavigate()

    return (
        <>
                                            <div className="card bg-base-100 w-[250px] h-[380px] shadow-xl">
                                        <figure className="bg-auto">
                                            <img
                                                src={imgUrl}

                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-white">
                                                {name}
                                                <div className="badge badge-secondary text-white">NEW</div>
                                            </h2>
                                            {/* <p className="text-white">{description}</p> */}
                                            <div className="card-actions justify-end h-[20px]">
                                                <button className="btn bg-slate-800 text-white hover:bg-slate-500">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
        </>
    )
}