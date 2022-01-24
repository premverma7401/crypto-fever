import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) =>
{
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() =>
    {
        const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filterData)
    }, [cryptoList, searchTerm])

    if (isFetching) return <Loader />
    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder='Search coins...' onChange={(e) => setSearchTerm(e.target.value)} name='search' />
                </div>
            )}

            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((coin) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.uuid}>
                        <Link to={`/crypto/${coin.uuid}`}>
                            <Card title={`${coin.rank}. ${coin.name}`}
                                extra={<img className='crypto-image' src={coin.iconUrl} />}
                                hoverable>
                                <p>Price: {millify(coin.price)}</p>
                                <p>Market Cap: {millify(coin.marketCap)}</p>
                                <p>Daily Change: {millify(coin.change)}% </p>

                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
};

export default Cryptocurrencies;
