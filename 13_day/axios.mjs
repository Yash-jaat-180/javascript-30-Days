import axios from "axios"

async function axiosRequest(){
    try {
        let data = await axios.get('https://api.kanye.rest/');
        if(!data.data){
            throw new Error("Can't fetch Data");
        }
        console.log(data.data);
    } catch (error) {
        console.log(error.message);
    }
}
axiosRequest();