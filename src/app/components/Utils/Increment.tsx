'use client'

import { useState } from 'react'

export function Increment() {
  const [qtde, setQtde] = useState(1)

  function handleIncrementQtde() {
    setQtde(qtde + 1)
  }

  function handleDecrementQtde() {
    if (qtde === 1) {
      setQtde(1)
    } else {
      setQtde(qtde - 1)
    }
  }

  return (
    <>
      <button
        className="h-10 w-6 rounded-l bg-basebutton text-purpledark hover:text-purple"
        type="button"
        onClick={handleDecrementQtde}
      >
        -
      </button>
      <input
        className="h-10 w-9 bg-basebutton p-2 text-basetitle"
        type="text"
        value={qtde}
        onChange={(e) => setQtde(Number(e.target.value))}
      />
      <button
        className="h-10 w-6 rounded-r bg-basebutton text-purpledark hover:text-purple"
        onClick={handleIncrementQtde}
        type="button"
      >
        +
      </button>
    </>
  )
}
