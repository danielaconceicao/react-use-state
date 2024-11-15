import languages from '../database/languages'
import { useState } from 'react'

export default function AppMain() {

    const [active, setActive] = useState(0)

    function handleclick(e) {
        const content = Number(e.target.getAttribute('data-content'))

        setActive(content)
    }


    return (
        <main>
            <div className="button-container">
                {languages.map((item, index)=> (
                    <button key={item.id} onClick={handleclick} data-content={item.content}>
                        {item.nome}
                    </button>
                ))}
            </div>
        </main>
    )
}


