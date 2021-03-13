import React from 'react'

const DeleteContext = React.createContext({
    deleteFlight: "false",
    setDeleteFlight: () => {}
})

export default DeleteContext