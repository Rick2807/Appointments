import Patient from "./Patient"

function PatientList({patients, setPatient, deleteItem}) {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>

      { patients.length ? 
          <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2><p className='text-lg mb-8 mt-5 text-center'>
              Administer your {''}
              <span className='text-indigo-600 font-bold'>Patients and appointments</span>
            </p>

          {patients.map((patient) => { 
            return (
              <Patient
                 setPatient = {setPatient}
                 key={patient.id} 
                 deleteItem={deleteItem}
                 patient={patient}/>
            )
          })}
          </>
         : <>
              <h2 className='font-black text-3xl text-center'>There are no patients</h2><p className='text-lg mb-8 mt-5 text-center'>
              Start adding {''}
              <span className='text-indigo-600 font-bold'>Patients and appointments</span>
            </p>
             </>

         }
      
      
    </div>
  ) 
}

export default PatientList
