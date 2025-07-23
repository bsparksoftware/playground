import React, { useState } from 'react';

const DaySelect = ({ day, setDay }) => {
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  return (
    <select value={day} onChange={(e) => setDay(e.target.value)} style={selectStyleSmall}>
      {days.map((d) => (
        <option key={d} value={d}>{d}</option>
      ))}
    </select>
  );
};

const MonthSelect = ({ month, setMonth }) => {
  const months = [
    { value: '1', label: 'Jan' }, { value: '2', label: 'Feb' }, { value: '3', label: 'Mar' },
    { value: '4', label: 'Apr' }, { value: '5', label: 'May' }, { value: '6', label: 'Jun' },
    { value: '7', label: 'Jul' }, { value: '8', label: 'Aug' }, { value: '9', label: 'Sep' },
    { value: '10', label: 'Oct' }, { value: '11', label: 'Nov' }, { value: '12', label: 'Dec' },
  ];
  return (
    <select value={month} onChange={(e) => setMonth(e.target.value)} style={{ ...selectStyle, marginLeft: '15px' }}>
      {months.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  );
};

const YearSelect = ({ year, setYear }) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear + 5; y >= 1905; y--) {
    years.push(y.toString());
  }
  return (
    <select value={year} onChange={(e) => setYear(e.target.value)} style={{ ...selectStyle, marginLeft: '15px' }}>
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>
  );
};

const GenderRadio = ({ gender, setGender }) => (
  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
    <label><input type="radio" name="sex" value="1" checked={gender === '1'} onChange={() => setGender('1')} /> Female</label>
    <label><input type="radio" name="sex" value="2" checked={gender === '2'} onChange={() => setGender('2')} /> Male</label>
    <label><input type="radio" name="sex" value="-1" checked={gender === '-1'} onChange={() => setGender('-1')} /> Custom</label>
  </div>
);

const Test = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('1');
  const [month, setMonth] = useState('1');
  const [year, setYear] = useState('2000');
  const [gender, setGender] = useState('');
  const [pronoun, setPronoun] = useState('');
  const [customGender, setCustomGender] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dateError, setDateError] = useState('');

  const handleSubmit = () => {
    setDateError('');

    const dayInt = parseInt(day, 10);
    const monthInt = parseInt(month, 10);

    if (monthInt === 2 && dayInt > 29) {
      setDateError('❌ Invalid date for February');
      return;
    }

    if (firstName && lastName && emailOrPhone && password) {
      setSubmitted(true);
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div style={pageContainer}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: 'center' }}>👤 Registration Form</h2>

<div style={{ display: 'flex', gap: '30px', marginBottom: '20px', justifyContent: 'center' }}>
  <div style={{ flex: 1, minWidth: '140px' }}>
    <label>First Name</label>
    <input
      type="text"
       placeholder="Enter first name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      style={{ ...inputStyle, width: '100%' }}
    />
  </div>
  <div style={{ flex: 1, minWidth: '140px' }}>
    <label>Last Name</label>
    <input
      type="text"
       placeholder="Enter last name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      style={{ ...inputStyle, width: '100%' }}
    />
  </div>
</div>


        <label>Select Date of Birth</label>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', justifyContent: 'center' }}>
          <DaySelect day={day} setDay={setDay} />
          <MonthSelect month={month} setMonth={setMonth} />
          <YearSelect year={year} setYear={setYear} />
        </div>

        {dateError && (
          <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>
            {dateError}
          </div>
        )}<br></br>

        <label>Gender</label>
        <GenderRadio gender={gender} setGender={setGender} />

        {gender === '-1' && (
          <>
            <div style={{ marginTop: '20px' }}>
              <label>Select your pronoun</label>
              <select value={pronoun} onChange={(e) => setPronoun(e.target.value)} style={{ ...selectStyle, width: '300px' }}>
                <option value="" disabled>Select your pronoun</option>
                <option value="1">She: "Wish her a happy birthday!"</option>
                <option value="2">He: "Wish him a happy birthday!"</option>
                <option value="6">They: "Wish them a happy birthday!"</option>
              </select>
            </div>
            <div style={{ marginTop: '10px' }}>
              <label>Gender (optional)</label>
              <input type="text" value={customGender} onChange={(e) => setCustomGender(e.target.value)} style={inputStyle} />
            </div>
          </>
        )}

        <div style={{ marginTop: '30px', marginBottom: '20px' }}>
          <label htmlFor="email_or_phone">Mobile number or email address</label>
          <input
            type="text"
            id="email_or_phone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            style={inputStyle}
            placeholder="Enter email or phone"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password_step_input">New Password</label>
          <input
            type="password"
            id="password_step_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            placeholder="Enter new password"
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck="false"
          />
        </div>

 

        <button onClick={handleSubmit} style={buttonStyle}>Sign Up</button>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <a href="https://bsparksoftwaretechnologies.com">Already have an account?</a>
        </div>

        {submitted && (
          <div style={{ marginTop: '30px', color: 'green', fontWeight: 'bold', textAlign: 'center' }}>
            ✅ Sign Up Successful!
          </div>
        )}
      </div>
    </div>
  );
};

const pageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f2f5',
  padding: '20px',
};

const boxStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  width: '400px',
  maxWidth: '95%',
  boxSizing: 'border-box',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  width: '300px',
  marginTop: '5px',
};

const selectStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  width: '130px',
};


const selectStyleSmall = {
  ...selectStyle,
  width: '80px',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  backgroundColor: '#42b72a',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  width: '100%',
};

export default Test;
