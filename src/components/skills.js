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
      <span1 className="skilltext">JavaScript</span1>
      </div>

      <div className="skill">
      <img src={Node} width="50" height="50" alt='Node'/>
      <span1 className="skilltext">Node.Js</span1>
      </div>

      <div className="skill">
      <img src={sequelize} width="50" height="50" alt='sequelize'/>
      <span1 className="skilltext">Sequelize</span1>
      </div>

      <div className="skill">
      <img src={react} width="50" height="50" alt='react' />
      <span1 className="skilltext">React</span1>
      </div>

      <div className="skill">
      <img src={redux} width="50" height="50" alt='redux' />
      <span1 className="skilltext">Redux</span1>
      </div>

      <div className="skill">
      <img src={HTML5} width="50" height="50" alt='HTML5' />
      <span1 className="skilltext">HTML5</span1>
      </div>

      <div className="skill">
      <img src={CSS} width="50" height="50" alt='CSS' />
      <span1 className="skilltext">CSS3</span1>
      </div>

      <div className="skill">
      <img src={Postgres} width="50" height="50" alt='Postgres' />
      <span1 className="skilltext">PostgreSQL</span1>
      </div>

      <div className="skill">
      <img src={Git} width="50" height="50" alt='Git' />
      <span1 className="skilltext">Git</span1>
      </div>

      <div className="skill">
      <img src={github} width="50" height="50" alt='github' />
      <span1 className="skilltext">Github</span1>
      </div>

      <div className="skill">
      <img src={express} width="50" height="50" alt= "express"/>
      <span1 className="skilltext">Express.Js</span1>
      </div>

      <div className="skill">
      <img src={REST} width="50" height="50" alt='REST' />
      <span1 className="skilltext">REST</span1>
      </div>

      <div className="skill">
      <img src={mocha} width="50" height="50"alt='mocha'/>
      <span1 className="skilltext">Mocha</span1>
      </div>

      <div className="skill">
      <img src={chai} width="50" height="50" alt='chai' />
      <span1 className="skilltext">Chai</span1>
      </div>


      <div className="skill">
      <img src={jasmine} width="50" height="50" alt = 'jasmine'/>
      <span1 className="skilltext">Jasmine</span1>
      </div>

      <div className="skill">
      <img src={bootstrap} width="50" height="50" alt='bootstrap' />
      <span1 className="skilltext">Bootstrap</span1>
      </div>

      <div className="skill">
      <img src={graphql} width="50" height="50" alt='graphql' />
      <span1 className="skilltext">GraphQL</span1>
      </div>

      <div className="skill">
      <img src={Heroku} width="50" height="50" alt='Heroku'/>
      <span1 className="skilltext">Heroku </span1>
      </div>

      <div className="skill">
      <img src={oauth} width="50" height="50" alt='oauth'/>
      <span1 className="skilltext">OAuth</span1>
      </div>

      <div className="skill">
      <img src={unity} width="50" height="50" alt='unity'/>
      <span1 className="skilltext">Unity</span1>
      </div>

      <div className="skill">
      <img src={arkit} width="50" height="50" alt='arkit'/>
      <span1 className="skilltext">ARkit</span1>
      </div>

      </div>
    </div>
    </div>
  )
}
export default Skills
