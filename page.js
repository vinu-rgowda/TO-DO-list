"use client"
import { list } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title, desc)
    setmainTask([...mainTask, { title, desc }])

    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0)
  renderTask=mainTask.map((t,i)=>{
    return (
    <li key={i} className='flex items-center justify-between '>
    <div className='text-bold items-center flex justify-between  w-2/3'>
      <h5 className='text-2xl font-bold'>{t.title}</h5>
      <h6 className='text-xl'>{t.desc}</h6>
    </div>
    <button
    onClick={()=>{deleteHandler(i)}}
    className='bg-red-500 text-white rounded px-3 py-2 items-center'>Delete</button>
    </li>
    )
  })

  return (
    <>
      <h1 className='bg-green-300 text-white text-center p-5 text-5xl font-bold'>
        ToDoList
      </h1>
      <form className='flex-wrap justify-spacearound' onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter the task'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button
          className='bg-black text-white rounded p-2 m-8 px-4 py-2 font-bold'>
          Add Task
        </button>

      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
      
    </>
  )
}

export default page