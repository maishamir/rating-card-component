// var title = document.getElementById("title");
var container = document.getElementById("grid");

var submit = document.getElementById("submit");

let rating;
document.addEventListener("click", function (e) {
    if (e.target.className === "number") {
        rating = e.target.value;
    }
    submit.addEventListener("click", () => {
        grid.innerHTML = `
      <div class="grid-container" id="grid">
        <div class="card-body">
            <div class="thanksImg">
                <img src="./images/illustration-thank-you.svg" alt="">
            </div>    
            <p class="selection">You selected ${e.target.value} out of 5</p>

            <h1 class="thanks"> Thank you!</h1>

            <p class="msg">We appreciate you taking the time to give a rating. If you ever need more support, doesn't hesitate to get in touch!</p>
        
        </div>
      </div>
    <div class="thanks"><h1>Thank You! You selected ${e.target.value}</h1></div>`;
    })
});




// when I click on the button, I want to store the value of the button and go to the next page when I click on submit


// function thankYou() {
//     grid.innerHTML = `
//       <div class="grid-container" id="grid">
//         <div class="card-body">
//             <div class="thanksImg">
//                 <img src="./images/illustration-thank-you.svg" alt="">
//             </div>    
//             <p class="selection">You selected ${e.target.value} out of 5</p>

//             <h1 class="thanks"> Thank you!</h1>

//             <p class="msg">We appreciate you taking the time to give a rating. If you ever need more support, doesn't hesitate to get in touch!</p>
        
//         </div>
//       </div>
//     <div class="thanks"><h1>Thank You! You selected ${e.target.value}</h1></div>`;
// }





