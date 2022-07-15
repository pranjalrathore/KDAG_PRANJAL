let randomY = [];
let numPts = 25;

budgetValues = [];

function preload() {
  table = loadTable("workshop_budget.csv", "csv", "header");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();
  stroke(200, 100, 100);
  background(500);
  strokeWeight(3);
  
  for (let i = 0; i < 200; i++) {
    fill(50,2 , 900, random(30));
    ellipse(random(windowWidth), random(windowHeight), random(100));
    fill(500,6 , 0, random(30));
    line(10, 10,10, 10);
  }
   
  for(let i =0; i< numPts; i++){
   randomY.push(random(100,300)); 
  }
  
  numberOfColumns = table.getColumnCount();
  numberOfRows = table.getRowCount();

}

function draw() {
  background(990);
  
  for (let i = 0; i < 20000; i += 20) {
    bezier(
      mouseY - i / 2.0,
      40 + i,
      90,
      200,
      40,
      32,
      240 - i / 6.0,
      30 + i / 8.0
    );
  }
  
  for (let i = 0; i < 20000; i += 20) {
    bezier(
      10 - i / 2.0,
      40 + i,
      90,
      20,
      40,
      320,
      240 - i / 6.0,
      300 + i / 8.0
    );
  }
  
  for (let i = 0; i < 80; i += 20) {
    bezier(
      mouseX - i / 2.0,
      40 + i,
      9000,
      2000,
      40,
      320,
      24 - i / 6.0,
      300 + i / 8.0
    );
  }
  
  
   
  drawLines();
  drawEllipses();
  
  
  
  for (var i = 0; i < numberOfRows; i++) {
    //place years
    //text(table.getString(i, 0), i * 30 + 60, 420);
    //pull numbers
    budgetValues[i] = table.getString(i, 1);
    //draw graph
    rect(i * 30 + 60, 400 - budgetValues[i], 20, budgetValues[i])
  }
   //determine highest value
   maxValue=max(budgetValues);
  for (var k=0;k<maxValue;k=k+50){
    //text(k,10,420-k);
  }

    
}

function drawEllipses(){
  noStroke();
    // draw ellipses
  for(let i =0; i < randomY.length; i++){
    let x = i * (width / (numPts-1));
    let y = randomY[i];
    ellipse(x, y, 7);
  }
}

function drawLines(){
  stroke(0);
 // draw lines
  let px = 0;
  let py = randomY[0];
  for(let i =0; i < randomY.length; i++){
    let x = i * (width / (numPts-1));
    let y = randomY[i];
    line(px, py, x, y);
    
  	//store the last position
    px = x;
    py = y;
  } 
}
