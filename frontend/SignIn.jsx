import React from 'react';

const SignIn = () => {
  const checkUser = async () => {
    // users input username
    const username = document.querySelector('#userid').value;

    // user input password
    const password = document.querySelector('#userpass').value;
    console.log(username, password);

    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const promise = await fetch('/api/checkuser', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: myHeaders,
      });
      const data = await promise.json();
      console.log('data returned: ', data);

      if (data.result === true) {
        document.querySelector('#correct').style.visibility = 'visible'
      } else if (data.result === false){
        document.querySelector('#incorrect').style.visibility = 'visible'
      }

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
          <label htmlFor='userid'>Enter Your Username:</label>
          <br></br>
          <input id='userid' name='userid' placeholder='Ex: UserName '></input>
        </div>
        <div className='userlogin'>
          <label htmlFor='userpass'>Enter Your Password:</label>
          <br></br>
          <input
            id='userpass'
            name='username'
            type='password'
            placeholder='Ex: Password '
          ></input>
        </div>
        <div className='passlogin'>
          <br></br>
          <button className='userSubmit' onClick={checkUser}>
            {' '}
            Log In
          </button>
        </div>
        <p id='correct' style={{visibility: 'hidden', color: 'green'}}>Successful</p>
        <p id='incorrect' style={{visibility: 'hidden', color: 'red'}}>Unsuccessful</p>
      </div>
      <div className='mortgageContainer'>
        <div className='mortgageImage'></div>
      </div>
    </div>
  );
};

export default SignIn;
