import styles from '../styles/Door.module.css'
import DoorModel from '../model/door'
import Gift from './gift'

interface DoorProps{
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps){
    const door = props.value
    const selected = door.selected && !door.isOpen ? styles.doorSelect : ''
    const toggleSelected = e => props.onChange(door.toggleSelected())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function render(){
        return(
            <div className={styles.door}>
                    <div className={styles.doorId}>{door.id}</div>
                    <div className={styles.doorHandle}
                        onClick={open}
                    ></div>
                </div>
        )
    }
    return (
        <div className={styles.doorArea} onClick={toggleSelected}>
            <div className={`${styles.doorFrame} ${selected}`}>
                {
                    door.isClosed ? render() :
                    door.hasGift ? <Gift/>: false
                    }
            </div>
                <div className={styles.doorGround}>

                </div>
        </div>
    )
}