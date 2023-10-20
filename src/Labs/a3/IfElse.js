function IfEles(){
 let true1 = true;
 let false1 = false;
//  console.log('If else');
//  if(true1) {
//     console.log('true1'); 
//  }
 
//  if(!false1) {
//     console.log('!false1');
//  } else {
//     console.log('false1');
//  }
 return(
    <div>
       <h2>If Else</h2>
       { true1 && <p>true1</p> } 
       {/* This expression checks if the true1 variable is true. If true1 is true, it renders a paragraph (<p>) element with the text "true1." */}
       { !false1 ? <p>!false1</p> : <p>false1</p> }
       {/* This is another JavaScript expression for conditional rendering. It's used to handle the false1 variable.
!false1 ? <p>!false1</p> : <p>false1</p>: This expression checks if the false1 variable is false. If false1 is false, it renders a paragraph with the text "!false1." If false1 is true, it renders a paragraph with the text "false1." */}
    </div>
 )
}
export default IfEles;