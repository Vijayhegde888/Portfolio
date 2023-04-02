import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { ButtonWrapper } from './ButtonWrapper';
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
      My personal Portfolio
      </SectionTitle>
      <SectionText>
         React js and Node js Developer
      </SectionText>
      <ButtonWrapper>
      <Button onClick={()=>window.location='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXhPwRKNDdNPRqvdLJlDZBfGrNbXFznVlXrrlZXhnlSkQNCGLFlQqCSdVhQcVZxsDzBKp'}>Contact Me</Button>
      <Link href="/resume.pdf" download>
      <Button>Download Resume</Button>
        {/* <a>Download Resume</a> */}
      </Link>
      </ButtonWrapper>
    </LeftSection>
  </Section>
);

export default Hero;