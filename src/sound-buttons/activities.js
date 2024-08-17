import * as elements from "./elements.js"
import state from "./state.js"

export function forestSong() {
    elements.forestBtn.classList.toggle("soundOn")
    state.forestSound = !state.forestSound
    elements.forestSong.loop = true

    if(state.forestSound){
        elements.forestSong.play()
        return
    }

    elements.forestSong.pause()
}

export function rainSong() {
    elements.rainBtn.classList.toggle("soundOn")
    state.rainSound = !state.rainSound
    elements.rainSong.loop = true

    if(state.rainSound) {
        elements.rainSong.play()
        return
    }

    elements.rainSong.pause()
}

export function cafeSong() {
    elements.cafeBtn.classList.toggle("soundOn")
    state.cafeSound = !state.cafeSound
    elements.cafeSong.loop = true

    if(state.cafeSound) {
        elements.cafeSong.play()
        return
    }

    elements.cafeSong.pause()
}

export function fireSong() {
    elements.fireBtn.classList.toggle("soundOn")
    state.fireSound = !state.fireSound
    elements.fireSong.loop = true

    if(state.fireSound) {
        elements.fireSong.play()
        return
    }

    elements.fireSong.pause()
}