import React from 'react'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

const Codigo = () => {
    const router = useRouter()
    return (
        <Layout titulo='Navegação dinâmica'>
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}

export default Codigo
