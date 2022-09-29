export function getList() {
    return fetch('https://bddwskuapi.bddwapps.com/api/all/')
    .then(data => data.json())
}
