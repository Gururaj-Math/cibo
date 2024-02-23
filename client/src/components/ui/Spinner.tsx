import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Spinner: React.FC = () => <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: 'white', marginLeft: '5px' }} spin />} />;

export default Spinner;