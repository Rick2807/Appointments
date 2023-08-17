
function Patient ({patient, setPatient, deleteItem}){
    
    const {
            date,
            email,
            name, 
            owner, 
            symptoms,
             id} = patient; 

    const handleChange = () => { 
        setPatient(patient)
    }


  return (
    <div className='mx-5 mt-10 px-5 py-10 rounded-xl bg-white'>

        <p className='uppercase font-bold mb-3 text-gray-700'>Nombre: {''}
            <span className='font-normal normal-case'>{name}</span>
        </p>

        <p className='uppercase font-bold mb-3 text-gray-700'>Onwer: {''}
            <span className='font-normal normal-case'>{owner}</span>
        </p>

        <p className='uppercase font-bold mb-3 text-gray-700'>Email: {''}
            <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='uppercase font-bold mb-3 text-gray-700'>Date: {''}
            <span className='font-normal normal-case'>{date}</span>
        </p>

        <p className='uppercase font-bold mb-3 text-gray-700'>Symptoms: {''}
            <span className='font-normal normal-case'>{symptoms}</span>
        </p>

        <div className="flex justify-between mt-10">
            <input
                onClick={handleChange}
                className="rounded-lg py-2 px-10 hover:bg-indigo-700 bg-indigo-600 uppercase text-white" 
                type="button"
                value="Edit" />
            
            <input
                className="rounded-lg py-2 px-10 hover:bg-red-700 bg-red-600 uppercase text-white" 
                type="button"
                value="Delete"
                onClick={ () => { deleteItem(id)}}
                />

        </div>

      </div>
  )
}

export default Patient
