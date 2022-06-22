import { any } from 'prop-types';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}

SingleProduct.propTypes = {
  query: any,
};
