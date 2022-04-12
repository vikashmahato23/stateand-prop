
  import { useState } from "react";
var item={
    books: 10,
    notebooks: 13,
    pens: 40,
  }
  export const Inventory = () => {
    const [inv, setInv] = useState(item.books);
    const [note, setnote] = useState(item.notebooks);
    const [pen, setpen] = useState(item.pens);
   
    var sum=inv+note+pen
  
    const btnadd =(val)=>{
        console.log(val)
        if(val=="pen"){
            setpen(pen+1)
        }
        else if(val=="note"){
            setnote(note+1)
        }
        else{
            setInv(inv+1)
        }
    }
    const btnsub =(val)=>{
   
        if(val=="pen"){
            if(pen>0){
                setpen(pen-1)
            }
           
        }
        else if(val=="note"){
            if(note>0){
                setnote(note-1)
            }
        }
        else{
            if(inv>0){
                setInv(inv-1)
            }
        }
    }
      // Create add and remove functions here that changes the
      // state.
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "3px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <div className="items">
          <span>Books: </span>
          <button className="circlularButton" onClick={()=>btnadd("book")}>+</button>
          <button className="circlularButton"  onClick={()=>btnsub("book")}>-</button>
          <span>{inv}</span>
        </div>
        <div className="items">
          <span>Notebooks: </span>
          <button className="circlularButton" onClick={()=>btnadd("note")}>+</button>
          <button className="circlularButton"  onClick={()=>btnsub("note")}>-</button>
          <span>{note}</span>
        </div>
        <div className="items">
          <span>Pen: </span>
          <button className="circlularButton" onClick={()=>btnadd("pen")}>+</button>
          <button className="circlularButton"  onClick={()=>btnsub("pen")}>-</button>
          <span>{pen}</span>
        </div>

              {/*calculate total and show it*/}
        total: {sum}
      </div>
    );
  };
  