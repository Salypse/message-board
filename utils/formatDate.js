const formatDate = (dateObj) => {  
      
    const year = dateObj.getFullYear()
    const date = dateObj.getDate()
    const month = dateObj.getMonth() + 1

    const hour = dateObj.getHours()
    const minute = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes()

    return `${month + 1}-${date}-${year}. ${hour}:${minute}`
}

module.exports = formatDate