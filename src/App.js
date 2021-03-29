import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <ContactForm />
        <Gallery currentCategory={currentCategory} />
        <About />
      </main>
    </div>
  );
}

export default App;
// import React from 'react';
//
// function SomeComponent() {
//   let seconds = 0;
//
//   function startStopwatch() {
//     setInterval(() => {
//       console.log(seconds);
//       seconds += 1;
//     }, 1000);
//   }
//
//   return (
//     <div>
//       {seconds}
//       <button onClick={startStopwatch}>Start</button>
//     </div>
//   );
// }
//
// export default SomeComponent;
// import React, { useState } from 'react';
// function SomeComponent() {
//   const [seconds, setSeconds] = useState(0);
//
//   function startStopwatch() {
//     let updatedSeconds = seconds;
//     setInterval(() => {
//       updatedSeconds += 1;
//       console.log(updatedSeconds);
//       setSeconds(updatedSeconds);
//     }, 1000);
//   }
//
//   return (
//     <div>
//       {seconds}
//       <button onClick={startStopwatch}>Start</button>
//     </div>
//   );
// }
// export default SomeComponent;
