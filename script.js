document.addEventListener('DOMContentLoaded', function () {
  function activateEasterEgg() {
    var easterEggMessage = document.createElement('p')
    easterEggMessage.textContent =
      "Like the unpredictable currents of a river, compilers navigate the twists and turns of code, while meme() dances along its banks, adding splashes of humor to the journey. -ChatGPT"
    document.getElementById('easter-egg').appendChild(easterEggMessage)

    // Trigger a subtle animation (optional)
    document.getElementById('easter-egg').classList.add('animated')
  }

  // Listen for button click to activate the Easter egg
  var easterEggButton = document.getElementById('easter-egg-button')
  easterEggButton.addEventListener('click', function () {
    activateEasterEgg()
  })
})
