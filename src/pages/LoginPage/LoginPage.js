import React, { useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import Container from '~/components/Container';
import Grid from '~/components/Grid';
import Row from '~/components/Row';
import Colum from '~/components/Colum';
import FormLogin from '~/components/FormLogin';
import { AuthContext } from '~/Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const LoginPage = (props) => {
    // const user = useContext(AuthContext);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (user?.id) {
    //         navigate('/');
    //     }
    // }, [user]);
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Grid>
                    <Row>
                        <Colum size={['l-24']}>
                            <div className={cx('content')}>
                                <FormLogin />
                            </div>
                        </Colum>
                    </Row>
                </Grid>
            </Container>
        </div>
    );
};

LoginPage.propTypes = {};

export default LoginPage;
