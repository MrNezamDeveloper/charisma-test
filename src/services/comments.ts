import { api } from "./api";

export const getCommentsList = () => api.get("comments/");