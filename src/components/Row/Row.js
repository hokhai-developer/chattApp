import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

const cx = classNames.bind(styles);
const Row = ({ className, children, noGutter, ...passProps }) => {
    return (
        <div
            className={cx(
                'wrapper',
                {
                    'no-gutter': noGutter,
                },
                className,
            )}
            {...passProps}
        >
            {children}
        </div>
    );
};

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    noGutter: PropTypes.bool,
};

export default Row;
