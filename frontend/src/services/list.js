export function getList() {
    return fetch('http://bddwskuapi.bddwapps.com/api/all/')
    .then(data => data.json())
}
