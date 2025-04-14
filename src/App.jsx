import { useState } from "react"
import { CardFinal } from "./components/CardFinal"
import { CardInicial } from "./components/CardInicial"

export function App () {
  const  [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmit] = useState(false) 

  function handleMudarNotaAvaliacao(nota){
    console.log(nota)
    setNotaAvaliacao(nota);
  }

  function handleSubmit(){
    if(notaAvaliacao !== 0){
      setSubmit(true)
      return
    }

    alert("Please, choose a note!")
  }
  return(
    submited === false ? (
      <CardInicial handleMudarNota={handleMudarNotaAvaliacao}/>
    ) : (
      <CardFinal/>
    )

  )
}