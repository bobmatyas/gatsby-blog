import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo"
import Gradient from "../components/gradient"

const Success = props => (
  <Layout>

    <Seo
      title="Contact"
      description="Contact Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <Gradient />

    <div className="main__content">
      <h2>Success!</h2>

      <p>Thank you for contacting me. I'll get back to you shortly.</p>
      
    </div>
  </Layout >
);

export default Success;