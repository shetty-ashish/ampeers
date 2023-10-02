import React from 'react';
import { Repository } from '../interfaces/repository';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 20px;
`;

interface DetailProps {
    selectedRepo?: Repository;
  }

const ItemDetail: React.FC<DetailProps> = ({ selectedRepo }) => {
    return (
        <DetailContainer className="item-detail-container">
            {selectedRepo ? <h2>{selectedRepo?.description} </h2> : <h2>Loading ...</h2>}
        </DetailContainer>
    );
};

export default ItemDetail;