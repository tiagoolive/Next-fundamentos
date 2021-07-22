import { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

const exemplo = () => {

    return (
        <Layout titulo='Usando componente'>
            <Cabecalho titulo='Next.js & React' />
            <Cabecalho titulo='Aprenda os dois na prática' legal={true} />
        </Layout>
    )
}

export default exemplo
