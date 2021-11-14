export interface AuthResponse {
  token: string;
  users: Users;
  details?: string;
}

export interface Users {
  id:        number| string | null;
  email:     string | null;
  nombres:   string | null;
  apellidos: string | null;
  telefono:  string | null;
}
