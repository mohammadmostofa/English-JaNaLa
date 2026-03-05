// LoadLesson function
//arrow function
const LoadLesson = ()=> {
fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response (1)
.then(res=>res.json()) // promise of json data (2)
//.then ( (json) => console.log(json.data) )  //  
.then((json) => displayLesson(json.data))
};


// function two to catch id of all of
const loadLevelword = (id) =>{

  // second url link and remove 5 and add ${id} to count number with btns
const cardUrl = `https://openapi.programming-hero.com/api/level/${id}`;
// call the promise function
fetch(cardUrl)
.then(res=>res.json())
// amr dorkar arr er bitorer data thats mean data er bitore data output korte hobe
.then((data) => {
    displayLevelWord(data.data)
})
};

// displayLevelWord to see card

const displayLevelWord = (words) =>{

    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    // pottekta kajer jonno forEach arroy function use korte pari //same aj for...of

    words.forEach(word => {
            // create div to appent this word
        const card = document.createElement("div");
            card.innerHTML = ` 
            
                   <div class="flex flex-col justify-center items-center space-y-10 border border-white bg-black  px-10 py-8 rounded-md shadow-lg">
       
          <div class="text-center flex flex-col justify-center items-center space-y-4">
       <h2 class="text-2xl font-bold poppins-thin">${word.word}</h2>
    <p class="text-white text-[15px] poppins-thin"> ${word.pronunciation} </p>
      <h3 class="font-semibold text-2xl">${word.meaning} </h3>
     </div>


        <div class="flex justify-between gap-x-40 space-y-2">
          <span><i class="fa-solid fa-circle-info text-white hover:bg-blue-400 p-3 rounded-md"></i></span>
        <span><i class="fa-solid fa-volume-high hover:bg-blue-400 p-3 rounded-md"></i></span>
        </div>

      </div>

            `;

      wordContainer.append(card)
            
    });

}

//display this LoadLesson 

const displayLesson = (Lessons) =>{
  //console.log(Lessons)
  // ekon kibabe frontend ye dekhabo o dynamic korbo

//1.get the container & empty

const levelContainer = document.getElementById("level-container");
levelContainer.innerHTML = '';//mane holo er bitore jodi kichu take tahol paka hoye jabe

//2.get into everylesson --mane holo sobgulo lesson ye dukbo
for(let lesson of Lessons){
    
  //3.create Element 
const btnDiv = document.createElement("div");
//btnDiv ye ki hobe ta nise deoya holo

btnDiv.innerHTML = `

            <button onclick="loadLevelword(${lesson.level_no})" class="btn btn-primary  bg-black flex justify-center items-center px-6 py-6 text-center
             border-black hover:bg-blue-600 "><span><i class="fa-solid fa-book-open"></i></span> 
             <span class="text-nowrap">Lesson-${lesson.level_no}</span></button>

        
                    `

//4.append into conatainer (ami je btndiv banaisi ta levelcontiner er bitore dukabo)

  levelContainer.append(btnDiv);

};

  }

  // call function
  LoadLesson();
