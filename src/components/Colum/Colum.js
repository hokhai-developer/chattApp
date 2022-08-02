import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Colum.module.scss';

const cx = classNames.bind(styles);
const Colum = ({ className, children, noGutter, size, ...passProps }) => {
    const [classColum, setClassColum] = useState({});
    useEffect(() => {
        if (!size || !Array.isArray(size) || size.length === 0) {
            setClassColum({});
            return;
        }
        const objectClassName = {};
        size.forEach((element) => {
            if (element.startsWith('l') || element.startsWith('m') || element.startsWith('s')) {
                objectClassName[element] = element;
            } else {
                setClassColum({});
            }
        });

        if (Object.keys(objectClassName).length === 0 && Object.getPrototypeOf(objectClassName) === Object.prototype) {
            setClassColum({});
            return;
        }
        setClassColum(objectClassName);
    }, [size]);

    return (
        <div
            className={cx(
                'wrapper',
                {
                    'no-gutter': noGutter,
                    ...classColum,
                },
                className,
            )}
            {...passProps}
        >
            {children}
        </div>
    );
};

Colum.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    noGutter: PropTypes.bool,
    size: PropTypes.array,
};

export default Colum;
