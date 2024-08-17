import { soundButtons } from "./elements.js"
import * as activities from "./activities.js"

export function clickSoundButtonRegister() {
    soundButtons.addEventListener("click", event => {
        const control = event.target.dataset.song
        if(control == undefined){
            return
        }
        activities[control]()
    })
}