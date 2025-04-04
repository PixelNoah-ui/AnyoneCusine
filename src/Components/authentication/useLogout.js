import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../../service/apiDished";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logOut, isPending } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
  });
  return { logOut, isPending };
}

export default useLogout;
