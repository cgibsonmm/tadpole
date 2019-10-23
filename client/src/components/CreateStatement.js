import React,{useState} from 'react'

export default function CreateStatement({ statement }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(statement.statement.join(' '))

  const handleClick = (e) => {
    setToggle(!toggle)

  }

  const handleInput = (e) => {
    const currentInput = e.target.value
    setText(currentInput)
  }

 


  if(toggle){
    return (
      <div><textarea onChange={handleInput} type ="text" value={text}/>
      <button onClick={handleClick}>save</button>
      
      </div>
      
    )
  }

  return (
    <div key={statement.id} className="word-box">
      <p className="box-text">
        {text}
      </p>
      <button  onClick={handleClick} className="edit-button" value={text}>Edit</button>
    </div>
  )
}
