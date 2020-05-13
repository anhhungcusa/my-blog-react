import React from 'react';
import { Skeleton } from 'antd';

export const SkeletonList = ({ num }) => {
    const array = Array.from({ length: num }, () => 1);
    return <>{
        array.map((v, i) => <div key={i}  style={{ marginBottom: '40px' }}>
            <Skeleton active />
        </div>)
    }</>;
};
