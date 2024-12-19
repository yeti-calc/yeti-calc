import React from 'react';

const Login = () => {
  const newUserEntry = async () => {
    // users input name
    const name = document.querySelector('#userid').value;

    // users input username
    const username = document.querySelector('#username').value;

    // user input password
    const password = document.querySelector('#password').value;
    //console.log(name, username, password);

    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const promise = await fetch('/api/saveuser', {
        method: 'POST',
        body: JSON.stringify({ name, username, password }),
        headers: myHeaders,
      });
      const data = await promise.json();
      console.log('data returned: ', data);
    } catch (error) {
      console.log('Error in newUserEntry function in the App.jsx', error);
    }
  };

  return (
    <div className='pageContainer'>
      <div id='titleContainer'>
        <div id='icon'></div>
        <h3>Yeti Crab Mortgage Calculator</h3>
      </div>

      <div className='loginContainer'>
        <h2>Create An Account</h2>

        <div className='userIdlogin'>
          <label htmlFor='userid'>Enter Your New Name</label>
          <br></br>
          <input id='userid' name='userid' placeholder='Ex: Full Name '></input>
        </div>
        <div className='userlogin'>
          <label htmlFor='username'>Enter Your New Username</label>
          <br></br>
          <input
            id='username'
            name='username'
            placeholder="Ex: 'Jayson123'/'Goku' "
          ></input>
        </div>
        <div className='passlogin'>
          <label htmlFor='password'>Enter Your New Password</label>
          <br></br>
          <input
            id='password'
            name='password'
            placeholder='Numbers & Characters'
          ></input>
          <br></br>
          <button className='userSubmit' onClick={newUserEntry}>
            {' '}
            Become a new User
          </button>
        </div>
      </div>
      <div className='mortgageContainer'>
        <div className='mortgageImage'></div>
      </div>
    </div>
  );
};

export default Login;
