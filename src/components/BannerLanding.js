import React from 'react'
import pic02 from '../assets/images/pic02.jpg'

const BannerLanding = (props) => (
    <section id="banner" className="style2" style={{ backgroundImage: `url(${pic02})` }}>
        <div className="inner">
            <header className="major">
                <h2>Detailed Curriculum Coming Soon!</h2>
            </header>
            <div className="content">
                <p>Project based mini courses, everything you learn goes on your portfolio, on your github account</p>
                <p>Aimed at making you a full stack developer ninja with ML skills </p>
                <p>JavaScript, Python, HTML, CSS, Typescript</p>
                <p>Data structures and algorithms, test driven development, open source contributions, system design, security and performance optimisation</p>
            </div>
        </div>
    </section>
)

export default BannerLanding
