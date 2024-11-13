import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Content.module.css'

interface ContentProps {}

const Content: FC<ContentProps> = () => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [bgColor, setBgColor] = useState('lightblue')

    const toggleColor = () => {
        setBgColor((prevColor) =>
            prevColor === 'lightblue' ? 'lightgreen' : 'lightblue'
        )
    }

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.backgroundColor = bgColor
        }
    }, [bgColor])

    return (
        <div ref={contentRef}>
            <p>
                Här kommer innehåll som använder useRef, useState och useEffect.
            </p>
            <button onClick={toggleColor}>Klick för att byta färg</button>
        </div>
    )
}

export default Content
