import "./Skeleton.css";

const Skeleton = ({ className }) => {
  return (
    <div className="animate-pulse">
      <div className={`skeleton-bg ${className}`}></div>
    </div>
  );
}

export default Skeleton;