import { useToken } from '../Token';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


function FeaturePage() {

  // const { token } = useToken()
  // const [testClass, setTestClass] = useState()

  // const isLoggedIn = () => {
  //   if (!token) {
  //     setTestClass("display-5 fw-bold d-none")
  //   } else {
  //     setTestClass("display-5 fw-bold")
  //   }
  // }

  // useEffect(() => {
  //   isLoggedIn();
  // });


  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className='display-5 fw-bold'>Green Thumb</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          house plant care website
        </p>
      </div>
      <div className="text-lg-start p-3">
        <h3>Sign Up to enjoy our sites features</h3>
      </div>
      <div className='text-lg-start categories p-3'>
        <h3>Search a plant by a category</h3>
      </div>
      <div className='text-lg-start p-3'>
        <h3>Browse different plants by a category</h3>
      </div>
      <div className='text-lg-start p-3'>
        <h3>Favorite your plants to view them in My Plants</h3>
      </div>
    </div>
  );
}

export default FeaturePage;
