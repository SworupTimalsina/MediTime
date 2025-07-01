import Banner from '../components/Banner';
import Header from '../components/header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDocotrs from '../components/TopDocotrs';

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDocotrs/>
        <Banner/>
    </div>
  );
};

export default Home;
