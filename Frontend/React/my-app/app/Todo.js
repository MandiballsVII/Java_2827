'use client'; // NEXTJS me lo pide
/*
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>Tareas pendientes de {person.name}</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
        <li>Mejorar el videoteléfono</li>
        <li>Preparar clases de aeronáutica</li>
        <li>Trabajar en el motor de alcohol</li>
        </ul>
      </div>
    );
  }
  */

/*
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  url: "https://i.imgur.com/7vQD0fPs.jpg"
};
 
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src={person.url}
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}
  */


const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 'l',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>Tareas pendientes de {person.name}</h1>
            <img
                className="avatar"
                src={baseUrl + person.imageId +person.imageSize +".jpg"}
                alt={person.name}
            />
            <ul>
                <li>Mejorar el videoteléfono</li>
                <li>Preparar clases de aeronáutica</li>
                <li>Trabajar en el motor de alcohol</li>
            </ul>
        </div>
    );
}

