import axios from 'axios';


const url = "http://localhost:3003/employeeData";

export const getEmployeeData = async () => {
    return await axios.get(url);
}
 export const form = async(employeeData) => {
     return await axios.post(url, employeeData);
 }