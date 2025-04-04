import { useQuery } from "@tanstack/react-query";
import getDishes from "../../service/apiDished";

function useGetDishes() {
  const {
    data: dishes,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getDishes,
    queryKey: ["dishes"],
  });
  return { dishes, isLoading, isError };
}

export default useGetDishes;
