import React from 'react'
import CardWithTitle from './shared/components/CardWithTitle'
import document from '@public/document.png'
import star from '@public/Group 16.png'
import paper from '@public/paper.png'
import Image from 'next/image'
function dashboard() {
  return (
    <div className='grid grid-cols-3 gap-3'>{[1,2,3].map((e)=>(<CardWithTitle  cardTitle={'title'} cardBody={'ddd'} cardIcon={<Image src={star} alt='s'/>} cardPercentage={'08'} key={e}/>))}</div>
  )
}

export default dashboard