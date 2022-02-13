import React from 'react'

const Card = ({id, name, email, imgSource}) => {
  return (
    <div key={id} className='bg-light-green dib br3 pa3 ma2 grow'>
      <img src={imgSource} alt={'robots'} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;