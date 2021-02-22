let currentAudio = new Audio
function playAudio(filename) {
  currentAudio.pause();
  currentAudio.src = `./sounds/${filename}.mp3`
  currentAudio.play();
}

// main-header 
const mainNav = document.querySelector('.main-nav')
const aboutSiteBtn = mainNav.querySelector('.about-site-btn')
const linkSuitcases = mainNav.querySelector('.link-suitcases')
const linkBags = mainNav.querySelector('.link-bags')
const linkBriefcases = mainNav.querySelector('.link-briefcases')
const linkAccessories = mainNav.querySelector('.link-accessories')
const linkCart = mainNav.querySelector('.link-cart')

aboutSiteBtn.addEventListener('focus', function() {
  playAudio('aboute-web-site')
})

linkSuitcases.addEventListener('focus', function() {
  playAudio('link-suitcase')
})

linkBags.addEventListener('focus', function() {
  playAudio('link-bags')
})

linkBriefcases.addEventListener('focus', function() {
  playAudio('link-briefcase')
})

linkAccessories.addEventListener('focus', function() {
  playAudio('link-accessories')
})

linkCart.addEventListener('focus', function() {
  playAudio('link-cart')
})

// product navigation 
const productNav = document.querySelector('.product-nav')
const aboutPageBtn = productNav.querySelector('.about-page-btn')
const openDescription = productNav.querySelector('.js-open-description')
const openProperties = productNav.querySelector('.js-open-properties')
const openMainText = productNav.querySelector('.js-open-maintext') 
const propertiesText = document.querySelector('.properties-text')
const descriptionText = document.querySelector('.description-text')
const mainText = document.querySelector('.main-text')

aboutPageBtn.addEventListener('focus', function() {
  playAudio('on-product-page')
})

openDescription.addEventListener('focus', function() {
  playAudio('btn-description')
})

openProperties.addEventListener('focus', function() {
  playAudio('btn-properties')
})

openDescription.onclick = function() {
  propertiesText.style.display = "none"
  mainText.style.display = "none"
  descriptionText.style.display = "flex"
  playAudio('description')

}

openProperties.onclick = function() {
  propertiesText.style.display = "flex"
  mainText.style.display = "none"
  descriptionText.style.display = "none"
  playAudio('properties')
}


  openMainText.addEventListener('focus', function() {
    playAudio('title-of-product')
  })

  openMainText.onclick = function() {
    propertiesText.style.display = "none"
    mainText.style.display = "flex"
    descriptionText.style.display = "none" 
  }

//section footer
const addToCartBtn = document.querySelector('.add-to-cart')

addToCartBtn.addEventListener('focus', function() {
  playAudio('add-product-to-cart')
})





