import React from 'react';
import arkit from '../assets/arkit.jpeg'
import bootstrap from '../assets/bootstrap.png'
 import chai from '../assets/chai.png'
 import CSS from '../assets/CSS.png'
 import express from '../assets/express.png'
 import Git from '../assets/Git.png'
 import github from '../assets/github.png'
 import graphql from '../assets/graphql.png'
 import Heroku from '../assets/Heroku.png'
 import HTML5 from '../assets/HTML5.png'
import jasmine from '../assets/jasmine.png'
 import JavaScript from '../assets/JavaScript.png'
 import mocha from '../assets/mocha.png'
 import Node from '../assets/Node.jpeg'
 import Postgres from '../assets/Postgres.png'
import react from '../assets/react.svg'
import redux from '../assets/redux.png'
 import REST from '../assets/REST.png'
 import oauth from '../assets/oauth.png'
 import sequelize from '../assets/sequelize.png'
 import unity from '../assets/unity.png'



const Skills = (props) => {
  return(
    <div>
      <h3>Skills</h3>
      <div className="logo">

      <div className="skill">
      <img src={JavaScript} width="40" height="40" alt='JavaScript'/>
      <span className="skilltext">JavaScript</span>
      </div>

      <div className="skill">
      <img src={Node} width="40" height="40" alt='Node'/>
      <span className="skilltext">Node.Js</span>
      </div>

      <div className="skill">
      <img src={sequelize} width="40" height="40"alt='sequelize'/>
      <span className="skilltext">Sequelize</span>
      </div>

      <div className="skill">
      <img src={react} width="40" height="40"alt='react' />
      <span className="skilltext">React</span>
      </div>

      <div className="skill">
      <img src={redux} width="40" height="40"alt='redux' />
      <span className="skilltext">Redux</span>
      </div>

      <div className="skill">
      <img src={HTML5} width="40" height="40" alt='HTML5' />
      <span className="skilltext">HTML5</span>
      </div>

      <div className="skill">
      <img src={CSS} width="40" height="40" alt='CSS' />
      <span className="skilltext">CSS3</span>
      </div>

      <div className="skill">
      <img src={Postgres} width="40" height="40" alt='Postgres' />
      <span className="skilltext">PostgreSQL</span>
      </div>

      <div className="skill">
      <img src={Git} width="40" height="40" alt='Git' />
      <span className="skilltext">Git</span>
      </div>

      <div className="skill">
      <img src={github} width="40" height="40" alt='github' />
      <span className="skilltext">Github</span>
      </div>

      <div className="skill">
      <img src={express} width="40" height="40" alt= "express"/>
      <span className="skilltext">Express.Js</span>
      </div>

      <div className="skill">
      <img src={REST} width="40" height="40" alt='REST' />
      <span className="skilltext">REST</span>
      </div>

      <div className="skill">
      <img src={mocha} width="40" height="40" alt='mocha'/>
      <span className="skilltext">Mocha</span>
      </div>

      <div className="skill">
      <img src={chai} width="40" height="40" alt='chai' />
      <span className="skilltext">Chai</span>
      </div>


      <div className="skill">
      <img src={jasmine} width="40" height="40" alt = 'jasmine'/>
      <span className="skilltext">Jasmine</span>
      </div>

      <div className="skill">
      <img src={bootstrap} width="40" height="40" alt='bootstrap' />
      <span className="skilltext">Bootstrap</span>
      </div>

      <div className="skill">
      <img src={graphql} width="40" height="40" alt='graphql' />
      <span className="skilltext">GraphQL</span>
      </div>

      <div className="skill">
      <img src={Heroku} width="40" height="40" alt='Heroku'/>
      <span className="skilltext">Heroku</span>
      </div>

      <div className="skill">
      <img src={oauth} width="40" height="40" alt='oauth'/>
      <span className="skilltext">OAuth</span>
      </div>

      <div className="skill">
      <img src={unity} width="40" height="40" alt='unity'/>
      <span className="skilltext">Unity</span>
      </div>

      <div className="skill">
      <img src={arkit} width="40" height="40" alt='arkit'/>
      <span className="skilltext">ARkit</span>
      </div>

      </div>
    </div>
  )
}
export default Skills
