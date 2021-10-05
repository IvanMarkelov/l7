import { observer } from 'mobx-react'
import React from 'react'

export const MobXCounter = observer(({appState}) => {
    return (
        <>
        <h1>MOBX COUNTER</h1>
          <button onClick={appState.decrement}>-</button>
          <span>{appState.count}</span>
          <button onClick={appState.increment}>+</button>
        </>
    )
})
