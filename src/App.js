import React, { useState } from "react";
import "./styles.css";
var database = {
  dev: [
    {
      name: "Tanay pratap",
      description: "Being the mentor he never had",
      rating: "5/5"
    },
    {
      name: "Dan Abramov",
      description: "Creator of Redux",
      rating: "5/5"
    },
    {
      name: "Brian Holt",
      description: "dev experience PM at stripe",
      rating: "4.5/5"
    },
    {
      name: "Kent C.Dodds",
      description: "Teaches front end development",
      rating: "4.5/5"
    }
  ],
  Entrepreneurs: [
    {
      name: "Naval",
      description:
        "Co-founder of angel List ,Great thinker please listen to his podcast on Youtube on joe rogan's channel",
      rating: "5/5"
    },
    {
      name: "Kunal shah",
      description: "Founer of CRED",
      rating: "5/5"
    },
    {
      name: "varun Mayya",
      description: "Founder of avalon",
      rating: "5/5"
    }
  ],
  PM: [
    {
      name: "The product folks",
      description: "Community to learn product management",
      rating: "5/5"
    },
    {
      name: "Anushmani Ruddra",
      description: "PM at Google",
      rating: "5/5"
    },
    {
      name: "Shreyas Doshi",
      description:
        "starup advisor built products at Stripe,Twitter,google and yahoo",
      rating: "5/5"
    }
  ]
};
var databaseArr = Object.keys(database);

export default function App() {
  var [genere, set] = useState("dev");
  function clickHandler(element) {
    set(element);
  }
  return (
    <div className="App">
      <h1>Good twitter handles to follow</h1>
      <h4>Check out my favorite twitter handles</h4>
      <div>
        {databaseArr.map((element) => {
          return (
            <button onClick={() => clickHandler(element)}>{element}</button>
          );
        })}
        <hr></hr>
      </div>
      <div>
        {database[genere].map((person) => {
          return (
            <div className="container">
              <h3>{person.name}</h3>
              <p>{person.description}</p>
              <p>rating:{person.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
