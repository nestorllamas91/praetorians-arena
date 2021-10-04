import styles, { stylesGlobal, stylesReset } from '@/components/layout/styles';

import Footer from '@/components/footer/component';
import Header from '@/components/header/component';
import NavigationBar from '@/components/navigation-bar/component';
import { getTitles } from '@/utils/functions';

export default function Layout({ router, children }) {
  const page = router.pathname;
  const { titleHeading } = getTitles(page);
  return (
    <>
      <NavigationBar activePage={page} />
      {page === '/_error' ? (
        <div className="error-container">{children}</div>
      ) : (
        <>
          <Header activePage={page} activePageTitle={titleHeading} />
          <div className="body-container">{children}</div>
        </>
      )}
      <Footer />
      <style jsx>{styles}</style>
      <style jsx global>
        {stylesReset}
      </style>
      <style jsx global>
        {stylesGlobal}
      </style>
    </>
  );
}
