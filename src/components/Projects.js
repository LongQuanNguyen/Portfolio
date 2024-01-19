import './Projects.css';
import creditCal from '../assets/project_CreditCal.png';
import countdown from '../assets/project_finalCountdown.png';
import gol from '../assets/project_GameOfLife.png';
import Pixel2D from '../assets/project_pixel2DGame.png';
import rested from '../assets/project_restaurant.png';
import bot from '../assets/project_DiscordBot.png';


const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">I've Been Working On</p>
            <h1 className="title">Projects</h1>
            <div className='project-upper-container'>
                <div className="project-info-container">
                    <img src={gol} alt="Game of Life" />
                    <div className='project-details'>
                        <p className='project-link'><a href="https://github.com/LongQuanNguyen/GameOfLife_Haskell" target="_blank" rel="noopener noreferrer">Conway's Game of Life</a></p>
                        <p>A simple implemention of Game of Life in Haskell programming language.</p>
                    </div>
                </div>

                <div className="project-info-container">
                    <img src={Pixel2D} alt="Escape from Spinx" />
                    <div className='project-details'>
                        <p className='project-link'><a href="#/projects" target="_blank" rel="noopener noreferrer">Escape from Spinx</a></p>
                        <p>A 2D top-down pixel game built using C# and Unity engine.</p>
                    </div>
                </div>

                <div className="project-info-container">
                    <img src={rested} alt="RESTED" />
                    <div className='project-details'>
                        <p className='project-link'><a href="https://git.cs.usask.ca/cmpt370_team33/project" target="_blank" rel="noopener noreferrer">RESTED</a></p>
                        <p>A restaurant management system built using NodeJS, ReactJS and ExpressJS.</p>
                    </div>
                </div>

                <div className="project-info-container">
                    <img src={creditCal} alt="Credit Calculator" />
                    <div className='project-details'>
                        <p className='project-link'><a href="https://github.com/LongQuanNguyen/Credit-Calculator" target="_blank" rel="noopener noreferrer">Credit Calulator</a></p>
                        <p>A calulator app to keep track of grades and credits, built in Java and JavaFX.</p>
                    </div>
                </div>

                <div className="project-info-container">
                    <img src={bot} alt="Discord Bot" />
                    <div className='project-details'>
                        <p className='project-link'><a href="https://github.com/LongQuanNguyen/DiscordBot" target="_blank" rel="noopener noreferrer">Discord Bot</a></p>
                        <p>A Discord Bot to enhance chating experience in Discord server, built with Python.</p>
                    </div>
                </div>

                <div className="project-info-container">
                    <img src={countdown} alt="Finals Countdown" />
                    <div className='project-details'>
                        <p className='project-link'><a href="https://github.com/LongQuanNguyen/TheFinalCountdown" target="_blank" rel="noopener noreferrer">Finals Countdown</a></p>
                        <p>A countdown timer to track time until Final exams week, built with vanila HTML, CSS & JS.</p>
                    </div>
                </div>
                    
            </div>
        </section>
    );
}

export default Projects;