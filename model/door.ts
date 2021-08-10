export default class DoorModel{
    #doorId: number
    #doorHasGift: boolean
    #doorSelected: boolean
    #doorIsOpen: boolean

    constructor(doorId: number, doorHasGift=false, doorSelected=false, doorIsOpen=false){
        this.#doorId = doorId
        this.#doorHasGift = doorHasGift
        this.#doorSelected = doorSelected
        this.#doorIsOpen = doorIsOpen
    }

    get id(){
        return this.#doorId
    }
    get hasGift(){
        return this.#doorHasGift
    }
    get selected(){
        return this.#doorSelected
    }
    get isOpen(){
        return this.#doorIsOpen
    }
    toggleSelected(){
        const select = !this.selected
        return new DoorModel(this.id, this.hasGift, select, this.isOpen)
    }
    
    unselect(){
        const select = false
        return new DoorModel(this.id, this.hasGift, select, this.isOpen)
    }
    open(){
        const isOpen = true
        return new DoorModel(this.id, this.hasGift, this.selected, isOpen)
    }
}