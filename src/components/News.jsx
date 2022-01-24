import { Card, Col, Row, Select } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Option } from 'antd/lib/mentions';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import moment from 'moment';
import React, { useState } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = ({ simplified }) =>
{
    const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const { data } = useGetCryptosQuery(100);


    if (!cryptoNews?.value) return 'Loading...';
    console.log(cryptoNews.value[0].name);

    return <div>
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        placeholder='Select a crypto'
                        className='select-news'
                        optionFilterProp='children'
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value='Cryptocurrency'>Cryptocurrency</Option>
                        {data?.data?.coins.map((coin, i) => (
                            <Option key={i} value={coin.name}>{coin.name}</Option>
                        ))}

                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className='news-title' level={4}>
                                    {news.name}
                                </Title>
                                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 100)}....` : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>

                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    </div >
};

export default News;
