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
dogDiv.append(dogSpan)
}


// When a user clicks on a pup's `span` in the dog bar, that pup's
// info (`image`, `name`, and `isGoodDog` status) should show up in
// the `div` with the id of `"dog-info"`. When you have the pup's
// information, the dog info `div` should have the following children:
//  - an `img` tag with the pup's image url
//  - an `h2` with the pup's name
//  - a `button` that says `"Good Dog!"` or `"Bad Dog!"`
//  based on whether `isGoodDog` is true or false.

//   <img src=dog_image_url>
//   <h2>Mr. Bonkers</h2>
//   <button>Good Dog!</but






fetchDogs();