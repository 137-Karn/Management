import React from 'react'

function Nav({filterItem,navigate,setSearch}) {
  return (
    <>
    <nav className='nav'>
      <div className='nav_primary'>
      {navigate.map((curElem)=>{
         return <>
         <button className='btn' onClick={()=>filterItem(curElem)}>{curElem}</button>
       </>
    })}
      </div>
        <input type='search' placeholder='search' className='search' onInput={(e)=>setSearch(e.target.value)}></input>
    </nav>
    </>
  )
}

export default Nav