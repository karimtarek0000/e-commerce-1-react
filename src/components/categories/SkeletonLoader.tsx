import { ReactNode } from "react";

type SkeletonLoaderType = {
  children: ReactNode;
};

function SkeletonLoader({ children }: SkeletonLoaderType): JSX.Element {
  let loading = [];
  for (let i = 0; i <= 8; i++) {
    loading.push(
      <div key={i} className="col overflow-hidden py-0">
        {children}
      </div>
    );
  }
  return <>{loading}</>;
}

export default SkeletonLoader;
