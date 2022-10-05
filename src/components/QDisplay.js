
import React from 'react'
import {useNavigate} from "react-router-dom"

const QDisplay = ({question,handleChange,index,marks}) => {
    const handler = (e) =>{
        let temp = question.answer === e.target.value ? 1 :0;
        handleChange(index,temp);
    }
    const HandleSubmit=()=>{

    }
    const navigate=useNavigate()

    return (
        <div style={{"textAlign":"left","border": "1px solid black","margin":"4px","padding":"1px"}}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                    {question.question}
                    </h4>
                    <div onChange={handler}>
                        <input type="radio" value="A" name={index} /> <span>{question.options[0]}</span> &nbsp;
                        <input type="radio" value="B" name={index} /> <span>{question.options[1]}</span> &nbsp;
                        <input type="radio" value="C" name={index} /> <span>{question.options[2]}</span> &nbsp;
                        <input type="radio" value="D" name={index} /> <span>{question.options[3]}</span> &nbsp;
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default QDisplay
