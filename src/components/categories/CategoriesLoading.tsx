import { Skeleton } from "../skeleton/Skeleton";

function CategoriesLoading(): JSX.Element {
  let loading = [];
  for (let i = 0; i <= 8; i++) {
    loading.push(
      <div key={i} className="col overflow-hidden py-0">
        <Skeleton.Category />
      </div>
    );
  }
  return <>{loading}</>;
}

export default CategoriesLoading;
