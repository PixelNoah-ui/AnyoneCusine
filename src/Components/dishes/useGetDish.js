import { useQuery } from "@tanstack/react-query";
import { getDishById } from "../../service/apiDished";

function useGetDish(dishID) {
  const { data: dish, isLoading } = useQuery({
    queryFn: () => getDishById(dishID),
    queryKey: ["dish", dishID],
  });
  return { dish, isLoading };
}

export default useGetDish;
