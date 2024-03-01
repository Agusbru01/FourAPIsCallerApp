//ToDo: hacerlo mas completo
export const fetchData = async (url) => {
    var response = await fetch(url)
                .then(response => response.json())
                .then(data => { return data })
                .catch(error => console.error("Error al llamar a la API:", error));
    return response
}