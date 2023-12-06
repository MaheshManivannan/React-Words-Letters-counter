index.js
--------
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

App.js
------
import React from "react";
import CounterApp from "./Counter";
const App = () => {

  return (
    <>
    <CounterApp />
    </>
  );
}
export default App;

Style.css
----------
body {
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin: 20px;
    background-color:  #99ffff;
  }
  
  h1 {
    color: #333;
    text-shadow: 5px 5px 20px gray;
  }
  
  textarea {
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 12px;
    box-shadow: 5px 5px 20px gray;
    resize: none;
    font-size: 17px;

  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    font-size: 17px;
    font-weight: bold;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  h2 {
    margin-top: 20px;
    color: #333;
  }
  span{
    font-size: 35px;
    color: #000066;
  }
  
Counter.js
----------
import React, { useState } from "react";
import "./Style.css";
const CounterApp = () => {
    const [words,setWords] = useState("");
    const [count,setCount] = useState(0);
    const [letters,setLetters] = useState(0);
    const countWords = () => {
        let a = words.split(" ");
        let b = a.filter((ele) => ele.trim());
        let c = b.length;
        let d = words.split("");
        let e = d.filter((ele) => ('a' <= ele.toLowerCase() && ele.toLowerCase() <= 'z') ? ele : null);
        let f = e.length;
        setLetters(f);
        setCount(c);
    }
    return (
        <>
        <h1>WORDS & LETTERS COUNTER</h1>
        <textarea 
        rows="18" 
        cols="75"
        placeholder="Enter/Paste your text"
        value={words}
        onChange={(e) => setWords(e.target.value)}  
        style={{resize: "none"}}      
        ></textarea> <br />
        <button type="button" onClick={() => countWords()}>Count</button>
        <h2>Total Number of Words = <span>{count}</span></h2>
        <h2>Total Number of Letters = <span>{letters}</span></h2>
        
        </>
    );
}
export default CounterApp;

index.html
-----------
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Words/letter counter</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
