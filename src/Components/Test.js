/* useing state in React form */

import React, { useState } from 'react'; 

export default function Test() {

    const [form, setForm] = useState({}); // sarata formaka nrxi nea dwai input dataka waragret
    const [name, setName] = useState(''); // sarata name nrxi nea dwai input dataka waragret

    function handleSubmit(e){
        //stop form submission's default behavior(reloading)
    e.preventDefault(); // boi nachetawa sar formaka ba batali ka alert man ok krd
/*  alert(name);  */
 window.print(form); 
    }

    const handleChange= (event) => { //this is call back function we don't wanna run here , ka gorankariman krd amana rubat
        //give us back the name and value
        const name = event.target.name; /* boi axr gorankari name aka  wargret */
        const value = event.target.value; /* boi axr gorankari value aka wargret */
        //give us back the previous state 
        //set the new state (form object) to the previous state + the new state 
        setForm((values) => ({ ...values, [name]: value }));  //boi input dataii yakam wargret wdamgi bkat ba input datai dwam 
    };

  return (
    <form>
        {/* UserName */}
<label> Enter Your Name </label>
    <input
    type="text"
    name="username"
    value={form.username || ''}
    onChange={handleChange}
    />
    {/* Age */}
<label> Enter Your Age </label>
<input
 value={form.age || ''}
 onChange={handleChange}
type="number"
name="age"
/> 
{/* Email */}
<label> Enter Your Email </label>
<input
 value={form.email || ''}
 onChange={handleChange}
type="text"
name="email"
/>
<br/>

<div> Our Form Object: {JSON.stringify(form)}</div> {/* form aka objecta aikata string */}

<br/>
<button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
  }