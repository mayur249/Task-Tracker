import PropTypes from 'prop-types';

const Button = ({color, text, onclick}) => {
    return (
        <div>
            <button style={{backgroundColor: color}} className='btn' onClick = {onclick}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: "black",
    text: "Add"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func
}

export default Button
