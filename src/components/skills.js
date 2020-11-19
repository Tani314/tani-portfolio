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
import '../styles/skills.css'


const Skills = (props) => {
  return(

    <div id='skills'>
    <div className="all">
      <h3>Skills</h3>
      <div className="logo">

      <div className="skill">
      <img src={JavaScript} width="50" height="50" alt='JavaScript'/>
      <span className="skilltext">JavaScript</span>
      </div>

      <div className="skill">
      <img src={Node} width="50" height="50" alt='Node'/>

      <span className="skilltext">Node.Js</span>
      </div>

      <div className="skill">
      <img src={sequelize} width="50" height="50" alt='sequelize'/>
      <span className="skilltext">Sequelize</span>
      </div>

      <div className="skill">

      <img src={react} width="50" height="50"  alt='react' />
      <span className="skilltext">React</span>
      </div>

      <div className="skill">
      <img src={redux} width="50" height="50" alt='redux' />
      <span className="skilltext">Redux</span>
      </div>

      <div className="skill">
      <img src={HTML5} width="50" height="50" alt='HTML5' />
      <span className="skilltext">HTML5</span>
      </div>

      <div className="skill">
      <img src={CSS} width="50" height="50" alt='CSS' />
      <span className="skilltext">CSS3</span>
      </div>

      <div className="skill">
      <img src={Postgres} width="50" height="50" alt='Postgres' />
      <span className="skilltext">PostgreSQL</span>
      </div>

      <div className="skill">
      <img src={Git} width="50" height="50" alt='Git' />
      <span className="skilltext">Git</span>
      </div>

      <div className="skill">
      <img src={github} width="50" height="50" alt='github' />
      <span className="skilltext">Github</span>
      </div>

      <div className="skill">
      <img src={express} width="50" height="50" alt= "express"/>
      <span className="skilltext">Express.Js</span>
      </div>

      <div className="skill">
      <img src={REST} width="50" height="50" alt='REST' />
      <span className="skilltext">REST</span>
      </div>

      <div className="skill">
      <img src={mocha} width="50" height="50"alt='mocha'/>
      <span className="skilltext">Mocha</span>
      </div>

      <div className="skill">
      <img src={chai} width="50" height="50" alt='chai' />
      <span className="skilltext">Chai</span>
      </div>


      <div className="skill">
      <img src={jasmine} width="50" height="50" alt = 'jasmine'/>
      <span className="skilltext">Jasmine</span>
      </div>

      <div className="skill">
      <img src={bootstrap} width="50" height="50" alt='bootstrap' />
      <span className="skilltext">Bootstrap</span>
      </div>

      <div className="skill">
      <img src={graphql} width="50" height="50" alt='graphql' />
      <span className="skilltext">GraphQL</span>
      </div>

      <div className="skill">
      <img src={Heroku} width="50" height="50" alt='Heroku'/>
      <span className="skilltext">Heroku </span>
      </div>

      <div className="skill">
      <img src={oauth} width="50" height="50" alt='oauth'/>
      <span className="skilltext">OAuth</span>
      </div>

      <div className="skill">
      <img src={unity} width="50" height="50" alt='unity'/>
      <span className="skilltext">Unity</span>
      </div>

      <div className="skill">
      <img src={arkit} width="50" height="50" alt='arkit'/>
      <span className="skilltext">ARkit</span>
      </div>

      </div>
    </div>
    </div>
  )
}
export default Skills
