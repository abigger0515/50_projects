const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++
    }

    update()
    // console.log(currentActive)
})

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--
    }
    update()
    // console.log(currentActive)
})

function update() {
    // handle the circles
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // Handle the line
    actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + '%'

    // Handle the prev/next button
    if (currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

