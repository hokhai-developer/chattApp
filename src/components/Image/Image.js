import React, { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const Image = React.forwardRef(({ className, src, alt = 'pages-ui Success', fallBack, title, ...props }, ref) => {
    const [url, setUrl] = useState(src);
    const handleError = () => {
        const newUrl = fallBack ? fallBack : images.noImage;
        setUrl(newUrl);
    };
    return (
        <img
            className={cx('wrapper', className)}
            src={url}
            alt={alt}
            onError={handleError}
            title={title}
            ref={ref}
            {...props}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    title: PropTypes.string,
};

export default Image;
