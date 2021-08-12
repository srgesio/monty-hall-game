import DoorModel from "../model/door";


export function newDoors(quantity: number, selectedDoorId:number): DoorModel[]{
    return Array.from({ length: quantity}, (door, i)=>{
        const doorId = i + 1
        const hasGift = doorId === selectedDoorId
        return new DoorModel(doorId, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], doorChanged: DoorModel):DoorModel[]{
    return doors.map(currentDoor =>{
        const changed = currentDoor.id === doorChanged.id

        if(changed){
            return doorChanged
        }else{
            return doorChanged.isOpen ? currentDoor : currentDoor.unselect()
        }

    })
}