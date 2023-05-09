import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <>
            <h2 className={css.sectionTitle}>{title}</h2>
            {children}
        </>
    );
    
}

export default Section;

Section.propTypes = {
    titte: PropTypes.string,
    children: PropTypes.node.isRequired,
};