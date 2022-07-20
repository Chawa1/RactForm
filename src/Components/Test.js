import React, { useState } from 'react'; 

export default function Test() {
    const {form, setForm} = useState({});
    const {name, setName} = useState('');
    const username={};

    function handleSubmit(e){
        //stop form submission's default behavior(reloading)
        e.preventDefault();
        alert(name);
    }

    const handleChange= (event) => {
        //give us back the name and value
        const name = event.target.name;
        const value = event.target.value;
        //give us back the previous state 
        //set the new state (form object) to the previous state + the new state 
        setForm((values) => ({ ...values, [name]: value }));
    };

  return (
    <form>
        {/* UserName */}
<label> Enter your Name </label>
    <input
    type="text"
    name="username"
    value={form.username || ''}
    onChange={handleChange}
    />
    {/* Age */}
<label> Enter your Age </label>
<input
 value={form.age || ''}
 onChange={handleChange}
type="number"
name="age"
/> 
{/* Email */}
<label> Enter your email </label>
<input
 value={form.email || ''}
 onChange={handleChange}
type="text"
name="email"
/>

<div> Our Form Object: {JSON.stringify(form)}</div>

<br/>
<button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
  }