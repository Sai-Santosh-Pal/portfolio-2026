setTimeout(() => {
    document.getElementById('data').style.opacity = 1
}, 1000)

setInterval(() => {
    const format = new Intl.DateTimeFormat('en-US', {
    timeZone: "Asia/Kolkata",
    day: '2-digit',
    month: 'long',
    year: 'numeric',
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

    var time = `${parts.hour}:${parts.minute}:${parts.second} ${parts.day} ${parts.month} ${parts.year} IST` 

    document.getElementById('time').innerHTML = time
}, 1000)
