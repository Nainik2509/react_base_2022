/**
 * This file is part of [Nainik Base Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainikmehta25@gmail.com]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.baseProject
 * @description Main Component File with consist of every module
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

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
