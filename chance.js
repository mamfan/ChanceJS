function chance(elementID) {
    var element = document.querySelector('#' + elementID)
    console.log(Date.now())
    element.setAttribute('style',
        'width: ' + ((Math.random() * parseInt(Date.now() / 1000000000)) + 1) + 'px;' +
        'height: ' + ((Math.random() * parseInt(Date.now() / 1000000000)) + 1) + 'px;')
    chance(elementID)
}

