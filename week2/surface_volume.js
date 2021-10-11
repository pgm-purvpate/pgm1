// Calculation Volume & Surface


function calculateRectangle(){

    /*
    * lRectangle = Length of Rectangle
    * wRectangle =  Width of Rectangle
    * surfaceRectangle = Surface of Rectangle
    */
    let lRectangle = parseFloat(10);
    let wRectangle = parseFloat(20);

    let surfaceRectangle = lRectangle * wRectangle;
    console.log(surfaceRectangle);
}

function calculateTriangle(){

    let lTriangle = parseFloat(10);
    let wTriangle = parseFloat(20);

    let surfaceTriangle = lTriangle * wTriangle;

    console.log(surfaceTriangle);

}

function calculateCircle(){
    let lCircle = parseFloat(10);
    let wCircle = parseFloat(20);
    
    let surfaceCircle = lCircle * wCircle;

    console.log(surfaceCircle);
}

function calculateCylinder(){
    let dCylinder = parseFloat(10);
    let hCylinder = parseFloat(20);

    let vCylinder = dCylinder * hCylinder;

    console.log(vCylinder);
}

function calculateCube(){
    let dCube = parseFloat(3);

    let vCube = dCube * dCube * dCube; // V = √3×d3/9

    console.log(vCube);
}


// Call Functions
calculateRectangle();
calculateTriangle();
calculateCircle();
calculateCylinder();
calculateCube()