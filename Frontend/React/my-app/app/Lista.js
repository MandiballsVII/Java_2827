'use client'; // NEXTJS me lo pide

function Lista(){
    return(
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
        </ul>
    );
}

export default function ListaConTitulo(){
    return(
        <>
            <h1>Mi componente lista</h1>
            <Lista />
        </>
    );
}