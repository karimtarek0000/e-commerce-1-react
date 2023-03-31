import { lazy, Suspense } from "react";

export function lazyLoadRoutes(name: string) {
  const pageName: string = name.charAt(0).toUpperCase() + name.slice(1);
  const LazyPages = lazy(() => import(`../pages/${name}/${pageName}.tsx`));

  return (
    <Suspense fallback={<h1>Loader...</h1>}>
      <LazyPages />
    </Suspense>
  );
}
