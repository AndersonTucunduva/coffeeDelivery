'use client'

import { useState } from 'react'

export function Increment() {
  const [qtde, setQtde] = useState(1)

  function handleIncrementQtde() {
    setQtde(qtde + 1)
  }

  function handleDecrementQtde() {
    setQtde(qtde - 1)
  }

  return (
    <>
      <button
        className="h-10 w-6 rounded-l bg-basebutton text-purple hover:text-purpledark"
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
        className="h-10 w-6 rounded-r bg-basebutton text-purple hover:text-purpledark"
        onClick={handleIncrementQtde}
        type="button"
      >
        +
      </button>
    </>
  )
}
