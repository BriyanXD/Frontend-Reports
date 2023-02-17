const formatDate = (date:Date) => {
    const dateString = date.toString().split("-")
    return `${dateString[2]}-${dateString[1]}`
}
export { formatDate }