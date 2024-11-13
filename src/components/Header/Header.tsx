import React, { FC } from 'react'
import styles from './Header.module.css'

interface HeaderProps {
    title: string
}

const Header: FC<HeaderProps> = ({ title }) => (
    <div className={styles.Header}>
        <h1>{title}</h1>
    </div>
)

export default Header
