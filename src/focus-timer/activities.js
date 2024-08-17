import state from "./state.js";
import * as elements from "./elements.js"
import { countdown, printMinutesAndSecondsInTheScreen } from "./timer-logic.js";

export function addTime() {
    if(state.minutes >= 56) {
        state.minutes = 60
        state.seconds = 0
        printMinutesAndSecondsInTheScreen()
        return
    }

    if(state.minutes < 0) {
        state.minutes++
        state.seconds = 0
    }

    state.minutes += 5
    elements.minutes.textContent = String(state.minutes).padStart(2, '0')
}

export function lessTime() {
    if(state.minutes <= 4) {
        state.minutes = 0
        state.seconds = 0
        printMinutesAndSecondsInTheScreen()
        return
    }
    state.minutes -= 5
    elements.minutes.textContent = String(state.minutes).padStart(2, '0')
}

export function play() {
    state.isRunning = true
    countdown()
}

export function pause() {
    if(state.isRunning) {
        state.seconds++
    }
    state.isRunning = false
}