// async function checkImageSize(){
//     const imageInput = document.getElementById('imageInput');
//     const image = imageInput.files[0];

//     if (!image){
//         showMessage("Please select an image.");
//         return;
//     }
//     if (image.size > 5 * 1024 * 1024){
//         showMessage("The size is larger than 5MB");
//     }
//     else{
//         showMessage("Upload successfulkly completed");
//     }
// }

// function showMessage(x){
//     document.getElementById('message').textContent = x;
// }



// Jena tu e bo ni premtim te funksioni cookPizza
function cookPizza(){
  console.log("Cooling tje pizza ...");
  return new Promise(resolve => {
    setTimeout(() => {
        console.log("Pizza is ready!");
        resolve("Delicous Pizza");
    }, 5000);
  });
}

function playGames(){
    console.log("Playing games...");
    
}

function draw(){
    console.log("Drawing...");
    
}

function chat(){
    console.log("Chatting...");
    
}

async function pizzaParty(){
    console.log("Let's start the pizza party!");
    

const pizzaPromise = cookPizza();

playGames();

draw();

chat();

const pizza = await pizzaPromise;

console.log(`Yay! Time to eat` + pizza + "!"); 
}

pizzaParty();