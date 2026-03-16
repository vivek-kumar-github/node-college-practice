// A function that returns a Promise
const performTask = ((data, delay) => {
    return new Promise((resolve, reject) => {
        console.log(`Starting task: ${data}`);
        setTimeout(() => {
            const suc = true;
            if (suc) {
                resolve(`Resolved: ${data}`);
            } else {
                reject(`Rejected: ${data}`);
            }
        }, delay)
    })
})

// --- The Promise Chain ---
performTask("user auth", 1000)
    .then((result) => {
        console.log(result);
        return performTask("fetch user data ", 1500);
    })
    .then((res) => {
        console.log(res);
        return performTask("update database", 500);
    })
    .then((res) => {
        console.log(res);
    })

    //user authtentication
    //fetch user profile
    //update database
    //all task finished
