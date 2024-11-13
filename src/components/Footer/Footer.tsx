import React, { FC } from 'react'
import styles from './Footer.module.css'

interface FooterProps {
    title: string
}

const Footer: FC<FooterProps> = ({ title }) => (
    <div className={styles.Footer}>
        <h1>{title}</h1>
    </div>
)

export default Footer
