import Footer from '@/shared/footer/component';
import Header from '@/shared/header/component';
import styles, { stylesGlobal, stylesReset } from '@/shared/layout/styles';
import NavigationBar from '@/shared/navigation-bar/component';
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
