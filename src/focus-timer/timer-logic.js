import state from "./state.js"
import * as elements from "./elements.js"

export function countdown() {
    clearTimeout(state.countdownId)

    if(!state.isRunning || state.minutes == -1) {
        return    
    }
    
    printMinutesAndSecondsInTheScreen()
    state.seconds--
       
    if(state.seconds < 0) {
        state.seconds = 59
        state.minutes--
        if(state.minutes < 0) {
            return
        }
    }
    
    state.countdownId = setTimeout(countdown, 1000)
}

export function printMinutesAndSecondsInTheScreen() {
    elements.seconds.textContent = String(state.seconds).padStart(2, '0')
    elements.minutes.textContent = String(state.minutes).padStart(2, '0')
}