// const predictForm = document.getElementById('prediction');
const eForm = document.getElementById('epochForm');
eForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const epochsData = e.target.elements.epochs.value;
    if(epochsData < 1){
        alert('You must enter a positive number');
    } else {
        document.getElementById('message').innerHTML = "training...";
        await training(model, xs, ys, epochsData);
        document.getElementById('message').innerHTML = "training completed";
        predictionRequest(inputData);
    }
})

// predictForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const predictionData = e.target.elements.data.value.split(',').map(n => parseInt(n));
//     predictionRequest(predictionData);

// })

let inputData = [1, 1, 1, 1, 1, 1, 1];

let segmentA = document.getElementById('segmentA');
let segmentB = document.getElementById('segmentB');
let segmentC = document.getElementById('segmentC');
let segmentD = document.getElementById('segmentD');
let segmentE = document.getElementById('segmentE');
let segmentF = document.getElementById('segmentF');
let segmentG = document.getElementById('segmentG');

segmentA.addEventListener("click", () => {
    if(inputData[0] === 1){
        inputData[0] = 0;
        segmentA.style.opacity = "0.1";
    } else {
        inputData[0] = 1;
        segmentA.style.opacity = "1.0";
    }
    predictionRequest(inputData);
});

segmentB.addEventListener("click", () => {
    if(inputData[1] === 1){
        inputData[1] = 0;
        segmentB.style.opacity = "0.1";
    } else {
        inputData[1] = 1;
        segmentB.style.opacity = "1.0";
    }
    predictionRequest(inputData);
});

segmentC.addEventListener("click", () => {
    if(inputData[2] === 1){
        inputData[2] = 0;
        segmentC.style.opacity = "0.1";
    } else {
        inputData[2] = 1;
        segmentC.style.opacity = "1.0";
    }
    predictionRequest(inputData);
});

segmentD.addEventListener("click", () => {
    if(inputData[3] === 1){
        inputData[3] = 0;
        segmentD.style.opacity = "0.1";
    } else {
        inputData[3] = 1;
        segmentD.style.opacity = "1.0";
    }
    predictionRequest(inputData);
});

segmentE.addEventListener("click", () => {
    if(inputData[4] === 1){
        inputData[4] = 0;
        segmentE.style.opacity = "0.1";
    } else {
        inputData[4] = 1;
        segmentE.style.opacity = "1.0";
    }
    predictionRequest(inputData);
});

segmentF.addEventListener("click", () => {
    if(inputData[5] === 1){
        inputData[5] = 0;
        segmentF.style.opacity = "0.1";
    } else {
        inputData[5] = 1;
        segmentF.style.opacity = "1.0";
    }
    predictionRequest(inputData);
});

segmentG.addEventListener("click", () => {
    if(inputData[6] === 1){
        inputData[6] = 0;
        segmentG.style.opacity = "0.1";
    } else {
        inputData[6] = 1;
        segmentG.style.opacity = "1.0";
    }
    predictionRequest(inputData);
});


const xs = tf.tensor2d([
    [1, 1, 1, 1, 1, 1, 0], //0
    [0, 1, 1, 0, 0, 0, 0], //1
    [1, 1, 0, 1, 1, 0, 1], //2 
    [1, 1, 1, 1, 0, 0, 1], //3
    [0, 1, 1, 0, 0, 1, 1], //4
    [1, 0, 1, 1, 0, 1, 1], //5
    [1, 0, 1, 1, 1, 1, 1], //6
    [1, 1, 1, 0, 0, 0, 0], //7
    [1, 1, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 0, 1, 1]  //9
], [10, 7]);
const ys = tf.tensor2d([
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0,], 
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1,]
    ], [10, 10]);


const training = async (model, dataX, dataY, epochs) => {
    console.log('training...');
    await model.fit(dataX, dataY, {epochs});
    console.log('finished train');
}

let predictionRequest = (iData) => {
    model.predict(tf.tensor2d(iData, [1, 7])).array().then(array => {
        let arrayData = array[0].map(n => n.toFixed(2));
        document.getElementById("modelResult").innerHTML = arrayData;
        document.getElementById("modelResultMax").innerHTML = indexOfMax(arrayData);
    });
}

const indexOfMax = (arr) => {
    
    var max = arr[0];
    var maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}


const model = tf.sequential();
model.add(tf.layers.dense({units: 10, inputShape: [7]}));
model.compile({optimizer: 'adam', loss: 'meanSquaredError'});

// training(model, xs, ys, 100);


