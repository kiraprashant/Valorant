import React from 'react';
import ValorantMain from './assets/valoranthero.jpg'; // Ensure the path is correct
import Phoneix from "./assets/phoneix.avif"
import Clove from "./assets/clove.webp"
import Kayo from "./assets/kayo.webp"
import Ace from "./assets/Ace.jpg"



function Home() {


  const Agents = [
    { name: 'Phoneix', image: Phoneix, description: 'Phoenix is a fiery duelist from the UK who harnesses flames to heal himself and burn enemies.🔥' },
    { name: 'Clove', image: Clove, description: 'Clove is a mysterious controller with the power to cheat death, allowing them to rejoin fights after being taken down.☠️🌀' },
    { name: 'Agent 3', image: Kayo, description: 'KAY/O is a robotic initiator built to suppress enemy abilities and disrupt strategies.🤖💥' },

  ]
  return (
    <div>
      <main className=''>
        <section
          id="agents"
          style={{
            backgroundImage: `url(${ValorantMain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100vw', // Adjust the height as needed
            color: 'white', // Ensure text is readable
            padding: '20px',

          }}
        >
        </section>
        <section className='' style={{ backgroundColor: "#0f1923" }}>
          <div className='container py-4 mb-4' style={{ textAlign: "center" }}>
            <h2>Agents</h2>
            <h3>🏆 Top Most Used Agent in Tournaments 🔥</h3>
            <div style={{width:"100%", textAlign:"center"}}>
            <div className='Description_agents'>This agent plays a pivotal role in our strategy,
              consistently securing crucial rounds with their versatility and impact.
              Our players execute their abilities with precision,
              ensuring dominance in every match. 🚀🎯</div>
              </div>
            <div className='row mb-4'>
              {
                Agents.map((agent, index) => (
                  <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                    <div className="card" style={{ margin: '10px' }}>
                      <img src={agent.image} alt={agent.name} className="card-img-top" />
                      <div className="container">
                        <h4><b>{agent.name}</b></h4>
                        <p style={{lineHeight:"32px"}}>{agent.description}</p>
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
          <h2 className='mb-4 pb-4' style={{color:"#515152"}}>🏆 Player Performance Overview 🎯</h2>
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
          </div>
        </section>
        <section style={{ backgroundColor: "#0f1923" }}>
           <div className='container py-4' style={{textAlign:"center"}}>
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

      <footer className='footer'>
        <p style={{
          textAlign:"center",
          backgroundColor:"#000",
          color:"#fff",
          padding:"20px"
        }}>&copy; 2025 Valorant Compitetion</p>
      </footer>
    </div>
  );
}

export default Home; 