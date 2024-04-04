import React, { useState } from 'react'
import Cards from './Cards'
import { data } from './Data'
import Nav from './Nav'

const uniqueList = [
  ...new Set((data.map((curElem)=>{
  return curElem.dsg
}))),'All',]
function Card() {
  const [search,setSearch] = useState('')
  const [info,setInfo] = useState(data)
  const [navigate,setNavigate]=useState(uniqueList)
  
  const filterItem = (dsg) =>{
    if(dsg==='All'){
      return setInfo(data)
    }
    const updateList = data.filter((curElem)=>{
       return curElem.dsg===dsg
    })
    setInfo(updateList)
  }
  return (
    <div>
      <Nav filterItem = {filterItem}  navigate={navigate} setSearch={setSearch}/>
      <Cards cardData={info} search={search} setInfo={setInfo}/>
    </div>
  )
}

export default Card
