// Helper methods
const convertValue = (value) => {
    let [number, valueName] = value.split(' ', 2)
    switch (valueName) {
        case 'million':
            number *= Math.pow(10, 6)
            break;
        case 'billion':
            number *= Math.pow(10, 9)
            break;
        case 'trillion':
            number *= Math.pow(10, 12)
            break;
        case 'quadrillion':
            number *= Math.pow(10, 15)
            break;
        case 'quintillion':
            number *= Math.pow(10, 18)
            break;
        case 'sextillion':
            number *= Math.pow(10, 21)
            break;
        case 'octillion':
            number *= Math.pow(10, 27)
            break;
        case 'nonillion':
            number *= Math.pow(10, 30)
            break;
        case 'decillion':
            number *= Math.pow(10, 33)
            break;
        case 'undecillion':
            number *= Math.pow(10, 36)
            break;
        case 'duodecillion':
            number *= Math.pow(10, 39)
            break;
        case 'tredecillion':
            number *= Math.pow(10, 42)
            break;
        case 'quattuordecillion':
            number *= Math.pow(10, 45)
            break;
        case 'quindecillion':
            number *= Math.pow(10, 48)
            break;
        case 'sexdecillion':
            number *= Math.pow(10, 51)
            break;
        case 'septendecillion':
            number *= Math.pow(10, 54)
            break;
        case 'octodecillion':
            number *= Math.pow(10, 57)
            break;
        case 'novemdecillion':
            number *= Math.pow(10, 60)
            break;
        case 'vigintillion':
            number *= Math.pow(10, 63)
            break;
        case 'centillion':
            number *= Math.pow(10, 303)
            break;
        default:
            number.replace(',', '.')
            break;
    }
    return parseInt(number)
}

// Create autoclicks
const cookieButton = document.getElementById('bigCookie')
const cookieButtonClick = () => cookieButton.click()
const cookieButtonAutoClick = setInterval(cookieButtonClick, 1)

// Create autobuy (Need helpers methods)
const productListElementArray = document.getElementById('products').children
const productListArray = Array
    .from(productListElementArray)
    .map(listItem => { if (listItem.classList.contains('product')) return listItem })
    .filter(product => { if (product != null) return product })
const autoBuyMethod = () => {
    let expensiveAvailableProductIndex = -1
    let expensiveAvailableProductValue = 0
    productListArray.forEach((product, index) => {
        const productValue = convertValue(document.getElementById(`productPrice${index}`).innerHTML)
        if (product.classList.contains('enabled') && productValue >= expensiveAvailableProductValue) {
            expensiveAvailableProductIndex = index
            expensiveAvailableProductValue = productValue
        }
    })
    if (expensiveAvailableProductIndex >= 0) productListArray[expensiveAvailableProductIndex].click()
}
const autoBuy = setInterval(autoBuyMethod, 1000)
