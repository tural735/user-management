import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import api from "./api";
import { toast } from "react-toastify";
export const useGetPosts = () => {
  return useQuery(["users"], async () => {
    const { data } = await api.get(`/users`);
    return data;
  });
};
export const useGetSinglePostById = (id) => {
  return useQuery(["users", id], async () => {
    const { data } = await api.get(`/users/${id}`);
    return data;
  });
};
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    (postData) => {
      return api.post("/users", postData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        toast.success("Yeni istifadəçi əlavə olundu.")
        navigate("/");
      },
      onError: ({ message }) => {
        toast.error("Xəta baş verdi")
      },
    }
  );
};
export const useEditPost = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    (postData) => {
      return api.put(`/users/${id}`, postData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        toast.success("Seçili istifadəçi məlumatları dəyişdirildi")
        navigate("/");
      },
      onError: ({ message }) => {
        toast.error("Xəta baş verdi")
      },
    }
  );
};
export const useDeletePost = (setIsOpenDeleteModal) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    (id) => {
      return api.delete(`/users/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        setIsOpenDeleteModal(false);
        toast.success("Seçili istifadəçi silindi")
        navigate("/");
      },
      onError: ({ message }) => {
        toast.error("Xəta baş verdi")
      },
    }
  );
};