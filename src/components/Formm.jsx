import {   Select, FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typograpy, MenuItem } from '@material-ui/core';
import { useState } from 'react'
import { form } from '../GetData/apis'


const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        
        '& > *': {
            marginTop:20
        }
        
    }
})

const initialValues = {
    employeeName: '',
    designation: '',
    contactDetails: '',
    phnNo: '',
    skills:'',
    dob:''
}




    const Formm = () => {
        const[employeeData, setEmployeeData] = useState(initialValues);
        const {employeeName, designation, phnNo, skills, dob} = employeeData;
 
    const classes = useStyle('');

        const onValueChange = (e) => {
            setEmployeeData({...employeeData, [e.target.name]: e.target.value });
        }

        const addFormDetails = async () => {
            await form(employeeData)
        }

    return(
       <FormGroup className= {classes.container}>
           
           <FormControl>
               <InputLabel>Employee Name:</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name= 'employeeName' />
           </FormControl>
           <FormControl>
               <InputLabel>Designation</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name='designation' />
           </FormControl>
           <FormControl>
           </FormControl>
           <FormControl>
              <InputLabel>Phone Number</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name = 'phnNo' />
           </FormControl>
         <FormControl>
              <InputLabel>Skills</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name = 'skills' />
               <Button>+</Button>
           </FormControl>
           <FormControl>
              <InputLabel>Date of birth</InputLabel>
               <Input onChange={(e) => onValueChange(e)} name = 'dob' />
           </FormControl>
           <Button onClick={() => addFormDetails()} >Add Employee</Button>
           <Button><a href="http://localhost:3003/employeeData" target="_blank">Veiw Employee details</a></Button>
       </FormGroup>
    )
}
export default Formm;