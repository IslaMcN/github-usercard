
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ["https://api.github.com/users/daisymesa","https://api.github.com/users/misskellymore", "https://api.github.com/users/chrisbonifacio", "https://api.github.com/users/Rilladubz", "https://api.github.com/users/deegrams221"];

  

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


function userCard(follower){
console.log(follower);
  let newCard = document.createElement('div');
newCard.classList.add('.card');

let newImage = document.createElement('img');
newImage.classList.add('.image');
newImage.src = follower.avatar_url;

let info = document.createElement('div');


let header = document.createElement('h3');
header.textContent = follower.name
header.classList.add('.header')

let username = document.createElement('p');
username.classList.add('.username')
username.textContent = `Login: ${follower.login}`
let location = document.createElement('p');
location.textContent = `Location: ${follower.location}`

let profile = document.createElement('p');
profile.textContent = `Profile: ${follower.html_url}`

let followers = document.createElement('p');
followers.textContent = `Followers: ${follower.followers}`

let following = document.createElement('p');
following.textContent = `Following: ${follower.following}`;
let bio = document.createElement('p');
bio.textContent = `Bio: ${follower.bio}`;

newCard.appendChild(newImage);
newCard.appendChild(info);
info.appendChild(header);
info.appendChild(username);
info.appendChild(location);
info.appendChild(profile);
info.appendChild(followers);
info.appendChild(following);
info.appendChild(bio);

newCard.addEventListener('click', () => {
  newCard.classList.toggle('selected')
})
return newCard
}


axios.get('https://api.github.com/users/IslaMcN')
  .then((response) => {
    // console.log(response);
   
   var card = document.querySelector(".cards")
   card.appendChild(userCard(response.data))
    })

axios.get('https://api.github.com/users/IslaMcN/followers')
    .then(function (response) {
      const followersArray = response.data

      followersArray.forEach((follower) => {
        axios.get(follower.url)
        .then(function (response) {
          var card = document.querySelector(".cards");
          card.appendChild(userCard(response.data));
        })
      })
    })
 
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
