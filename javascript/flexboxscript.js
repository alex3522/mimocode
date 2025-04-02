function flexColumn() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'column';
    styleUpdate();
}
function flexRow() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'row';
    styleUpdate();
}
function justifyAround() {
    const container = document.querySelector('.container');
    container.style.justifyContent = 'space-around';
    styleUpdate();
}
function justifyBetween() {
    const container = document.querySelector('.container');
    container.style.justifyContent = 'space-between';
    styleUpdate();
}
function justifyCenter() {
    const container = document.querySelector('.container');
    container.style.justifyContent = 'center';
    styleUpdate();
}
function alignCenter() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'center';
    styleUpdate();  
}
function alignStart() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'flex-start';
    styleUpdate();
}
function alignEnd() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'flex-end';
    styleUpdate();
}
function alignStretch() {
    const container = document.querySelector('.container');
    container.style.alignItems = 'stretch';
    styleUpdate();
}
function flexColumnReverse() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'column-reverse';
    styleUpdate();
}
function flexRowReverse() {
    const container = document.querySelector('.container');
    container.style.flexDirection = 'row-reverse';
    styleUpdate();
}
function wrap() {
    const container = document.querySelector('.container');
    container.style.flexWrap = 'wrap';
    styleUpdate();
}
function noWrap() {
    const container = document.querySelector('.container');
    container.style.flexWrap = 'nowrap';
    styleUpdate();
}
function wrapReverse() {
    const container = document.querySelector('.container');
    container.style.flexWrap = 'wrap-reverse';
    styleUpdate();
}
function alignContentCenter() {
    const container = document.querySelector('.container');
    container.style.alignContent = 'center';
    styleUpdate();
}
function alignContentStart() {
    const container = document.querySelector('.container');
    container.style.alignContent = 'flex-start';
    styleUpdate();
}
function alignContentEnd() {
    const container = document.querySelector('.container');
    container.style.alignContent = 'flex-end';
    styleUpdate();
}
function alignContentSpaceAround() {
    const container = document.querySelector('.container');
    container.style.alignContent = 'space-around';
    styleUpdate();
}
function alignContentSpaceBetween() {
    const container = document.querySelector('.container');
    container.style.alignContent = 'space-between';
    styleUpdate();
}
function alignContentStretch() {
    const container = document.querySelector('.container');
    container.style.alignContent = 'stretch';
    styleUpdate();
}

function styleUpdate() {
    const container = document.querySelector('.container');
    const style = `
        flex-direction: ${container.style.flexDirection};
        justify-content: ${container.style.justifyContent};
        align-items: ${container.style.alignItems};
        flex-wrap: ${container.style.flexWrap};
        align-content: ${container.style.alignContent};
    `;
    console.log(style);
    const report = document.querySelector('.report');
    report.innerHTML = `Container style updated to: ${style}`;
}