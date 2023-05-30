const submitScore = () => {

    // Get Elements from DOM
    const numberCircles = document.querySelectorAll('.numberCircle')

    // Number Toggle
    const numberToggle = (event) => {

        numberCircles.forEach(numberCircle => {
            numberCircle.classList.remove('numberCircle--clicked')
        })

        event.target.classList.add('numberCircle--clicked')
    }

    // Create Event
    numberCircles.forEach( numberCircle => {
       
        numberCircle.addEventListener('click', numberToggle)

    })
}
submitScore()