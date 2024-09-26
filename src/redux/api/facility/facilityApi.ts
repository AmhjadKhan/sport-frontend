import { baseApi } from "../baseApi";

type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};


