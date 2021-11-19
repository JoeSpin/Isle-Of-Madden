import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function RulesPage() {
    return (
        <div className="h-screen dark:bg-gray">
            <Header />
            <h2 className="text-2xl font-semibold text-center h-4/6 pt-28 dark:text-white dark:bg-gray">While we wait for the rules page to be properly formatted and searchable, you may view the rules page <a className="text-3xl text-purple" href="https://docs.google.com/document/d/1P5qdQW0G4EWW42iPRP5hJgfcSLoSa0K4NYSNTEX7w1g/edit?usp=sharing">here.</a></h2>
            <Footer />
        </div>
    )
}
