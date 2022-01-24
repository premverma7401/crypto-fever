import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Menu, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import icon from '../images/cryptocurrency.png'
import { HomeOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';

const Navbar = () =>
{
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() =>
    {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() =>
    {
        screenSize < 768 ? setActiveMenu(false) : setActiveMenu(true)
    }, [screenSize])

    return <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>

        </div>
        {activeMenu && (
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        )}

    </div>;
};

export default Navbar;
