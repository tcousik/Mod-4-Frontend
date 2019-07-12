import React from 'react'
import Picture from './Picture'

export default function PicContainer(props) {
  let acc = -1

  const listPictures = props.pictures.map((picture) => {
    acc += 1
    return <Picture key={picture.id} url={picture.url} users={props.users[acc]}/>
  })

  return (
      <React.Fragment>
        <div className="PicContainer">
          {listPictures}
        </div>
      </React.Fragment>
  )
}
