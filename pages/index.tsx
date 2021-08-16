import Card from "../components/card"
import styles from '../styles/Form.module.css'
import Link from 'next/link'
import Gift from "../components/gift"
import Door from "../components/door"
import InputNumber from "../components/inputNumber"
import { useState } from "react"

export default function Home() {
  const [quantity, setQuantity] = useState(3)
  const [doorWithGiftId, setDoorWithGiftId] = useState(1)

  
  return (
    <div className={styles.form}>
      <div>
        <Card bgColor='#08f'>
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber
            text='Quantidade:'
            value={quantity}
            onChange={newQuantity => setQuantity(newQuantity)}
            />
        </Card>
      </div>
      <div>
      <Card>
          <InputNumber
            text='Porta Premiada:'
            value={doorWithGiftId}
            onChange={newDoorWithGiftId => setDoorWithGiftId(newDoorWithGiftId)}
            />
      </Card>
      <Card bgColor='#f80'>
        <Link href={`/game/${quantity}/${doorWithGiftId}`} passHref>
          <h2 className={styles.link}>Iniciar</h2>
        </Link>
      </Card>
      </div>
    </div>
  )
}
