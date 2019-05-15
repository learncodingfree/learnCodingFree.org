import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="learncodingfree.org"
                    meta={[
                        { name: 'description', content: 'learn coding and become a full stack developer ninja' },
                        { name: 'keywords', content: 'react, javascript, data structures' },
                    ]}
                >
                </Helmet>


                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${pic01})` }}>
                            <header className="major">
                                <h3>your instructor</h3>
                                <p>Tanay Pratap, Engineer @Microsoft</p>
                            </header>
                            <a target="_blank" href="https://www.linkedin.com/in/tpratap/" className="link primary"></a>
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                                <h3>curriculum</h3>
                                <p>full stack developer, ml, problem solving ninja</p>
                            </header>
                            <Link to="/curriculum" className="link primary"></Link>
                        </article>
                        <article id="html-course" style={{ backgroundImage: `url(${pic03})` }}>
                            <header className="major">
                                <h3>start the course</h3>
                                <p>learn html css while creating your own portfolio and hosting it</p>
                                <p>you will have your own web address once you're done with this</p>
                                <p>it's smart practice to subscribe to the channel so that you don't miss future lessons</p>
                            </header>
                            <a target="_blank" href="https://www.youtube.com/watch?v=E8cl_8ktp9M&list=PLzvhQUIpvvug-c-bExl_xFcopeQi_sa29" className="link primary"></a>
                        </article>
                        <article style={{ backgroundImage: `url(${pic04})` }}>
                            <header className="major">
                                <h3>learn everyday, join the community</h3>
                                <p>an open course, built with your feedback, participate and ask questions</p>
                                <p>A dedicated instagram account only for this course </p>
                            </header>
                            <a target="_blank" href="https://instagram.com/tanaypratap" className="link primary"></a>
                        </article>
                        <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>frequently asked questions (faq)</h3>
                                <p>We know you'd have questions, check if it's already answered</p>
                            </header>

                            <a target="_blank" href="https://www.youtube.com/playlist?list=PLzvhQUIpvvuhBNrOVqlhRnhDqz8ob6MeW" className="link primary"></a>
                        </article>
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>ask me anything (ama)</h3>
                                <p>If you don't find an answer on the AMA playlist, chances are it's unique.</p>
                                <p>Put your question then in the Github AMA repository, go through README you'll understand what to do</p>
                            </header>
                            <a target="_blank" href="https://bit.ly/tanay-ama" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Got stuck with course somewhere?</h2>
                            </header>
                            <p>Let's build a community where you can get your doubts related to the course answered and you help others to move forward</p>
                            <ul className="actions">
                                <a target="_blank" href="https://www.facebook.com/groups/328710937827045" className="button next"> JOIN THE FB GROUP</a>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex