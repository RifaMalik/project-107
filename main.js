https://teachablemachine.withgoogle.com/models/JO6_wPyis/model.json

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JO6_wPyis/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}