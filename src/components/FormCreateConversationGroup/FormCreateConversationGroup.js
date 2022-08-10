import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormCreateConversationGroup.module.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Divide from '../Divide';
import ConversationList from '~/layOuts/components/Conversation/ConversationList';
import ConversationItem from '~/layOuts/components/ConversationItem';
import ListUser from '../ListUser';
import ItemUser from '../Form/ItemUser';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormHeader from '~/components/Form/FormHeader';
import { AppContext } from '~/Context/AppProvider';
import FormBottom from '../Form/FormBottom';
import { Popper } from '@mui/material';

const cx = classNames.bind(styles);
const FormCreateConversationGroup = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [openPopper, setOpenPopper] = useState(false);
    const { setShowAddNewConversationGroup } = useContext(AppContext);
    const { showAddNewConversationGroup } = useContext(AppContext);
    const inputRef = useRef(null);
    const addRef = useRef(null);

    useLayoutEffect(() => {
        setOpenPopper(showAddNewConversationGroup);
        setInputValue('');
    }, [showAddNewConversationGroup]);
    return (
        <div
            className={cx('wrapper-form')}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <FormHeader title="Tạo nhóm" handleCloseModel={setShowAddNewConversationGroup} />
            <div className={cx('body')}>
                <div className={cx('group')}>
                    <label htmlFor="name-group" className={cx('name')}>
                        Tên nhóm :
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập tên nhóm...không vượt quá 100 kí tự"
                        id="name-group"
                        className={cx('input-name')}
                    />
                </div>
                <p className={cx('title')}>Tìm kiếm thành viên</p>
                <div className={cx('add-form')} ref={addRef}>
                    <button className={cx('btn-search')}>
                        <Icon>
                            <SearchOutlinedIcon />
                        </Icon>
                    </button>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tên thành viên nhóm..."
                        className={cx('input')}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    {inputValue.length > 0 && (
                        <button
                            className={cx('btn-clear')}
                            onClick={() => {
                                setInputValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <Icon>
                                <ClearOutlinedIcon />
                            </Icon>
                        </button>
                    )}
                    <Popper
                        open={openPopper && inputValue.trim().length > 0}
                        anchorEl={addRef.current}
                        placement="bottom-start"
                        className={cx('popper')}
                    >
                        <div className={cx('list-result')}>
                            <ItemUser title={'Mời vào nhóm'} />
                            <ItemUser title={'Mời vào nhóm'} />
                            <ItemUser title={'Mời vào nhóm'} />
                            <ItemUser title={'Mời vào nhóm'} />
                            <ItemUser title={'Mời vào nhóm'} />
                            <ItemUser title={'Mời vào nhóm'} />
                            <ItemUser title={'Mời vào nhóm'} />
                            <ItemUser title={'Mời vào nhóm'} />
                        </div>
                    </Popper>
                </div>
                <div className={cx('add-members')}>
                    <p className={cx('title')}>Danh sách bạn:</p>
                    <ItemUser title={'Mời vào nhóm'} />
                </div>
            </div>
            <FormBottom handleCloseModel={setShowAddNewConversationGroup} />
        </div>
    );
};

FormCreateConversationGroup.propTypes = {};

export default FormCreateConversationGroup;
