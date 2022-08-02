import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);
const Grid = ({ className, children, grid, ...passProps }) => {
    return (
        <div
            className={cx(
                'wrapper',
                {
                    grid: grid,
                },
                className,
            )}
            {...passProps}
        >
            {children}
        </div>
    );
};

Grid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    grid: PropTypes.bool,
};

export default Grid;
