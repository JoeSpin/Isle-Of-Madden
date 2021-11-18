import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
  return(
  <div className="flex flex-col h-screen justify-between bg-gray">
    <Header />
    <div className="bg-gray text-white">
      <h2 className="text-center text-3xl">Who We Are</h2>
      <hr style={{color: "purple"}} /> 
      <p className="text-center text-base">
        Founded in 2020 by dedicated users, Isle of Madden is a PC Madden Franchise that aims to bring a simulation-style experience
        for Madden players. No money plays, just fair gameplay. 

      </p>
      <br /> <br />
      <h2 className="text-center text-3xl">Our Mission</h2>
      <hr style={{color: "purple"}} />
      <p className="text-center text-base"> Our league is built upon the idea that a league should be self-governed. Every user 
        gets a say in how the league is run.  We want every voice to be heard, and decisions made based upon the opinions of all members and not just a select few. 
        All changes in the rule-set or structure of the league take user input into careful consideration with full transparency for every decision. Most of all, Isle of Madden 
        is about finding the right mix for balanced sim gameplay and fun. All players, experienced and inexperienced, are welcome to join. 
      </p>
      <br /> <br />
      <h2 className="text-center text-3xl">Our Community</h2>
      <hr style={{color: "purple"}} />
      <p className="text-center text-base">
        Filled with people that love the game of football, every user in our community is expected to be dedicated to ensuring a fair and fun atmosphere for all players. 
        We have content creators that come up with mock drafts, power rankings, our very own magazine "Castaway", a Discord bot, and much more. If you think this league is a fit for you, don't hesitate to join our Discord server and introduce yourself. 
        Many of our users are just as much fans of video games as they are football; you can expect to be able to play just about any other game with our users as well. 
      </p>
      <br /> <br />
      <h2 className="text-center text-3xl">Interested in Joining?</h2>
      <hr style={{color: "purple"}} />
      <p>
        Currently, our league is full. However, you are still welcome to join and get on our waitlist and then once a team opens up, you'll be able to play.
        A link to our Discord page is <a href="#" className="text-purple">here</a> or down below. Stop in, say hi, and become a part of the Isle of Madden today!
      </p>
      <br /> <br />
    </div>
    <Footer />
  </div>
  )
}


export default About;
