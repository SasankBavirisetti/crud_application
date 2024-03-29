import React, { useRef } from 'react'
import './Crud.css'
import { useState } from 'react'

function Crud() {
    const list = [

        {
            name: "Michael Brown",
            rollNo: 1,
            grade: "Grade 6",
        },
        {
            name: "Jessica Miller",
            rollNo: 2,
            grade: "Grade 7",
        },
        {
            name: "William Davis",
            rollNo: 3,
            grade: "Grade 4",
        },
        {
            name: "Ashley Williams",
            rollNo: 4,
            grade: "Grade 12",
        },
        {
            name: "DavrollNo Johnson",
            rollNo: 5,
            grade: "Grade 11",
        },
        {
            name: "Sarah Taylor",
            rollNo: 6,
            grade: "Grade 8",
        },
    ];
    const [lists, setList] = useState(list);
    const [updateState, setUpdateState] = useState(-1);
    return (
        <div className='crud'>
            <h1 className='heading'>STUDENT DETAILS</h1>
            <AddList setList={setList} />
            <form onSubmit={handleSubmit}>
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <td>Roll No</td>
                            <td>Name</td>
                            <td>Grade</td>
                            <td>Operations</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists.map((current) => (
                                updateState === current.rollNo ? <EditList current={current} lists={lists} setList={setList} /> :
                                    <tr>

                                        <td className='column'>{current.rollNo}</td>
                                        <td className='name-column'>{current.name}</td>
                                        <td className='column'>{current.grade}</td>
                                        <td className='column'><button className='edit btn btn-action' required onClick={() => { handleEdit(current.rollNo) }}>Edit</button>
                                            <button required className='delete btn btn-action' type='button' onClick={() => handleDelete(current.rollNo)}>Delete</button></td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const grade = event.target.elements.grade.value;
        const newlist = lists.map((li) => (
            li.rollNo === updateState ? { ...li, name: name, grade: grade } : li
        ))
        setList(newlist);
        setUpdateState(-1)

    }
    function handleEdit(rollNo) {
        setUpdateState(rollNo);
    }
    function handleDelete(rollNo) {
        const newlist = lists.filter((li) => li.rollNo !== rollNo)
        setList(newlist);
    }
}

function EditList({ current, lists, setList }) {
    function handleInputRollNo(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.rollNo === current.rollNo ? { ...li, rollNo: value } : li
        ))
        setList(newlist);
    }
    function handleInputName(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.rollNo === current.rollNo ? { ...li, name: value } : li
        ))
        setList(newlist);
    }
    function handleInputgrade(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.rollNo === current.rollNo ? { ...li, grade: value } : li
        ))
        setList(newlist);
    }
    return (
        <tr>
            <td><input type='text' className='inp' onChange={handleInputRollNo} name='rollNo' value={current.rollNo} /></td>
            <td><input type='text' className='inp' onChange={handleInputName} name='name' value={current.name} /></td>
            <td><input type='text' className='inp' onChange={handleInputgrade} name='grade' value={current.grade} /></td>
            <td><button className='btn update-btn' type='submit'>Update</button></td>
        </tr>
    )
}
function AddList({ setList }) {
    const rollNoRef = useRef();
    const nameRef = useRef();
    const gradeRef = useRef();
    function handleSubmit(event) {
        event.preventDefault();
        const rollNo = event.target.rollNo.value;
        const name = event.target.name.value;
        const grade = event.target.grade.value;
        let newList =
        {
            rollNo, name, grade
        }
        setList((prevList) => {
            return prevList.concat(newList)
        })
        rollNoRef.current.value = "";
        nameRef.current.value = "";
        gradeRef.current.value = "";
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' required name='rollNo' className='inp' placeholder='Enter RollNo' ref={rollNoRef} />
            <input type='text' required name='name' className='inp name' placeholder='Enter Name' ref={nameRef} />
            <input type='text' required name='grade' className='inp' placeholder='Enter Grade' ref={gradeRef} />
            <button className='add-btn btn' type='submit'>Add</button>
        </form>
    )
}
export default Crud;
