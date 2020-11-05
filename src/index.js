const BASEURL = "http://localhost:3000/pups/"
const dogDiv = document.getElementById('dog-bar')

const fetchDogs = () =>
fetch(BASEURL)
.then(resp => resp.json())
.then(dogObj => renderDogs(dogObj))

const renderDogs = (dogsObj) => {
dogsObj.forEach(dog => {
renderDog(dog)    
});
}

const renderDog = (dog) => {
const dogSpan = document.createElement('span')
dogSpan.dataset.id = dog.id
dogSpan.innerHTML = `
${dog.name}
`

dogSpan.addEventListener('click', e => {
    oneDog(e.target.dataset.id)
})

    function oneDog(id){
    // console.log(id)
    fetch(BASEURL + id)
    .then(resp => resp.json())
    .then(addToContainer)
}

    const addToContainer = (dog) => {
        //console.log(dog)
        const dogContainer = document.getElementById('dog-summary-container')
        const dogInfo = document.getElementById('dog-info')
        //console.log(dogInfo)
        dogInfo.innerHTML = ""

        const dogName = document.createElement('h2')
        dogName.innerHTML = dog.name
        const dogPic = document.createElement('img')
        dogPic.src = dog.image
        const dogButton = document.createElement("button")
        dogButton.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
        dogButton.dataset.id = dog.id
        dogButton.addEventListener("click", toggleDogStatus)

        dogInfo.append(dogName, dogPic, dogButton)
    }

dogDiv.append(dogSpan)
}


// const clickDog = dog => {
//     dogDiv.addEventListener('click', e => {
//         //console.log('click')
//         console.log('data-id span')
//         if(e.target.matches('span data-id')) {
//         console.log('click')


//         }
//     })
// }
const toggleDogStatus = (e) => {
    let goodOrBad
    // console.log(e.target.innerText)
    if(e.target.innerText === 'Good Dog!') {
        e.target.innerText = "Bad Dog!"
        goodOrBad = false
    }
        else {
            e.target.innerText = "Good Dog!"
            goodOrBad = true
        }
        updateDog(e.target.dataset.id, goodOrBad)
}

    const updateDog = (id, goodOrBad) => {
        const options = {
        method: "PATCH",
        headers: {
         "content-type": "application/json"
        },
        body: JSON.stringify({
            isGoodDog: goodOrBad
          })
        }
        return fetch(BASEURL + `/${id}`, options)
        .then(r => r.json())
      }

fetchDogs();
// clickDog();