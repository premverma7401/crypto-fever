import React from 'react';
import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'
import './App.css'
import Layout from 'antd/lib/layout/layout';
import { Link, Route, Routes } from 'react-router-dom';
import { Space, Typography } from 'antd';
const App = () =>
{
    return <div className='app'>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                        <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                        <Route exact path='/news' element={<News />} />
                    </Routes>
                </div>
            </Layout>
            <div className="footer">
                <Typography.Title style={{ color: 'white', textAlign: 'center' }} title={5}>
                    Cryptoverse <br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/cryptocurrencies'>Cryptocurrency</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>

        </div >

    </div >
};

export default App;
