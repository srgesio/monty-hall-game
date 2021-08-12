import styles from '../styles/Game.module.css'
import Gift from "../components/gift"
import Door from "../components/door"
import DoorModel from "../model/door"
import { useState } from "react"
import { newDoors, updateDoors} from '../functions/doorfunctions'
import Link from 'next/link'

export default function Game(){
    const [door1, setDoor] = useState(new DoorModel(1))
    const [doors, setDoors] = useState(newDoors(3, 2))

    function showDoors(){
        return doors.map(door=>{
            return <Door key={door.id} value={door}
            onChange={newDoor => setDoors( updateDoors(doors, newDoor))}/>
        })
    }
    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {showDoors()}
            </div>
            <div className={styles.actions}>
                <Link href='/' passHref>
                    <button> Reiniciar</button>
                </Link>
            </div>
        </div>
    )
}