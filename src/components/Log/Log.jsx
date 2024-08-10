/* eslint-disable react/prop-types */
const Log = ({turns}) => {
    return (
        <div className="w-full lg:w-1/5 lg:mx-auto bg-[#F2E8DC] text-[#595248] mt-5 rounded-md p-2 ">
            <h1 className="font-bold text-center text-2xl pb-2 border-b-2 border-amber-950">Log Player</h1>
            <div className="flex flex-col-reverse">
                {turns.map((turn, index) => {
                return(
                    <div key={index} className="text-center font-bold slide-in-text">
                        <p>{turn.player} Selected [{turn.square.row} , {turn.square.col}]</p>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default Log;