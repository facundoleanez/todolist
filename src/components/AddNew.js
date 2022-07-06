import React, {useState} from 'react';


function AddNew(props) {
    const[inputText, setInputText] = useState("");
    const[inputDate, setInputDate] = useState("");

    return(
        <div className="row g-3 mt-3 d-flex justify-content-center" >
            <div className="col-auto">
                <label htmlFor="input-task" className="d-none">Add a new item</label>
                <input type="text" className="form-control" id="input-task" placeholder="Add new..." value={inputText} onChange={event => setInputText(event.target.value)}/>
            </div>
            <div className="col-auto d-flex">
                <input type="date" className="form-control" id="input-date" value={inputDate} onChange={event => setInputDate(event.target.value)} />
                <button className="btn btn-primary mb-3" onClick={()=>props.addNewTask(inputText,inputDate)}>Add</button>
            </div>

        </div>
    )
};

export default AddNew;