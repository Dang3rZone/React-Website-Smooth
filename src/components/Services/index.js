import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

import {
  ServicesH1,
  ServicesH2,
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Products</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="Icon1" />
          <ServicesH2>Become the best hacker you can be.</ServicesH2>
          <ServicesP>We help you improve</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="Icon2" />
          <ServicesH2>The best Vitual Machines</ServicesH2>
          <ServicesP>Can download them any time you want</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="Icon3" />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Get more Virtual Machines and access to our premium community
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
