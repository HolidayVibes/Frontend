export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

export interface VerifyEmailPayload {
  code: string;
}
