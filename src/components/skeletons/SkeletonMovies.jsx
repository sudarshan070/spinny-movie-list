import React from "react";
import SkeletonElement from "./Skeletonelement";

export default function SkeletonMovies() {
  return (
    <div className="skeleton-card">
      <SkeletonElement type="avatar" />
      <SkeletonElement type="title" />
    </div>
  );
}
