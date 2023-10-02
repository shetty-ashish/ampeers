import React from 'react';
import List from './List';
import ItemDetail from './ItemDetail';
import { getRepositories } from '../queries/repositories';
import { useApolloClient } from '@apollo/client';
import { Repository } from '../interfaces/repository';
import { REPOSITORIY_SEARCH_NAME } from '../constants'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  font-family: Arial, sans-serif;
`;

const ListContainer = styled.div`
  flex: 1;
`;

const DetailContainer = styled.div`
  flex: 2;
`;

const MasterDetail: React.FC = () => {
    const client = useApolloClient();
    const [repositories, setRepositories] = React.useState<Array<Repository> | undefined>(undefined);
    const [selectedRepo, setSelectedRepo] = React.useState<Repository | undefined>(undefined);

    React.useEffect(() => { //load repository when the app is mounted
        getRepositories(client, REPOSITORIY_SEARCH_NAME).then(repos => setRepositories(repos));
    }, [client]);

    React.useEffect(() => {
        setSelectedRepo(repositories ? repositories[0] : undefined);
    }, [repositories]);

    const handleItemClick = (repo: Repository) => {
        setSelectedRepo(repo);
    };

    return (
        <Container>
            <ListContainer>
                <List repositories={repositories || []} selectedRepo={selectedRepo} onSelect={handleItemClick}/>
            </ListContainer>
            <DetailContainer>
                <ItemDetail selectedRepo={selectedRepo}/>
            </DetailContainer>
        </Container>
    );
};

export default MasterDetail;
