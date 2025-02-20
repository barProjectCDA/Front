import {createContext, ReactNode, useEffect, useState } from "react";

interface AuthInterface {
    authToken: string | null;
    login(token: string): any;
    logout(): any;
}

export const AuthContext = createContext<AuthInterface | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {

    const [authToken, setAuthToken] = useState(() => {
        const token = localStorage.getItem('token');
        return token;
    });
    
    const login = (token: string) => {
        setAuthToken(token);
        localStorage.setItem('token', token);
    };
    
    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('token');
    };
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
        setAuthToken(token);
        }
    }, []);

    return (<AuthContext.Provider value={{ authToken, login, logout}}>
        {children}
    </AuthContext.Provider>
    );
    
};

export default AuthProvider;

