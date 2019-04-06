
export const lightRed = (time) => {
    return {
        type: 'CHANGE_RED',
        time: time
    }
}

export const lightYellow = (time) => {
    return {
        type: 'CHANGE_YELLOW',
        time: time
    }
}

export const lightGreen = (time) => {
    return {
        type: 'CHANGE_GREEN',
        time: time
    }
}