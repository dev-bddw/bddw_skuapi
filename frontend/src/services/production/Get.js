export function getList() {

    return fetch('https://bddwskuapi.bddwapps.com/v2/products/')
    .then(response => response.json())
}

export function getSku(sku) {

    return fetch(`https://bddwskuapi.bddwapps.com/v2/products/${sku}/`)
    .then(response => response.json())
}

export function getScans(sku) {

    return fetch(`https://bddwscans.com/v2/scans/?sku=${sku}`)
    .then(response => response.json())
}
