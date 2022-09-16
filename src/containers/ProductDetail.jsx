import React from 'react';
import '@styles/ProductDetail.scss';
import Description from '../components/Description';



const ProductDetail  = () => {
    return(
        <section className="ProductDetail inactive">
            <Description />
        </section>
    );
}

export default ProductDetail;