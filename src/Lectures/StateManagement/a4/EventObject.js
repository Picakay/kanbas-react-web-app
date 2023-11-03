function EventObject() {
    const handleEvent = (event) => {
        console.log(event.target);
        console.log(event.type);
        console.log(event.clientX);
        console.log(event.clientY);
        console.log(event.altKey);
        console.log(event.ctrlKey);
        console.log(event.shiftKey);
        console.log(event.metaKey);
    };

    return (
        <div>
            <h2>Event Object</h2>
            <button onClick={handleEvent}>Click Me</button>
        </div>
    );
}

export default EventObject;