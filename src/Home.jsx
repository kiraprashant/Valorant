import React from 'react';
import ValorantMain from './assets/valoranthero.jpg'; // Ensure the path is correct
import Phoneix from "./assets/phoneix.avif"
import Clove from "./assets/clove.webp"
import Kayo from "./assets/kayo.webp"
import Ace from "./assets/Ace.jpg"
import Weapons from "./assets/weapons.png"
import Vandal from "./assets/Vandal.webp"
import Ghost from "./assets/Ghost.webp"
import Bulldog from "./assets/Bulldog.jpg"
import Map from "./assets/map.avif"


function Home() {


  const Agents = [
    { name: 'Phoneix', image: Phoneix, description: 'Phoenix is a fiery duelist from the UK who harnesses flames to heal himself and burn enemies.🔥' },
    { name: 'Clove', image: Clove, description: 'Clove is a mysterious controller with the power to cheat death, allowing them to rejoin fights after being taken down.☠️🌀' },
    { name: 'Agent 3', image: Kayo, description: 'KAY/O is a robotic initiator built to suppress enemy abilities and disrupt strategies.🤖💥' },

  ]

  const WeaponsSkin = [
    { name: 'Vandal', image: Vandal, description: 'A powerful automatic rifle, known for its consistent damage and one-tap headshots at any range.' },
    { name: 'Ghost', image: Ghost, description: 'A silenced semi-automatic pistol, offering high accuracy and good damage for eco rounds.' },
    { name: 'Bulldog', image: Bulldog, description: 'A budget-friendly rifle that performs best in close-range fights, with a burst-fire mode for quick eliminations..' },
  ]

  return (
    <div>
      <main className='' style={{backgroundColor:"#f0f0f0"}} >
        <section
          id="agents"
          style={{
            backgroundImage: `url(${ValorantMain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%', // Change from '100vw' to '100%' to prevent overflow
            color: 'white', // Ensure text is readable
            padding: '20px',
            boxSizing: 'border-box', // Ensure padding doesn't cause overflow
          }}
        >
          <div className="hero-heading">🔥 Valorant Tournament 5v5</div>
          <div className="hero-subheading">Compete, dominate, and claim victory! 
            Assemble your team and join the battle. 🏆🎯
          </div>
        </section>
        <section className='' style={{ backgroundColor: "#0f1923" }}>
          <div className='container py-4 mb-4' style={{ textAlign: "center" }}>
            <h2>Agents</h2>
            <h3>🏆 Top Most Used Agent in Tournaments 🔥</h3>
            <div style={{ width: "100%", textAlign: "center" }}>
              <div className='Description_agents'>This agent plays a pivotal role in our strategy,
                consistently securing crucial rounds with their versatility and impact.
                Our players execute their abilities with precision,
                ensuring dominance in every match. 🚀🎯</div>
            </div>
            <div className='row mb-4'>
              {
                Agents.map((agent, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={index}>
            <div className="card" style={{ margin: '10px' }}>
                      <img src={agent.image} alt={agent.name} className="card-img-top" />
                      <div className="container">
                        <h4><b>{agent.name}</b></h4>
                        <p style={{ lineHeight: "32px" }}>{agent.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div style={{ textAlign: "center", color: "#D3D3D3", fontSize: '24px' }}>Even more Agent to explore...</div>

          </div>
        </section>
        <section>
          <div className='container'>
        <div className='row mb-4'>
              {
                WeaponsSkin.map((agent, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={index}>
                    <div className="card weapon-card" style={{ margin: '10px' }}>
                      <img src={agent.image} alt={agent.name} className="card-img-top weapon-image" />
                      <div className="container">
                        <h4><b>{agent.name}</b></h4>
                        <p style={{ lineHeight: "32px" }}>{agent.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            </div>


        </section>
  
        <section className='' style={{ backgroundColor: "#0f1923" }}>
          <div className='container py-5'>
            <h2 className='mb-4 pb-4' style={{ }}>🏆 Player Performance Overview 🎯</h2>
            <div className='row mb-4'>
              <div className='col-lg-6 col-sm-12'>
                <div>
                  <p className='Description_performance'>
                    Our players have demonstrated outstanding skill, game sense, and teamwork,
                    making them a dominant force in every tournament. Their precise aim,
                    quick decision-making, and
                    mastery of agent abilities allow them to execute flawless
                    strategies and clutch critical rounds.
                    With a deep understanding of enemy tactics, they adapt swiftly,
                    turning the tide of battle in our favor.
                    Whether it's securing key eliminations,
                    setting up perfect utility plays, or making game-winning moves,
                    our team consistently delivers
                    high-impact performances that keep us ahead of the competition. 🚀🔥
                  </p>
                </div>
              </div>
              <div className='col-lg-6 col-sm-12'>
                <img src={Ace} alt="Description" className="img-fluid" />
              </div>
            </div>
            <div className='row mt-5'>
            <div className='col-lg-6 col-sm-12'>
            <img src={Map} alt="Description" className="img-fluid" />
            </div>
            <div className='col-lg-6 col-sm-12'>
              <p className='Description_performance'>Master the Map – Control the Game! 🗺️🔥
                Understanding the map is crucial for securing victory. 
                Learn key positions, chokepoints, and sightlines to predict enemy 
                movements and make smarter plays. Whether you're holding a site, 
                setting up crossfires, or executing strategic rotations, 
                map control can turn the tide of battle. Stay aware, 
                communicate with your team, and use every advantage to dominate 
                the competition! 🚀🎯</p>
            </div>
            </div>

          </div>
        </section>
        <section>
          <div className='container py-4'>
            <h2 className='mb-4' style={{ color: "#515152", textAlign: "center" }}>Competition Overview</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Competition</th>
                    <th>Number of Registrations</th>
                    <th>Managing Countries</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Valorant Championship 2023</td>
                    <td>1500</td>
                    <td>USA, India, UK</td>
                  </tr>
                  <tr>
                    <td>Valorant Summer Cup</td>
                    <td>1200</td>
                    <td>USA, India, UK</td>
                  </tr>
                  <tr>
                    <td>Valorant Winter Clash</td>
                    <td>1800</td>
                    <td>USA, India, UK</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#0f1923" }}>
          <div className='container py-4' style={{ textAlign: "center" }}>
            <div>
              <h3>Join the Battle – Be Part of Our Community! ⚔️🔥</h3>
              <p className='Description_agents'>
                Step into the action and become part of our growing community
                of competitive players and passionate fans. Whether you're here to
                dominate tournaments, improve your skills, or just enjoy the game
                with like-minded teammates, there's a place for you.
                Connect, strategize,
                and rise to the top—this is your chance to make your mark! 🚀🎯
              </p>
            </div>
            <button className='Join_Button'>Join Battle</button>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Home; 