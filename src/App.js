import React, {useEffect} from 'react';
import './App.css';
import email_to from './email_content/email_to.json';
import email_templates from './email_content';
const { to } = email_to;

let pPadding = {paddingBottom: '20px'};

const App = () => {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const email_to_use = email_templates[getRandomInt(email_templates.length)];
  let { subject, body } = email_to_use;
  let bodyJoined = body.join('<br><br>');
  let emailString = `mailto:${to}?subject=${subject}&body=${bodyJoined}`

  useEffect(() => {
    // const email_to_use = email_templates[getRandomInt(email_templates.length)];
    // let { subject, body } = email_to_use;
    // body = body.join('<br><br>');
    // window.open(`mailto:${to}?subject=${subject}&body=${bodyJoined}`, '_self');
    document.getElementById('mail_link').click();
  },[])

  return (
    <div className="App">
      <h2>Redirecting you to your email client...</h2>
      <h6>Didn't redirect? <a href={emailString}>Click here</a></h6>
      <h6>Still didn't redirect? Please copy paste the email recipient, subject and body given below.</h6>
      <a id='mail_link' href={emailString} style={{visibility: 'hidden'}}>mail</a>
      <div style={{padding: '60px', textAlign: 'left'}}>
        <p ><strong>TO: </strong></p>
        <p style={{paddingBottom: '30px'}}>{to}</p>
        <p ><strong>SUBJECT:</strong></p>
        <p style={{paddingBottom: '30px'}}>{subject}</p>
        {body.map(p => (
          <p style={pPadding}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
