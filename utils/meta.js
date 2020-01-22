import { NextSeo } from 'next-seo';
import getURL from '../utils/getURL';

export default (props) => {
    const pageURL = getURL();
    return(
        <NextSeo
            title={`${props.pageTitle}`}
            description={props.description}
            canonical={pageURL}
            openGraph={{
                url: pageURL,
                title: `${props.pageTitle}`,
                description: props.description,
                images: [
                {
                    url: props.img,
                    width: 1053,
                    height: 700,
                    alt: `${props.pageTitle}`,
                }
                ],
                site_name: props.pageTitle,
            }}
            twitter={{
                handle: '@crbnlgy',
                site: '@site',
                cardType: 'summary_large_image',
                image: props.img
            }}
        />
    )
}