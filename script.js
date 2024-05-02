// document.addEventListener('DOMContentLoaded', function () {
//   function activateEasterEgg() {
//     alert('You found the Easter egg (meme())! 🐰')
//   }

//   var easterEggButton = document.getElementById('easter-egg-button')
//   easterEggButton.addEventListener('click', function () {
//     activateEasterEgg()
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  // Function to handle the Easter egg activation
  function activateEasterEgg() {
    // Display a hidden message
    var easterEggMessage = document.createElement('p')
    easterEggMessage.textContent =
      "Compiling code is like herding sheep: it may seem like a wild adventure at first, but with the right tools and a bit of patience, you'll soon have your flock of code running smoothly through the digital pastures! -ChatGPT meme()"
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
