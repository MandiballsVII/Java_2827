'use client'; // NEXTJS me lo pide
/*
function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Científicos increíbles</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
*/
  export function Imagen() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Científicos increíbles</h1>
        <Imagen />
        <Imagen />
        <Imagen />
      </section>
    );
  }
  