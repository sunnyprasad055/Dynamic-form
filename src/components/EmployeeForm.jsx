import { useEffect, useState } from 'react';
import { getEmployeeData } from "../GetData/apis";
import Formm from '../components/Formm';



const AllEmployeeForm = () => {


    const [employeeData, setEmployeeData] = useState([])

    useEffect(() => {
        getAllEmployeeData();
    }, [])

    const getAllEmployeeData = async() => {
        const response = await getEmployeeData();
        console.log(response.data);
        setEmployeeData(response.data);
    }


    return(
        
        <div>
            <Formm />
        </div>
    )
}

export default AllEmployeeForm;