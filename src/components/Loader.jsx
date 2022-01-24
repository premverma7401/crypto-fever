import React from 'react';
import { Spin, Alert } from 'antd';

const Loader = () =>
{
    return (
        <Spin tip="Loading...">
            <Alert
                message="Loading data from API"
                description="Further details about the context of this alert."
                type="info"
            />
        </Spin>
    )
};

export default Loader;
