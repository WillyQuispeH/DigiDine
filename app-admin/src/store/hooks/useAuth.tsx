import { authStore } from "../zustand";

const useAuth = () => {
  const {
    user,
    status,
    loading: loadingAuth,
    error: errorAuth,
  } = authStore((state) => ({
    user: state.user,
    status: state.status,
    loading: state.loading,
    error: state.error,
  }));

  const { validate } = authStore();

  return {
    status,
    user,
    loadingAuth,
    errorAuth,
    validate,
  };
};

export default useAuth;
