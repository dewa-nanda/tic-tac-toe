import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Player = ({ playerName = 'Guest', symbol }) => {
    const [name, setName] = useState(playerName);
    const [isEdit, setIsEdit] = useState(false);
    const [active, setIsActive] = useState();

    const typingHandler = (e) => {
        setName(e.target.value);
    };

    const toggleEdit = () => {
        
        if(name == '') {
            alert('Nama Player Tidak Boleh Kosong');
        }else{
            isEdit !== true ? setIsActive('border-2') : setIsActive('');
            setIsEdit((prev) => !prev);
        }
    };

    return (
    <div className={`flex flex-wrap gap-1 p-3 basis-2/4 justify-around text-2xl border-sky-500 rounded-lg
    ${active}`}>
        {isEdit ? 
            <input 
                className="salsa-regular w-1/2 ps-2 bg-[#F2E8DC] border-b-2 border-b-zinc-900 focus:outline-none" 
                value={name} 
                onChange={typingHandler}></input>    
            :
            <h1 className="salsa-regular">{name}</h1> 
        }
        
        
        <div className="flex gap-2 items-center justify-center">
            <p className="font-bold border-e-2 pe-2 border-[#8C877D]">{symbol}</p>
            <button className="font-bold text-lg bg-[#8C877D] px-3 rounded-lg" onClick={toggleEdit}>
                {isEdit ? "Confirm" : "Edit"}
            </button>
        </div>
    </div>
    );
}

export default Player;