import React, { useEffect } from 'react'
import axios from 'axios'

const TicketsPage = (props) => {
  useEffect(() => {
     console.log(props)
  }, [])
  return (
    <div>TicketsPage</div>
  )
}

export default TicketsPage