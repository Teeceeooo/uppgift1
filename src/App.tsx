import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Form from './components/Form/Form'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

function App() {
    const handleClickAlert = () => {
        alert('Du klickade knappen för alert!')
    }

    const handleClickLog = () => {
        console.log('Du klickade knappen för console.log')
    }

    return (
        <div className="App">
            <Header title="Header props"></Header>
            <Content />
            <Form />
            <Button onClick={handleClickAlert} label="Klicka här för alert!" />
            <Button
                onClick={handleClickLog}
                label="Klicka här för console.log!"
            />
            <Footer title="Footer props"></Footer>
        </div>
    )
}

export default App
