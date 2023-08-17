import { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PatientList from './components/PatientList'

function App() {

const [patients, setPatients]  = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
const [patient, setPatient]  = useState({});

console.log(patients)

useEffect(() => {
   localStorage.setItem('patients', JSON.stringify(patients))
}, [patients]);

const deleteItem = (id) => { 
 const updatedPatients = patients.filter(patient => patient.id !== id ); 
 setPatients(updatedPatients)

}
  return (
    <div className="container mx-auto mt-20">
     <Header /> 
     <div className='mt-20 md:flex'>
        <Form 
          patient = {patient}
          patients = {patients}
          setPatients={setPatients}
          setPatient={setPatient}

        />
        <PatientList 
          patients = {patients}
          setPatient = {setPatient}
          deleteItem = { deleteItem}
        />
     </div>
    </div>
  )
}

export default App
