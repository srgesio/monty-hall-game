import Gift from "../components/gift"
import Door from "../components/door"
import DoorModel from "../model/door"
import { useState } from "react"

export default function Home() {

  const [door1, setDoor] = useState(new DoorModel(1))

  return (
    <div>
      <Door door={door1}/>
    </div>
  )
}
