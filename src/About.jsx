import React from 'react';
import FounderImage from './assets/founder.jpeg'; // Ensure the path is correct
import CoFounderImage from './assets/cofounder.jpeg'; // Ensure the path is correct

function About() {

    const details = [
        "Official Riot-Endorsed Platform – This tournament is officially recognized by Riot Games, ensuring a legit, scam-free, and professionally managed competition. Only the best teams will rise to the top!",
        "Exclusive Valorant Skins & Rewards – Compete for officially approved in-game skins, weapon cosmetics, and exclusive rewards that can't be obtained anywhere else. Show off your victories in style!",
        "Secure & Fair Play – With strict anti-cheat systems and verified team registrations, every match remains fair, competitive, and free from exploiters or cheaters. Only skill and strategy will decide the winners!",
        "Seamless Tournament Experience – Enjoy a smooth and well-structured competition with real-time match tracking, automated brackets, leaderboards, and team management for a hassle-free experience.",
        "Global Recognition – Get noticed in the official Valorant esports scene, climb the ranks, and prove your skills against top players. Your journey to becoming a Valorant legend starts here!"   
    ]

  return (
    <section className="about-section">
      <div className='container py-5'>
        <h3 className="text-center mb-4" style={{ fontSize: '32px', color: '#ff6666' }}>🏆 Official Valorant Tournament – Endorsed by Riot Games 🎯</h3>
        <div className="text-center mb-4" style={{ fontSize: '18px', color: '#333' }}>
          This officially recognized tournament platform is backed by Riot Games, 
          ensuring a trusted, competitive, 
          and rewarding experience for all Valorant players.
        </div>
        <div className="why-compete">
          <h4 className="mb-3" style={{ color: '#ff6666' }}>Why Compete Here?</h4>
          <ol className="list-group list-group-numbered">
            {details.map((detail, index) => (
              <li key={index} className="list-group-item" style={{ backgroundColor: '#f9f9f9', borderColor: '#ff6666' }}>
                {detail}
              </li>
            ))}
          </ol>
        </div>
        <div className="team-section mt-5">
          <h4 className="text-center mb-3" style={{ color: '#ff6666' }}>Meet the Team</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img src={FounderImage} className="card-img-top" alt="Founder" style={{ width: '100%', height: '450px', objectFit: 'cover', objectPosition: 'top' }} />
                <div className="card-body">
                  <h5 className="card-title">Founder</h5>
                  <p className="card-text">Responsible for managing the frontend development, ensuring a seamless user experience and engaging interface.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img src={CoFounderImage} className="card-img-top" alt="Co-Founder" style={{ width: '100%', height: '450px', objectFit: 'cover', objectPosition: '50% 20%' }} />
                <div className="card-body">
                  <h5 className="card-title">Co-Founder</h5>
                  <p className="card-text">Oversees the backend development, ensuring robust functionality and secure data management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;