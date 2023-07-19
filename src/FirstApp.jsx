import PropTypes from 'prop-types';

// const csname = (a, b) => (a + b)

export const FirstApp = ({ title, subtitle, name }) => {
    // if (!title) { throw new Error('NO EXISTE EL TITULO, SOS DE MADERA') }

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string
}

FirstApp.defaultProps = {
    subtitle: 'no hay',
    name: 'xd'
}