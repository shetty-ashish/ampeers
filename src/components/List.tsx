import React from 'react';
import { Repository } from '../interfaces/repository';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  max-height: 800px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }
`;

const StyledListItem = styled.li<{ $isActive: boolean; }>`
  padding: 2em;
  border-bottom: 1px solid #555;
  background-color: ${props => props.$isActive ? "#444444" : "#222222"};

  &:hover  {
    background-color: #333333;
    cursor: pointer;
  }
`;

interface ListProps {
    repositories: Repository[];
    selectedRepo?: Repository;
    onSelect: (repo: Repository) => void;
}

const List: React.FC<ListProps> = ({ repositories, selectedRepo, onSelect }) => {
    return (
        <StyledList>
            {repositories.map(repo => (
                <StyledListItem key={repo.name} $isActive={selectedRepo?.name === repo.name } onClick={() => onSelect(repo)}>
                    {repo.name}
                </StyledListItem>
            ))}
        </StyledList>
    );
};

export default List;
