import React from 'react'


function Cards({cardData,search}) {
  return (
    <>
      <div className='cards'>
       {cardData.filter((currElem)=>{ 
           return search===''?currElem:currElem.name.toLowerCase().includes(search.toLowerCase())
       }).map((currElem)=>{
        const {id,name,dsg,Image} = currElem
         return <>
         <div className='card_primary' key={id}>
          <div className='card_secondary'>{id}</div>
          <div className='image'><img src={Image} alt='' /></div>
          <div className='name'>{name}</div>
          <div className='dsg'>{dsg}</div>
        </div>
         </>
       })}
      </div>
    </>
  )
}

export default Cards