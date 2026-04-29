let AddData = (a, b) => {
    return a + b;
};
let SubData = (a, b) => {
    return a - b;
}      
let MulData = (a, b) => {
    return a * b;
}
let DivData = (a, b) => {
    return a / b;
}


// export default AddData; --- IGNORE ---
//default export can only be one in a file but named export can be more than one in a file

//excport are of 2 type 1. default export 2. named export
//named export can be more than one in a file but default export can only be one in a file  
//export
export { AddData, SubData, MulData, DivData };