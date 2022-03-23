import React from 'react'
import ClickCounter from './ClickCounter'

const App = () => {
  return (
    <div>
      Apps {process.env.NODE_ENV} {process.env.name}
      <ClickCounter />
    </div>
  )
}

export default App
