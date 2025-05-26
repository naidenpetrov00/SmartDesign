import { Outlet } from "react-router-dom";

import { PageLayout } from "../components/layouts/PageLayout/PageLayout";
import { ScrollToTop } from "../components/helpers/ScrollToTop";

export const AppRoot = () => {
  return (
    <div>
      <PageLayout>
        <ScrollToTop />
        <Outlet />
      </PageLayout>
    </div>
  );
};
