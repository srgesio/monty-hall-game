import Card from "../components/card"
import styles from '../styles/Form.module.css'
import Link from 'next/link'
import Gift from "../components/gift"
import Door from "../components/door"

export default function Home() {

  
  return (
    <div className={styles.form}>
      <div>
        <Card bgColor='#08f'>
          <h1>Monty Hall</h1>
        </Card>
        <Card>
        </Card>
      </div>
      <div>
      <Card>
      </Card>
      <Card bgColor='#f80'>
        <Link href={`/game/4/2`} passHref>
          <h2 className={styles.link}>Iniciar</h2>
        </Link>
      </Card>
      </div>
    </div>
  )
}
