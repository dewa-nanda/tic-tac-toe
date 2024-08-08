import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Player = ({ playerName = 'Guest', status }) => {
    const [name, setName] = useState(playerName);
    const [isEdit, setIsEdit] = useState(false);

    const typingHandler = (e) => {
        setName(e.target.value)
    };

    const toggleEdit = () => {
        if(name == '') {
            alert('Nama Player Tidak Boleh Kosong');
        }else{
            setIsEdit((prev) => !prev)
        }
    };

    return (
    <div className="flex flex-wrap gap-1 p-3 basis-2/4 justify-around text-2xl border-2 border-sky-500 rounded-lg">
        {isEdit ? 
            <input 
                className="salsa-regular w-1/2 ps-2" 
                value={name} 
                onChange={typingHandler}></input>    
            :
            <h1 className="salsa-regular">{name}</h1> 
        }
        
        
        <div className="flex gap-2 items-center justify-center">
            <p className="font-bold border-e-2 pe-2 border-[#8C877D]">{status}</p>
            <button className="font-bold text-lg bg-[#8C877D] px-3 rounded-lg" onClick={toggleEdit}>
                {isEdit ? "Confirm" : "Edit"}
            </button>
        </div>
    </div>
    );
}

export default Player;