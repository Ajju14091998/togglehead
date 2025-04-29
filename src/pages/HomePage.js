import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomepageSection1 from '../components/home/Homesection1';
import HomepageSection2 from '../components/home/Homesection2';
import HomepageSection3 from '../components/home/Homesection3';
import HomepageSection4 from '../components/home/Homesection4';
import HomepageSection5 from '../components/home/Homesection5';
import HomepageSection6 from '../components/home/Homesection6';


const HomePage = () => {
  return (
    <div>
      <Header />
      <HomepageSection1 />
      <HomepageSection2 />
      <HomepageSection3/>
      <HomepageSection4/>
      <HomepageSection5/>
      <HomepageSection6/>
      <Footer />
    </div>
  );
};

export default HomePage;
