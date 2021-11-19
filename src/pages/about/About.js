import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
  return(
    <div className="w-screen h-screen">
    <Header />
  <div className="flex flex-col items-center justify-between w-screen bg-gray">
    <div className="flex flex-col items-center justify-center w-2/3 text-white md:w-1/2 bg-gray center">
      <h2 className="pt-10 text-3xl text-center">Who We Are</h2>
      <p className="text-base text-center">
        Founded in 2020 by dedicated users, Isle of Madden is a PC Madden Franchise that aims to bring a simulation-style experience
        for Madden players. No money plays, just fair gameplay. 
      </p>
      <h2 className="pt-10 text-3xl text-center">Our Mission</h2>
      <p className="text-base text-center"> Our league is built upon the idea that a league should be self-governed. Every user 
        gets a say in how the league is run.  We want every voice to be heard, and decisions made based upon the opinions of all members and not just a select few. 
        All changes in the rule-set or structure of the league take user input into careful consideration with full transparency for every decision. Most of all, Isle of Madden 
        is about finding the right mix for balanced sim gameplay and fun. All players, experienced and inexperienced, are welcome to join. 
      </p>
      <h2 className="pt-10 text-3xl text-center">Our Community</h2>
      <p className="text-base text-center">
        Filled with people that love the game of football, every user in our community is expected to be dedicated to ensuring a fair and fun atmosphere for all players. 
        We have content creators that come up with mock drafts, power rankings, our very own magazine "Castaway", a Discord bot, and much more. If you think this league is a fit for you, don't hesitate to join our Discord server and introduce yourself. 
        Many of our users are just as much fans of video games as they are football; you can expect to be able to play just about any other game with our users as well. 
      </p>
      <h2 className="pt-10 text-3xl text-center">Interested in Joining?</h2>
      <p>
        Currently, our league is full. However, you are still welcome to join and get on our waitlist and then once a team opens up, you'll be able to play.
        A link to our Discord page is <a href="#" className="text-purple">here</a> or down below. Stop in, say hi, and become a part of the Isle of Madden today!
      </p>
    </div>
  </div>
  <Footer />
  </div>
  )
}


export default About;
