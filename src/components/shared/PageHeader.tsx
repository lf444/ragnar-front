import { FunctionComponent } from "react";
import { Helmet } from 'react-helmet-async'


interface HeaderProps {
  pageTitle: string;
}

const PageHeader: FunctionComponent<HeaderProps> = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};
export default PageHeader;
