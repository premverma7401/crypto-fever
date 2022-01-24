import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import icon from '../images/cryptocurrency.png'
import { HomeOutlined } from '@ant-design/icons/lib/icons';

const Navbar = () =>
{
    return <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>;
};

export default Navbar;
