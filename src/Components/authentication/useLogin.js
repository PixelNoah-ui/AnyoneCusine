import { useMutation, useQueryClient } from "@tanstack/react-query";
import { singIn } from "../../service/apiDished";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => singIn({ email, password }),
    onSuccess: (user) => {
      navigate("/", { replace: true });

      queryClient.setQueryData(["user"], user);
    },
    onError: (error) => toast.error(error.message),
  });
  return { login, isPending };
}

export default useLogin;
