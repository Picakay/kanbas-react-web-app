function ClickEvent(){
    const handleClickNoArguments = () => {
        alert("You Clicked the button!");
    };
    const alertAdd = (a, b) => {
        alert(a + b);
    };
    return(
        <div>
            <h2>Click Event</h2>
            <button onClick={handleClickNoArguments}>Click Me</button>
            <br />
            <button onClick={() => handleClickNoArguments()}>
                Click No Arguments, embedded and parentheses
            </button>
            <button onClick={() => alertAdd(1,2)}>
                Click Add, embedded and parentheses
            </button>
            
            {/* old use */}
            <button
                onClick={function () {
                    alertAdd(1,2);
                }}>
                Click Add, function
            </button>
        </div>
    )
}

export default ClickEvent;