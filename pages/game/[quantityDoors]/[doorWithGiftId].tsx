import styles from '../../../styles/Game.module.css'
import Gift from "../../../components/gift"
import Door from "../../../components/door"
import DoorModel from "../../../model/door"
import { useEffect, useState } from "react"
import { newDoors, updateDoors} from '../../../functions/doorfunctions'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Game(){
    const [doors, setDoors] = useState([])
    const [isValid, setIsValid] = useState(false)
    const router = useRouter()
    const quantityDoors = +router.query.quantityDoors
    const doorWithGiftId = +router.query.doorWithGiftId
    
    useEffect(()=>{
        const validQuantity = quantityDoors >= 3 && quantityDoors <= 100
        const validDoorWithGiftId = doorWithGiftId >= 1 && doorWithGiftId <= quantityDoors
        
        setIsValid(validQuantity && validDoorWithGiftId)
    },[quantityDoors, doorWithGiftId])
    useEffect(()=>{
        setDoors(newDoors(+quantityDoors, +doorWithGiftId))
    },[doorWithGiftId, quantityDoors, router.query])


    function showDoors(){
        return doors.map(door=>{
            return <Door key={door.id} value={door}
            onChange={newDoor => setDoors( updateDoors(doors, newDoor))}/>
        })
    }
    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {isValid ? showDoors(): <h2>Valores Inválidos!</h2>}
            </div>
            <div className={styles.actions}>
                <Link href='/' passHref>
                    <button> Reiniciar</button>
                </Link>
            </div>
        </div>
    )
}