import React from 'react'
import User from './User'

export default function UserContainer(props) {

  const listUsers = props.users.map((user) => {
    return <User key={user.id} name={user.name} />
  })

  return (
      <React.Fragment>
        {listUsers}
      </React.Fragment>
  )
}
