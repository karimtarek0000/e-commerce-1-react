import { lazy, Suspense } from "react";

export function lazyLoadRoutes(elementName: string) {
  const LazyPages = lazy(() => import(`../pages/${elementName}`));

  return (
    <Suspense fallback={""}>
      <LazyPages />
    </Suspense>
  );
}
