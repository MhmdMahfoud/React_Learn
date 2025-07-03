import React, { useState } from "react";
function MyComponent() {
    const [name, setName] = useState();
    const [age, setAge] = useState("10");
    const updateName = () => {
        setName("ALI")
    }
const updateAge = ()=>{
    setAge("77")
}
    return (
        <>
            <div>
                <p>Name : {name}</p>
                <button onClick={updateName}> Set Name</button>
            </div>
            <div>
                <p>update age:{age}</p>
                <button onClick={updateAge}>update age</button>
            </div>
        </>
    )
}

export default MyComponent