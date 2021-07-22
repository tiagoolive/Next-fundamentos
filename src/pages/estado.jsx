import { useState } from 'react'
import Layout from '../components/Layout'

const Estado = () => {
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
    }
    return (
        <Layout titulo='Componente com estado'>
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}

export default Estado
