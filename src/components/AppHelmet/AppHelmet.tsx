import { Helmet } from 'react-helmet-async';

// others
import { APPLICATION_NAME } from '../../core/Routing/constants';

const AppHelmet = () => (
  <Helmet>
    <title>{APPLICATION_NAME}</title>
    <link
      rel="icon"
      type="image/png"
      href={`${process.env.PUBLIC_URL}/favicon.ico`}
      sizes="16x16"
    />
    <>{console.log(process.env)}</>
  </Helmet>
);

export default AppHelmet;
