import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../service/apiDished";

function useUser() {
  const { data, isLoading } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });
  return {
    isAuthenticated: data?.user?.role === "authenticated",
    isLoading,
  };
}

export default useUser;
