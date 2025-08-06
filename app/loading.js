import { Grid } from "ldrs/react";
import "ldrs/react/Grid.css";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen flex items-center justify-center">
      <Grid size="80" speed="1.5" color="white" />
    </div>
  );
}
