import React from 'react';
import Counters from './components/Counters.js'
import Navbar from './components/Navbar.js';

const App = () => {
   return(
       <div>
           <Navbar />
           <main className="container">
         <Counters />

           </main>
       </div>
   )
}
export default App;