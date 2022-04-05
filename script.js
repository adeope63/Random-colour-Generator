function getNewColor() {
    //Declaring the variables for HEX code
  let symbols, color;
  symbols = "0123456789ABCDEF";

  //Declaring the hash in the HEXCODE
  color = "#";

  //Function for getting the HEXCODE
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  //To write to the Background Body
  document.body.style.background = color;
  //To change the name after background change 
  document.getElementById("hex").innerHTML = color;
}
