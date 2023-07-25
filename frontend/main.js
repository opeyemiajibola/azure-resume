window.addEventListener('DOMContentLoaded', (event) => {
    getVisitcount();
})

const functionApi = '';

const getVisitcount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Wesbite called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}