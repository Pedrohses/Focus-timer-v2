import { timerControls } from "./elements.js";
import * as activities from "./activities.js"

export function activitiesRegister() {
    timerControls.addEventListener("click", event => {
        const control = event.target.dataset.action;
        if(control == undefined) {
            return
        }
        activities[control]()
    })
}