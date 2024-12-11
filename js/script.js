class HtmlValue {
    constructor() {
      this.nickName = document.getElementById("nickName").value;
      this.firstName = document.getElementById("firstName").value;
      this.lastName = document.getElementById("lastName").value;
      this.age = document.getElementById("age").value;
      this.gender = document.getElementById("gender").value;
      this.hobby = document.getElementById("hobby").value;
      this.movie = document.getElementById("movie").value;
      this.pet = document.getElementById("pet").value;
      this.food = document.getElementById("food").value;
    }
  }
  
  class personDatas {
    constructor(
      nickName,
      firstName,
      lastName,
      age,
      gender,
      hobby,
      movie,
      pet,
      food
    ) {
      this.nickName = nickName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.hobby = hobby;
      this.movie = movie;
      this.pet = pet;
      this.food = food;
    }
  }
  
  class FormHandler extends personDatas {
    #photo
    constructor(
      photo,
      nickName,
      firstName,
      lastName,
      age,
      gender,
      hobby,
      movie,
      pet,
      food
    ) {
      super(nickName,
        firstName,
        lastName,
        age,
        gender,
        hobby,
        movie,
        pet,
        food);
      this.#photo = photo;
    }
  
  
    getPhoto(){
      return this.#photo;
    }
  
    setPhotoPerson() {
      this.#photo = value;
    }
  
    static createPersonFromForm() {
      const person1 = new HtmlValue();
      const person2 = new FormHandler(
        "./assets/jacky.png",
        "Jacky",
        "Jaka",
        "Carson",
        "26",
        "Male",
        "Bola",
        "Action",
        "Anjing",
        "Nasi Padang"
      );
      const person3 = new FormHandler(
        "./assets/jojon.png",
        "Jojon",
        "Joni",
        "Joko",
        "20",
        "Male",
        "Otomotif",
        "Sci-fi",
        "Kucing",
        "Mie Instan"
      );
      const person4 = new FormHandler(
        "./assets/jana.png",
        "Jana",
        "Jana",
        "Lang",
        "20",
        "Female",
        "Menyanyi",
        "Romance",
        "Kucing",
        "Mie Instan"
      );
      const person5 = new FormHandler(
        "./assets/jaka.png",
        "Jaka",
        "Joko",
        "Jeki",
        "22",
        "Male",
        "Bola Voli",
        "Comedy",
        "Anjing",
        "Pizza"
      );
      const person6 = new FormHandler(
        "./assets/lala.png",
        "Lala",
        "Lala",
        "Jenkins",
        "25",
        "Female",
        "Bersepeda",
        "Drama",
        "Kucing",
        "Sushi"
      );
      const person7 = new FormHandler(
        "./assets/tyrone.png",
        "Tyrone",
        "Tyrone",
        "Jones",
        "30",
        "Male",
        "Membaca",
        "Thriller",
        "Hamster",
        "Steak"
      );
      const person8 = new FormHandler(
        "./assets/riri.png",
        "Riri",
        "Riri",
        "Altarez",
        "28",
        "Female",
        "Memasak",
        "Horror",
        "Kelinci",
        "Pasta"
      );
      const person9 = new FormHandler(
        "./assets/ahmed.png",
        "Ahmed",
        "Ahmed",
        "Sabeel",
        "23",
        "Male",
        "Bermain Game",
        "Action",
        "Iguana",
        "Burger"
      );
      const person10 = new FormHandler(
        "./assets/sisi.png",
        "Sisi",
        "Giska",
        "Sunandar",
        "27",
        "Female",
        "Mendaki Gunung",
        "Documentary",
        "Burung",
        "Nasi Goreng"
      );
      const person11 = new FormHandler(
        "./assets/toto.png",
        "Toto",
        "Yanto",
        "Subejo",
        "24",
        "Male",
        "Fotografi",
        "Documentary",
        "Ikan",
        "Sate"
      );
      const person12 = new FormHandler(
        "./assets/caitlin.png",
        "Caitlin",
        "Caitlin",
        "Snow",
        "29",
        "Female",
        "Belanja",
        "Romantic Comedy",
        "Kelinci",
        "Es Krim"
      );
      const person13 = new FormHandler(
        "./assets/will.png",
        "Will",
        "William",
        "Rogers",
        "31",
        "Male",
        "Bermain Musik",
        "Musical",
        "Anjing",
        "Spaghetti"
      );
      const person14 = new FormHandler(
        "./assets/nana.png",
        "Nana",
        "Gina",
        "Shabita",
        "26",
        "Female",
        "Berenang",
        "Fantasy",
        "Kucing",
        "Nasi Padang"
      );
      const person15 = new FormHandler(
        "../assets/kiki.png",
        "Kiki",
        "Rizki",
        "Saputra",
        "32",
        "Male",
        "Menggambar",
        "Animated",
        "Burung",
        "Nasi Kuning"
      );
   
      const people = [
        person1,
        person2,
        person3,
        person4,
        person5,
        person6,
        person7,
        person8,
        person9,
        person10,
        person11,
        person12,
        person13,
        person14,
        person15,
      ];
      const equalPairs = [];
      const resultText = document.querySelector(".resultsText");
  
      resultText.style.display = "none";
  
      for (let j = 1; j < people.length; j++) {
        const equalProperties = FormHandler.comparePersonProperties(
          people[0],
          people[j],
          ["hobby", "movie", "pet", "food"]
        );
  
        if (equalProperties.length > 0) {
          equalPairs.push({
            person2: people[j],
          });
        }
      }
  
      if (equalPairs.length > 0) {
        // FormHandler.addPersonContainer(equalPairs);
        FormHandler.generateGrid(equalPairs);
        
      } else {
        resultText.style.display = "block";
      }
    }
  
    static showAllCombinations() {
      const person2 = new FormHandler(
        "./assets/jacky.png",
        "Jacky",
        "Jaka",
        "Carson",
        "26",
        "Male",
        "Bola",
        "Action",
        "Anjing",
        "Nasi Padang"
      );
      const person3 = new FormHandler(
        "./assets/jojon.png",
        "Jojon",
        "Joni",
        "Joko",
        "20",
        "Male",
        "Otomotif",
        "Sci-fi",
        "Kucing",
        "Mie Instan"
      );
      const person4 = new FormHandler(
        "./assets/jana.png",
        "Jana",
        "Jana",
        "Lang",
        "20",
        "Female",
        "Menyanyi",
        "Romance",
        "Kucing",
        "Mie Instan"
      );
      const person5 = new FormHandler(
        "./assets/jaka.png",
        "Jaka",
        "Joko",
        "Jeki",
        "22",
        "Male",
        "Bola Voli",
        "Comedy",
        "Anjing",
        "Pizza"
      );
      const person6 = new FormHandler(
        "./assets/lala.png",
        "Lala",
        "Lala",
        "Jenkins",
        "25",
        "Female",
        "Bersepeda",
        "Drama",
        "Kucing",
        "Sushi"
      );
      const person7 = new FormHandler(
        "./assets/tyrone.png",
        "Tyrone",
        "Tyrone",
        "Jones",
        "30",
        "Male",
        "Membaca",
        "Thriller",
        "Hamster",
        "Steak"
      );
      const person8 = new FormHandler(
        "./assets/riri.png",
        "Riri",
        "Riri",
        "Altarez",
        "28",
        "Female",
        "Memasak",
        "Horror",
        "Kelinci",
        "Pasta"
      );
      const person9 = new FormHandler(
        "./assets/ahmed.png",
        "Ahmed",
        "Ahmed",
        "Sabeel",
        "23",
        "Male",
        "Bermain Game",
        "Action",
        "Iguana",
        "Burger"
      );
      const person10 = new FormHandler(
        "./assets/sisi.png",
        "Sisi",
        "Giska",
        "Sunandar",
        "27",
        "Female",
        "Mendaki Gunung",
        "Documentary",
        "Burung",
        "Nasi Goreng"
      );
      const person11 = new FormHandler(
        "./assets/toto.png",
        "Toto",
        "Yanto",
        "Subejo",
        "24",
        "Male",
        "Fotografi",
        "Documentary",
        "Ikan",
        "Sate"
      );
      const person12 = new FormHandler(
        "./assets/caitlin.png",
        "Caitlin",
        "Caitlin",
        "Snow",
        "29",
        "Female",
        "Belanja",
        "Romantic Comedy",
        "Kelinci",
        "Es Krim"
      );
      const person13 = new FormHandler(
        "./assets/will.png",
        "Will",
        "William",
        "Rogers",
        "31",
        "Male",
        "Bermain Musik",
        "Musical",
        "Anjing",
        "Spaghetti"
      );
      const person14 = new FormHandler(
        "./assets/nana.png",
        "Nana",
        "Gina",
        "Shabita",
        "26",
        "Female",
        "Berenang",
        "Fantasy",
        "Kucing",
        "Nasi Padang"
      );
      const person15 = new FormHandler(
        "./assets/kiki.png",
        "Kiki",
        "Rizki",
        "Saputra",
        "32",
        "Male",
        "Menggambar",
        "Animated",
        "Burung",
        "Nasi Kuning"
      );
  
      const people = [
        person2,
        person3,
        person4,
        person5,
        person6,
        person7,
        person8,
        person9,
        person10,
        person11,
        person12,
        person13,
        person14,
        person15,
      ];
      const gridContainer = document.querySelector(".outputContainer");
      while (gridContainer.firstChild) {
          gridContainer.removeChild(gridContainer.firstChild);
      }
      const resultText = document.querySelector(".resultsText")
      resultText.style.display = "none"
      FormHandler.generateAllGrid(people);
    }
  
    static comparePersonProperties(person1, person2, properties) {
      const equalProperties = [];
      const formUser = document.querySelector(".formUser");
      const regenerate = document.querySelector(".searchAgain");
      const showAll = document.querySelector(".showAll");
  
      for (const prop of properties) {
        const value1 = person1[prop].toLowerCase();
        const value2 = person2[prop].toLowerCase();
  
        if (value1 && value2 && value1 === value2) {
          equalProperties.push(prop);
        }
      }
      showAll.style.display = "flex"
      regenerate.style.display = "block";
      formUser.style.display = "none";
  
      return equalProperties;
    }
  
    static generateAllGrid(people) {
      const gridContainer = document.querySelector(".outputContainer");
      gridContainer.classList.add("grid-container");
  
      people.forEach((person) => {
        const gridItem = document.createElement("div");
        const personPhoto = person.getPhoto();
        gridItem.classList.add("grid-item");
        gridItem.innerHTML += `
          <div class="personPhoto"><img src="${personPhoto}" alt="img" ></>
          <div class="personNickname">${person.nickName}, ${person.age}</div>
        `;
        gridItem.style.display = "grid"
  
        gridItem.addEventListener('click', () => {
          FormHandler.detailPerson(person);
        });
  
        gridContainer.appendChild(gridItem);
      });
  
      document.body.appendChild(gridContainer);
    }
  
    static generateGrid(equalPairs) {
      const gridContainer = document.querySelector(".outputContainer");
      gridContainer.classList.add("grid-container");
  
      equalPairs.forEach((pair) => {
        const gridItem = document.createElement("div");
        const personPhoto = pair.person2.getPhoto();
        gridItem.classList.add("grid-item");
        gridItem.innerHTML += `
          <div class="personPhoto"><img src="${personPhoto}" alt="img"></>
          <div class="personNickname">${pair.person2.nickName}, ${pair.person2.age}</div>
        `;
        gridItem.style.display = "grid";
  
        gridItem.addEventListener("click", () => {
          FormHandler.detailPerson(pair.person2);
        });
  
        gridContainer.appendChild(gridItem);
      });
  
      document.body.appendChild(gridContainer);
    }
  
    static detailPerson(person) {
      const personOverlay = document.querySelector(".detailOverlay"); 
      const personInformation = document.querySelector(".detailPerson");
      const personPhoto = person.getPhoto();
      personInformation.innerHTML = `<div class="personTop">
          <div class="personFront">
              <span class="close" id="close">&times;</span>
              <table class="tablePerson">
                  <tr>
                      <tr>
                          <td class="personPhoto">
                          <img src="${personPhoto}" alt="pic">
                          </td>
                      </tr>
                      <tr>
                          <td id="nickAge">${person.nickName}, ${person.age}</td>
                      </tr>
                      <tr>
                          <td id="fullName">${person.firstName} ${person.lastName}</td>
                      </tr>
                      <tr>
                          <td id="personDesc">
                          Hi, my name is ${person.nickName}. I like ${person.hobby} so much, and i like watching ${person.movie} genre movie.
                          i have a ${person.pet}, my ${person.pet} is so nice. Also, ${person.food} is my quick pick. 
                          if we're friends, do you have any recommendations for good ${person.food}?</td>
                      </tr>   
                  </tr>
              </table>
          </div>
          <span class="open" id="open" >&blacktriangledown;</span> 
      </div>
      <div class="personBottom" id="personBottom">
          <div class="personBack" id="personBack">
              <table>
                  <tr>
                      <tr>
                          <td>Hobby: ${person.hobby}</td>
                      </tr>
                  </tr>
                  <tr>
                      <tr>
                          <td>Favorite Movie Genre: ${person.movie}</td>
                      </tr>
                  </tr>
                  <tr>
                      <tr>
                          <td >Pet: ${person.pet}</td>
                      </tr>
                  </tr>
                  <tr>
                      <tr>
                          <td>Favorite Food: ${person.food}</td>
                      </tr>
                  </tr>
              </table>
            <div class="divButtonJoin">
              <button class="buttonJoin" onclick="window.open('https://chat.whatsapp.com/ESefUyTqFlN1K0n2xrFnsO')"> Join Group</button>
            </div>
          </div>
      </div>`;
      var open = document.getElementById("open");
      var personBottom = document.getElementById("personBottom");
  
      const close = document.getElementById("close");
      personOverlay.style.display = "block";
  
      close.onclick = function () {
        personOverlay.style.display = "none";
      };
  
      open.onclick = function () {
        personBottom.style.display = "block";
      };
  
      personBottom.addEventListener("click", function () {
        personBottom.style.display = "none";
      });
    }
  
    static regenerate() {
      const formUser = document.querySelector(".formUser");
      const regenerate = document.querySelector(".searchAgain");
      const myForm = document.getElementById("myForm");
      const resultText = document.querySelector(".resultsText");
      const showAll = document.querySelector(".showAll");
  
      const gridContainer = document.querySelector(".outputContainer");
      while (gridContainer.firstChild) {
          gridContainer.removeChild(gridContainer.firstChild);
      }
  
      showAll.style.display = "none";
      resultText.style.display = "none";
      regenerate.style.display = "none";
      formUser.style.display = "flex";
      myForm.reset();
    }
  }