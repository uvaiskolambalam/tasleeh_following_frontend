import axios from 'axios';

const ServerUrl=axios.create({
    // baseURL:"https://artgallery.buzz/"
    baseURL:"http://localhost:5000/"

})

export default ServerUrl