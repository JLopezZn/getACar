export interface AuthResponse {
  token: string;
  users: Users;
  details?: string;
}

export interface Users {
  id:        number;
  email:     string;
  nombres:   string;
  apellidos: string;
  telefono:  string;
}
