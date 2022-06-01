import { useState, useEffect } from "react";
import axios from "axios";

export const user = () => {
    // States
    const [data, setData] = useState(null) 

    // Detauls URL
    const url = process.env.USER_PROFILE_URL_PATH;
    const username = process.env.USERNAME

    // Get User short detail
    fetchUser = async () => {
        try {
            await axios.get(url + username)
            .then(response => console.log(response.data))
        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() =>{
        fetchUser()
    }, [])
    return data
} 