import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-green-600 text-white text-3xl p-4 text-center'>
      User: {userid}
    </div>
  )
}

export default User
