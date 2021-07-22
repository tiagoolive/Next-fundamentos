import React from 'react'
import Layout from '../components/Layout'

const jsx = () => {
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return(
            <h2>{"Muito legal".toUpperCase()}</h2>
        )
    }
    return (
        <Layout titulo='Entendendo JSX'>
            {titulo}
            {subtitulo()}
            {JSON.stringify({nome: 'johnes', idade: 21})}
        </Layout>
    )
}

export default jsx
