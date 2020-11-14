import React from "react";

const Reflection = () => {
    return (
      <div>
        <h1>Home</h1>
        <p>My reflections over CA3</p>
        <p>
          During this project I have learned how to make a functional login system, and how to customize
          our project for various APIs. <br />
          As we quickly found out, different APIs return different kinds of JSON Strings.
          While the API i chose only returned strings, my group members also returned objects, which gave them several problems.
          <br /><br />
          Getting the backend to work with the new api wasn't very difficult. But making a frontend capable of properly showing the API data wasn't as easy.
          <br />
          Currently my frontend is capable of fetching the newest comic from <a href="https://xkcd.com/">XKCD</a>
          <br />And able to fetch a specific comic if you enter a value between 1 and 2384<br/>

            <br/> I ran into some problems with the onChange function of my form, as it changes the value that is used for the fetch as soon as you type it.
            But it doesn't fetch the comic before you press submit. 
            <br/>  Thus, everytime you enter a comic number, it temporarily removes the comic above, until you press "get comic".
            <br/>I was unable to figure out a working fix to this problem, and my group couldn't help me out neither.
            <br/> This is something I would really like fixed, but will have to ask for guidance to it from our teachers.
          <br /><br /><br />

          <b>Stuff we would like to have fixed:</b><br/>
          <li>A thing we noticed, is that when we're running on localhost, we can freely access all the pages without being logged in, but once we deploy it to surge, we get 404 errors instead.  <br/>Which its supposed to give us. But why not on localhost?</li>
            <br/>
            <li>fix the error with Warning: `controlId` is ignored on `FormControl` when `id` is specified.<br/> but the code worked, and we ran out of time. </li>
          <br /> <li>way more tests should also have been implemented</li>
        </p>
      </div>
    );
  };
  
  export default Reflection;