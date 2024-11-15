import languages from '../database/languages'
import { useState } from 'react'

export default function AppMain() {

    const [active, setActive] = useState('Nessun linguaggio selezionato')

    function handleclick(e) {
        const content = e.target.getAttribute('data-content')

        setActive(content)
    }


    return (
        <main>
            <div className="button-container">
                {languages.map((item)=> (
                    <button key={item.id} onClick={handleclick} data-content={item.content}>
                        {item.nome}
                    </button>
                ))}
            </div>
            <div className='res-btn'>
                {<p>{active}</p>}
            </div>
        </main>
    )
}


