import iconStar from "../assets/icon-star.svg"
 import { InputButton } from "./InputButton"
 
 export function CardInicial ({ handleMudarNotaAvaliacao, handleSubmit}) {
     return(
         <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103" >
         <div className="bg-dark-blue w-fit p-4 rounded-full mb-4 font-overpass"  >
           <img src={iconStar} alt="Icon Star" />
         </div>
         <h1 className="text-2xl font-bold mb-2.5 "> How did we do? </h1>
 
         <p className="text-medium-grey text-sm mb-6 leading-1 ">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
 
         <div className="flex justify-between mb-6" >
           <InputButton handleMudarNotaAvaliacao={handleMudarNotaAvaliacao} value={1}/>
           <InputButton handleMudarNotaAvaliacao={handleMudarNotaAvaliacao} value={2}/>
           <InputButton handleMudarNotaAvaliacao={handleMudarNotaAvaliacao} value={3}/>
           <InputButton handleMudarNotaAvaliacao={handleMudarNotaAvaliacao} value={4}/>
           <InputButton handleMudarNotaAvaliacao={handleMudarNotaAvaliacao} value={5}/>
 
           
         </div>
 
         <button className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3  hover:bg-white hover:text-orange hover:cursor-pointer" onClick={handleSubmit}>Submit</button>
       </div>
     )
 }