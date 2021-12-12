import React, { Fragment } from 'react';

import Banner from '../components/Homepage/Banner';
import HowWorks from '../components/Homepage/HowWorks';
import OurTranslators from '../components/Homepage/OurTranslators';
import WhyChoose from '../components/Homepage/WhyChoose';

const Homepage = () => {

  return (
      <Fragment>
          <Banner />
          <HowWorks/>
          <WhyChoose/>
          <OurTranslators/>
      </Fragment>
  )
}

export default Homepage;
