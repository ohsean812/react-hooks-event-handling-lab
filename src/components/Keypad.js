// Code Keypad Component Here

function Keypad (){
    function pressKey (){
        console.log("Entering password...")
    }
    return (
        <div>
            <input
            type="password"
            onChange={pressKey}
            />
        </div>
    )
}

export default Keypad;