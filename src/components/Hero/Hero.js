import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
      My personal Portfolio
      </SectionTitle>
      <SectionText>
        Aspiring React js and node js Developer
      </SectionText>
      <Button onClick={()=>window.location='https://analytics.google.com/analytics/web/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;