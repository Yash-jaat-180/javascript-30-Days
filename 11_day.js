// Activity 1
new Promise((resolve) => {
    resolve(setTimeout(() => {
        console.log('resolved');
        resolve("success");
    }, 2000));
})

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is an error");
    }, 2000);
});
myPromise
.then((value) => console.log(value))
.catch((err) => console.log( err))

// Activity 3

async function fetchData(api){
    return await fetch(api).then((res) => res.json());
}

fetchData("https://api.kanye.rest/")
.then((data) => {
    console.log("Data1 : ", data);
    return fetchData("https://api.kanye.rest/")
})
.catch((err) => {
    console.log("Error in fetching ", err)
})
.then((data) => {
    console.log("Data2 : ", data);
})

// Activity 3
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Activity 3");
        reject("Activity 3 is rejected");
    }, 2000);
})

async function asyncCall(){
    try {
        const result = await newPromise;
        console.log(result);
    } catch (error) {
        console.log("Error is :",error);
    }
}
asyncCall();

// Activity 4

async function fetchThem(api){
    await fetch(api)
    .then((data) => 
    data
        .json()
        .catch((error ) => console.log("Errro!!!!!!", error))
        .then((data) => console.log("OK!!", data))
)
}

fetchThem("https://api.kanye.rest/");

// Activity 5
const promise1 = 24;
const promise3 = Promise.resolve(4);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("yahooo")
    }, 3000);
})

Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
})

Promise.race([promise1, promise2, promise3])
.then((value) => console.log(value));