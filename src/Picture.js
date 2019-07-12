import React from 'react'

export default function Picture(props) {
  return (
    <React.Fragment>
      <img className="pics" src={props.url} alt="Uh oh"/>
      <form>
      <label htmlFor="caption">{props.users.charAt(0).toUpperCase() + props.users.slice(1)}</label>
      <label htmlFor="caption">, please enter a caption:</label>
      <input name="caption" id="caption" />
      <input type="submit" />
      </form>
    </React.Fragment>
  )
}
