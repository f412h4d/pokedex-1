import React from 'react';
import styled from 'styled-components/native';

type TEvolutionIcon = {
  pokemonId: number;
};

export const EvolutionIcon = ({ pokemonId }: TEvolutionIcon) => {
  return (
    <IconWrapper>
      <IconContent
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId + '.png'}`,
        }}
        style={{
          width: 62,
          height: 62,
        }}
      />
    </IconWrapper>
  );
};

const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 16px;
  left: -32px;
  border: 6px solid #fff;
  border-radius: 200px;
  width: 72px;
  height: 72px;
  background: #eee;
  margin: 1px;
`;

const IconContent = styled.Image``;
