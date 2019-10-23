import React,{useState} from 'react'

export default function CreateStatement({ statement }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(statement.statement.join(' '))
  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleInput = (e) => {
    const currentInput = e.target.value
    setText(currentInput)
  }


  if(toggle){
    return (
      <div><form><textarea onChange={handleInput} type ="text" value={text}/>
      <button onClick={handleClick}>save</button>
      </form>
      </div>
      
    )
  }

  return (
    <div key={statement.id} className="word-box">
      <p className="box-text">
        {statement.statement.join(' ')}
      </p>
      <button  onClick={handleClick} className="edit-button">Edit</button>
    </div>
  )
}
