import { Suspense, useState } from 'react';
import './App.css';
import BannerSection from './Component/BannerSection/BannerSection';
import HeadingAndState from './Component/CardHeading/HeadingAndState';
import Items from './Component/Items/Items';
import Navber from './Component/Navber/Navber';
import Stars from './Component/Stars/Stars';
import GetStart from './Component/GetStartSEction/GetStart';
import Pricing from './Component/Pricing/Pricing';
import WorkFlow from './Component/WorkFlow/WorkFlow';
import FooterSection from './Component/FooterSection/FooterSection';
import { CartSection } from './Component/CartSection/CartSection';
import { ToastContainer } from 'react-toastify';

const productLoad = async () => {
  const res = await fetch('/products/Products.json');
  return res.json();
};
const productsPromises = productLoad();


function App() {
  const [tabState, setTabState] = useState('Product');
  const [buyProduct, setBuyProduct] = useState([]);


  return (
    <>
      <ToastContainer />
      <Navber buyProduct={buyProduct}></Navber>
      <BannerSection></BannerSection>
      <Stars></Stars>
      <HeadingAndState
        tabState={tabState}
        setTabState={setTabState}
        buyProduct={buyProduct}
      ></HeadingAndState>
      {tabState == 'cart' && (
        <CartSection
          buyProduct={buyProduct}
          setBuyProduct={setBuyProduct}
        ></CartSection>
      )}
      {tabState == 'Product' && (
        <Suspense fallback={<h2>Loading....</h2>}>
          <Items
            productsPromises={productsPromises}
            buyProduct={buyProduct}
            setBuyProduct={setBuyProduct}
          ></Items>
        </Suspense>
      )}
      <GetStart></GetStart>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
