import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Helmet} from "react-helmet";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};



function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example"/>
        </Helmet>
      
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
        
      </section>
    </div>
  );
}


export default App;