import { useState } from 'react';
/*
    dari website reactnative.dev, dan StackOveflow
    
    Custom Hook atau Custom Use State        
    Hook Mengirimkan 2 Parameter: 
    1. Value
    2. Function untuk merubah
    return [ value, function ]
*/
const useForm = (initialValue) => {
    const [ form, setForm ] = useState(initialValue);
    return [ 
        form, 
        (formType, formValue) => {
            if(formType === 'reset') {
                return setForm(initialValue)
            }
            return setForm({...form, [formType]:formValue })
        }
    ]
};

export default useForm;

