export interface UserState {
    user: UserData;
    loading: boolean;
    error: null | string;
  }

 export interface UserData {
    id: number;
    username: string;
    email: string;
    approved ?: boolean | null
    stage ?: string | null
    role?: string | null
  }

export interface IUserSelector {
  user:UserState,
  loading: boolean,
  error: null | string
}

