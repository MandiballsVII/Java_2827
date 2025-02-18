'use client'; // NEXTJS me lo pide
export default function Bio() {
    return (
        <>
            <div className="intro">
                <h1>¡Bienvenido a mi sitio web!</h1>
            </div>
            <p className="summary">
                Puedes encontrar mis reflexiones aquí.
                <br /><br />
                    <b>¡Y <i>fotografías </i></b> de científicos!
            </p>
        </>

    );
}