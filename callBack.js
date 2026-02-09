const fetchData = (callBack) => {
    callBack("Data Fetched");
}

const fun1 = (data) => console.log(data);

fetchData(fun1);

// Callback more than 2 level is callback hell
// async await came into play to avoid callback hell

const login = async () => {
    await authorization();
    await passwordCheck();
}