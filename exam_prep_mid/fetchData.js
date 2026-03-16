const API = "https://fakestoreapi.com/users";

async function dis() {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error("Error fetching data");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Unexpected error ', error);
    }
}

dis();