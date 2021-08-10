import styles from '../styles/Door.module.css'
import DoorModel from '../model/door'

interface DoorProps{
    door: DoorModel
}

export default function Door(props: DoorProps){
    const {door} = props
    const selected = door.selected ? styles.doorSelect : ''

    return (
        <div className={styles.doorArea}>
            <div className={`${styles.doorFrame} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.doorId}>{door.id}</div>
                    <div className={styles.doorHandle}></div>
                </div>
            </div>
            <div className={styles.doorGround}>

            </div>
        </div>
    )
}