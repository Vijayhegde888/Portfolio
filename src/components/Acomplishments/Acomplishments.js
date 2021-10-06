import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Websites'},
  { number: "1M", text: 'Viewers', },
  { number: '2000$ ', text: 'Revenue', },
  { number: '10K', text: 'Subscribers', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
      <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  </Section>
);

export default Acomplishments;
