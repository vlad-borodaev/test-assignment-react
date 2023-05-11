export type TResponse = {
  data?: any;
  error?: {
    statusCode: number;
    timestamp: string;
    path: string;
    message: string;
  };
};
