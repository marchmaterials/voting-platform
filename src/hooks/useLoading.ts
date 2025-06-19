import { useState } from "react";

export function useLoading(initialLoading = false) {
  const [loading, setLoading] = useState(initialLoading);
  return { loading, setLoading };
}
