// Custom React Hook for storing form field data to state
// for use: 
// ~import~
// const [formdata, onChange] = useFormdata({ inputpname1: '', inputpname2: '', inputpnameN: '' })
// provide the onChange function to onChange attribute of input element
// *** Created By:- @KevalMiistry ***

import { useState } from "react";
export default function useFormdata(obj) {
    const [formdata, setFormdata] = useState(obj);

    const onChange = (e) => {
        if (e.target.type === "text") {
            setFormdata({ ...formdata, [e.target.name]: e.target.value });
        } else if (e.target.type === "number") {
            setFormdata({ ...formdata, [e.target.name]: parseInt(e.target.value) });
        }
    };
    return [formdata, onChange];
}
