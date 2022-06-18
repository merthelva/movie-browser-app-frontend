import Head from "next/head";

import { IProps } from "./props.interface";

const SEOHead: React.FC<IProps> = ({ children, metaProps }) => {
  return (
    <Head>
      <title>{metaProps.title}</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Mert Helvaci" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="googlebot" content="notranslate" />
      <meta name="description" content={metaProps.description} />
      {children}
    </Head>
  );
};

export default SEOHead;
