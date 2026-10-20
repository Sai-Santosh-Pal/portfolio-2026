setTimeout(() => {
    document.getElementById('data').style.opacity = 1
}, 1000)

setInterval(() => {
    const format = new Intl.DateTimeFormat('en-US', {
    timeZone: "Asia/Kolkata",
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour: '2-digit',
    minute: "2-digit",
    second: "2-digit",
    hour12: false
    })

    const date = new Date()

    const parts = format.formatToParts(date).reduce((acc, part) => {
        acc[part.type] = part.value
        return acc
    }, {})

    var time = `${parts.hour}:${parts.minute}:${parts.second} ${parts.day} ${parts.month} '${parts.year} IST` 

    document.getElementById('time').innerHTML = time

    const birthday = new Date(2010, 9, 28)
    let year = date.getFullYear() - birthday.getFullYear()
    let months = date.getMonth() - birthday.getMonth()
    let days = date.getDate() - birthday.getDate() 

    if (days < 0) {
        months--
        const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0)
        days+=prevMonth.getDate()
    }

    if (months < 0) {
        year--
        months+=12
    }
    document.getElementById('age').innerHTML = `${year}y ${months}m ${days}d`
}, 1000)
