import React from 'react'

export default function Picture(props) {

  const displayPicture = props.pictures.map((picture,index) => {
    return (
      <div className='PicContainer'>
        <img className="pics" src={picture.url} alt="blah"></img>
        <form>
          <label>{props.users[index]}, please enter a caption.</label>
          <input name={index} onChange={props.handleClick}></input>
          <input type="submit" />
        </form>
      </div>
    )
  })

  return (
    <React.Fragment>
      {displayPicture}
    </React.Fragment>
  )
}
