export interface AuthResponse {
    id:            string;
    name:          string;
    email:         string;
    emailVerified: string | null;
    role:          string;
    image:         string | null;
    token:         string;
}


