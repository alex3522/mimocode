function flexColumn() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'column';
}
function flexRow() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'row';
}
function justifyAround() {
    const container = document.querySelector('.container');
    container.style.justifyContent = 'space-around';
}
function justifyBetween() {
    const container = document.querySelector('.container');
    container.style.justifyContent = 'space-between';
}
function justifyCenter() {
    const container = document.querySelector('.container');
    container.style.justifyContent = 'center';
}
function alignCenter() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'center';
}
function alignStart() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'flex-start';
}
function alignEnd() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'flex-end';
}
function alignStretch() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'stretch';
}
function flexColumnReverse() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'column-reverse';
}
function flexRowReverse() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'row-reverse';
}