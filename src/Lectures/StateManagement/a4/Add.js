function Add({a, b, add2}){
        const add = (a, b) => {
            return parseInt(a) + parseInt(b);
        };
    return(
        <div>
            <h3>
                Add({a}, {b}) = {add2(a, b)} 
                {/* you can pass functions to use, here we use add2 from FunctionsAsParameters.js, we passed it at the first line */}
            </h3>
        </div>
    );
}

export default Add;