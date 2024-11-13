import React, { FC, useState } from 'react'
import styles from './Form.module.css'

interface FormProps {}

const Form: FC<FormProps> = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Skriv något här!"
            />
            <p>Du har skrivit: {inputValue}</p>
        </div>
    )
}

export default Form
