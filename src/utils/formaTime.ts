const formaTime = (time:Date) => {
    const timeString = time.toString().split(":")
    return `${timeString[0]}:${timeString[1]}`
}

export {formaTime}