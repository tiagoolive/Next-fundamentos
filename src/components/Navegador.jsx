import Link from "next/link"
import styles from '../styles/Navegador.module.css'

const Navegador = (props) => {
    return (
        <div className={styles.navegador} style={{
            backgroundColor: props.cor ?? 'dodgerblue'
        }}> 
            <Link href={props.destino} passHref>
                {props.texto}
            </Link>
        </div>
    )
}

export default Navegador
