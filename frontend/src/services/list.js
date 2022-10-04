export function getList() {
    return fetch('https://bddwskuapi.bddwapps.com/v2/products')
    .then(response => response.data.json())
}

export function getSku(sku) {

    return fetch(`https://bddwskuapi.bddwapps.com/api/${sku}/`)
    .then(response => response.data.json())
}
