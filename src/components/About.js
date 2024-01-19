import './About.css';
import educationIcon from '../assets/education.png';
import interestIcon from '../assets/interest.png';

const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img src={interestIcon} alt="Interest icon" className="icon default-cursor"/>
                                <h3>Interest</h3>
                                <p>Software Development. <br />Systems Modeling.</p>
                            </div>
                            <div className="details-container">
                                <img src={educationIcon} alt="Education icon" className="icon default-cursor"/>
                                <h3>Education</h3>
                                <p>B.Sc in Computer Science.<br />Minor in Mathematics.</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                            I am an undergraduate pursuing a Bachelor of Computer Science degree at the University of Saskatchewan, 
                            where most of my fellow students know me under the alias Tony. I have a huge interest in Maths and 
                            I love the idea of how numbers and logic translated into the key drivers of today's lives, 
                            in digitalized form. I am passionate about acquiring and sharing my knowledge with others, with the hope 
                            that good impacts can be realized.
                            <br/><br/>Aside from academics, I am an amateur photographer, a book lover, a sports enjoyer and a ponderer. 
                            <br/>&emsp;Ever since coming to Canada in 2019, I have developed a strong liking for the local nature. 
                            I adore the patterns in the natural seasons, and I am even more amazed when the patterns sometimes get broken, 
                            exhibiting stochastic features of life; which motivated me to capture these moments through the lens of 
                            the camera.
                            <br/>&emsp;Picking up English is the most rewarding decision I ever made. It doubled the amount of books I could read 
                            and quadruple the amount of confusions (ways to confuse: vi-vi, en-en, vi-en, en-vi). This is perfectly 
                            aligning my insatiable curiosity. Novels and narratives, with immersive worlds and perspectives, captivate me the most.
                            <br/>&emsp;And then there is sport, who would not love the adrenaline rush? The hype, the clutch shots, the swift and 
                            seamless movements, are all encapsulated in the world of basketball. It is the best sport indoors when 
                            outside is cold and the best sport outdoors when outside is not cold. I also engage in other sports 
                            (mostly due to the lack of basketball companions or I am forced to join). 
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default About;