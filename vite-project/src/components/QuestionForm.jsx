import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('f')
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='my_input' defaultValue='Tapez votre texte' />
                <textarea
                    value={inputValue}
                    onChange={(e) => checkValue(e.target.value)}
                />
                <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>

            </form>

        </div>
    )

}
function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}
export default QuestionForm