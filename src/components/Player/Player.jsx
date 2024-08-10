import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Player = ({ playerName = 'Guest', symbol, isActive }) => {
    const [name, setName] = useState(playerName);
    const [isEdit, setIsEdit] = useState(false);

    const activeStyle = isActive == true && 'border-2 animate-pulse';

    const typingHandler = (e) => {
        setName(e.target.value);
    };

    const handleEditClick = () => {
        if(name == '') {
            alert('Nama Player Tidak Boleh Kosong');
        }else{
            setIsEdit((prev) => !prev);
        }
    };

    return (
    <div className={`flex flex-wrap gap-1 p-3 basis-2/4 justify-around text-2xl border-zinc-900 rounded-lg
    ${activeStyle}`}>
        {isEdit ? 
            <input 
                className="salsa-regular w-1/2  bg-[#F2E8DC] border-b-2 border-b-zinc-900 focus:outline-none" 
                value={name}
                onChange={typingHandler}></input>    
            :
            <h1 className="salsa-regular basis-2/4 line-clamp-1">{name}</h1> 
        }
        
        
        <div className="flex gap-2 items-center justify-center basis-1/4">
            <p className="font-bold border-e-2 pe-2 border-[#8C877D]">{symbol}</p>
            <button className="font-bold text-lg bg-[#8C877D] px-3 rounded-lg" onClick={handleEditClick}>
                {isEdit ? "Save" : "Edit"}
            </button>
        </div>
    </div>
    );
}

export default Player;