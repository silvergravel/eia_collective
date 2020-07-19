import React, {useEffect} from 'react';
import './App.css';
import email_to from './email_content/email_to.json';
import email_templates from './email_content';
const { to } = email_to;

const App = () => {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const email_to_use = email_templates[getRandomInt(email_templates.length)];
  let { subject, body } = email_to_use;
  body = body.join('%0D%0A%0D%0A');
  let emailString = `mailto:${to}?subject=${subject}&body=${body}`

  useEffect(() => {
    // const email_to_use = email_templates[getRandomInt(email_templates.length)];
    // let { subject, body } = email_to_use;
    // body = body.join('<br>');
    //
    // window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
    document.getElementById('mail_link').click();
  },[])

  return (
    <div className="App">
      <h2>Redirecting you to your email client...</h2>
      <a id='mail_link' href={emailString} target='_blank' style={{visibility: 'hidden'}}>mail</a>
    </div>
  );
}

export default App;
