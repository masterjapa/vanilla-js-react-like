
import App from './components/app'

const customRender = {
    render(reactElement, domElement, callback) {
        // const { type, props, children } = reactElement
        console.log(reactElement, domElement, callback)
        // domElement.appendChild(document.createElement(reactElement.type()))
    },
}

window.addEventListener('load', () => {
    customRender.render(<App />, document.getElementById('app'))
})
