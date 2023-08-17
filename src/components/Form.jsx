import { useState, useEffect } from "react";
import Error from "./Error";

function Form ({ patients, setPatients, patient, setPatient}){

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    // Crear alerta de error 
    const [error, setError] = useState(false);

    // create a use effect 
    useEffect(() => { 
        if(Object.keys(patient).length > 0){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        }
    }, [patient])

    // function that creates an unique id 
    const generateId = () => { 
        const a = Date.now().toString(30);
        const b = Math.random().toString(36);

        return a + b ;
    }

 

    const handleSubmit = e => { 
        e.preventDefault(); 

        // it will only execute this conditional if it is true otherwise skip
        if([name,owner,email,date,symptoms].includes('')){
            setError(true);
            return; 
        }
        setError(false);

        // build an object to store in the main component
        const newPatients = { 
            name,
            owner,
            email,
            date,
            symptoms,
        }

        if(patient.id){
            // Editing register 
            newPatients.id = patient.id; 
            const updatedPatient = patients.map( patientState => patientState.id === patient.id ? newPatients : patientState);

            setPatients(updatedPatient);
            setPatient({})
        }else{ 
            newPatients.id = generateId(); 
            // send object to main component
            setPatients([...patients, newPatients])

        }

        //restart form 
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
    }

    
    return (
        <div className="mx-5 md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>  

            <p className="text-lg mb-8 mt-5 text-center">
                Add Patients and {''}
                <span className="text-indigo-600 font-bold"> Admins</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-indigo-100 shadow-md rounded-lg py-10 mb-7 px-5">
                <div>
                    {error && <Error />}
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
                        Name of pet 
                    </label>
                    <input 
                        id="pet"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name of pet"
                        className="border-2 w-full p-2 mt-2 mb-4 placeholder-slate-400 rounded-md"
                        />

                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Name of Owner
                    </label>

                    <input 
                        id="owner"
                        type="text"
                        value={owner}
                        onChange={e => setOwner(e.target.value)}
                        placeholder="Name of owner"
                        className="border-2 w-full p-2 mt-2 mb-4 placeholder-slate-400 rounded-md"
                        />
                        
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email Address 
                    </label>

                    <input 
                        id="email"
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="border-2 w-full p-2 mt-2 mb-4 placeholder-slate-400 rounded-md"
                        />
                    
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                        DATE 
                    </label>

                    <input 
                        id="pet"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="border-2 w-full p-2 mt-2 mb-4 placeholder-slate-400 rounded-md"
                        />

                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Symptoms 
                    </label>
                    <textarea 
                        id="sintomas"
                        placeholder="describe your symptoms"
                        value={symptoms}
                        onChange={e => setSymptoms(e.target.value)}
                        className="resize-none border-2 w-full p-2 mt-2 mb-4 placeholder-slate-400 rounded-md"
                        />

                    <input 
                        type="submit"
                        value={patient.id ? 'Edit Patient': 'Add Patient' }
                        className="w-full bg-indigo-600 p-2 font-bold text-white"
                    />
                </div>

            </form>
        </div>
    )
}

export default Form; 