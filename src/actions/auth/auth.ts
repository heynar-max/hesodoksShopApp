import { hesoApi } from "../../config/api/hesoApi";
import { User } from "../../domain/entities/user";
import type { AuthResponse } from "../../infrastruture/interfaces/auth.responses";



const returnUserToken = ( data: AuthResponse ) => {

    const user: User = {
        id: data.id,
        email: data.email,
        name: data.name,
        emailVerified: data.emailVerified,
        image: data.image,
        role: data.role,
    }

    return {
        user: user,
        token: data.token,
    }
}

export const authLogin = async (email: string, password: string) => {

    email = email.toLowerCase();

    try {
        const { data } = await hesoApi.post<AuthResponse>('/auth/login', {
        email,
        password,
        });

        return returnUserToken(data);


    } catch (error) {
        console.log(error);
        return null;
    }
};

export const authCheckStatus = async () => {

    try {
        const { data } = await hesoApi.get<AuthResponse>('/auth/check-status');
        return returnUserToken(data);

    } catch (error) {
        console.log({error});
        return null;
    }

}