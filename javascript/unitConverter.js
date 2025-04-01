function calculate(){
    const el = document.getElementById("result");
    const numToConv = document.getElementById("value").value;
    const convType = document.getElementById("conversion").value;
    if (convType === "miles"){
        el.innerHTML = numToConv * 1.60934 + " km";
    }
    else if (convType === "km"){
        el.innerHTML = numToConv / 1.60934 + " miles";
    }
    else if (convType === "feet"){
        el.innerHTML = numToConv * 0.3048 + " m";
    }
    else if (convType === "meters"){
        el.innerHTML = numToConv / 0.3048 + " feet";
    }
    else {
        el.innerHTML = "Please select a conversion type.";
    }
}

