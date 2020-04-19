import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>learncodingfree.org</h1>
      </header>
      <div className="content">
        <p>
          Join a community of 20,000+ students from 50+ countries! <br />
        </p>{' '}
        <p>
          Learn how to be a full stack developer ninja with Tanay Pratap,
          Engineer@Microsoft
        </p>
        <ul className="actions">
          <li>
            <a href="#html-course" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
        <p>
          {' '}
          Hey! Do checkout out <em>jobchallenge.dev</em> if you're looking for a
          job or internship as a fresher. Registrations open till June 1st, 2020
        </p>
        <ul className="actions">
          <li>
            <a
              href="http://2020.teamtanay.jobchallenge.dev/"
              className="button next scrolly"
            >
              take the job challenge
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
