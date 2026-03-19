import React, { useState } from 'react'

const styles = {
  container: {
    width: '350px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    background: '#f9f9f9'
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    width: '70%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  addBtn: {
    padding: '8px 12px',
    background: 'blue',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  itemBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    background: '#fff',
    padding: '10px',
    borderRadius: '5px'
  },
  text: {
    margin: 0
  },
  deleteBtn: {
    marginRight: '5px',
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  editBtn: {
    background: 'green',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

export default function Todo() {
  const [text,settext]=useState('')
  const [data,setdata]=useState([])
  const [editindex,seteditindex]=useState(null)

  function handlechange(e){
    settext(e.target.value)
  }

  function handlesubmit(e){
    e.preventDefault()

    if(editindex != null){
      const updatedList=[...data]
      updatedList[editindex]=text
      setdata(updatedList)
      seteditindex(null)
    } else {
      setdata([...data,text])
    }
    settext('')
  }

  function Delete(id){
    let ans=data.filter((el,i)=> i !== id)
    setdata(ans)
  }

  function Edit(id){
    settext(data[id])
    seteditindex(id)
  }

  return (
    <div style={styles.container}>
      
      <form onSubmit={handlesubmit} style={styles.form}>
        <input 
          type="text" 
          placeholder='enter name' 
          value={text} 
          onChange={handlechange}
          style={styles.input}
        />
        <input type="submit" style={styles.addBtn} />
      </form>

      {
        data.map((el,i)=>{
          return (
            <div key={i} style={styles.itemBox}>
              <li style={styles.text}>{el}</li>

              <div>
                <button onClick={()=>Delete(i)} style={styles.deleteBtn}>
                  delete
                </button>

                <button onClick={()=>Edit(i)} style={styles.editBtn}>
                  edit
                </button>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}


