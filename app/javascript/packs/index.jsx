import React from "react";
import { ReactDOM } from "react-dom";
import PropTypes from 'prop-types'
import App from "../components/App";

const Hello = props => (
    <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
    name: 'David'
}

Hello.propTypes = {
    name: PropTypes.string
}

document.addEventListener('DOMContentLoader', () => {
    ReactDOM.render(
        <Hello name="React" />,
        document.body.appendChild(document.createElement('div'))
    )
})