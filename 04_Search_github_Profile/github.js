const url = "https://api.github.com/users";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchBtn");


const fetchProfile = async() => {
    const username = searchInput.value;

    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();
        console.log("data",data);
    } catch (error) {
        console.log({error});
    }
};

searchButton.addEventListener("click" , fetchProfile);