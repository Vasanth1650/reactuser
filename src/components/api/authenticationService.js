import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${'http://localhost:8080'}/user/login`,
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'POST',
        url:`${process.env.hostUrl||'http://localhost:8080'}/current-user`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}