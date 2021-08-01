import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Router from 'next/router'

function post() {
    return (
        <>
            <div>post page</div>
            <button onClick={() => Router.push('/?history=post')}>Home</button>
        </>
    )
}

export default post