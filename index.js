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


function particles(x, y) {
    const container = document.createElement('div')
    container.classList.add('firework-container')
    container.style.left = `${x}px`
    container.style.top = `${y}px`
    document.body.appendChild(container)
    const particles = 30
    for (let i = 0; i < particles; i++) {
        console.log('p')
        const particle = document.createElement('div')
        particle.classList.add('particle')
        const angle = Math.random() * Math.PI * 2
        const velocity = Math.random() * 80 + 40
        const xOffset=Math.cos(angle) * velocity
        const yOffset = Math.sin(angle) * velocity

        particle.style.setProperty('--x', `${xOffset}px`)
        particle.style.setProperty('--y', `${yOffset}px`)

        const randomHue = Math.floor(Math.random() * 100)
        particle.style.backgroundColor = `hsl(0, 0%, ${randomHue}%)`
        particle.style.boxShadow = `0 0 8px hsl(0, 0%, ${randomHue}%)`

        container.appendChild(particle)
    }
    setTimeout(()=>{
        container.remove()
    }, 5000)
}

document.body.addEventListener('click', (e) =>{
    particles(e.clientX, e.clientY)
})