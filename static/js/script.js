let url: "https://randomuser.me/api/";
let risorsa;

fetch(url).then{
    (response) => {
        return response.json();
    }
}