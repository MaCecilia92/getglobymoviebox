export interface User {
  email: string;
  password: string;
  expirationTime: number;
}

export interface SessionState {
  isLoading: boolean;
  users: User | [];
  isAuthenticated: boolean;
  error: string;
}

export const sessionUser: SessionState = {
  isLoading: false,
  users: {
    email: '',
    password: '',
    expirationTime: 0,
  },
  isAuthenticated: false,
  error: '',
};
