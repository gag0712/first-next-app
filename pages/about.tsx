import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'

function about(props) {
    console.log(props);
    
    return (
        <>
            <div>about page</div>
            <button onClick={() => Router.push('/?history=about')}>Home</button>
        </>
    )
}

export default about