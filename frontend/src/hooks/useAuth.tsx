import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

// Define the shape of the context
interface AuthContextProps {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create context with empty default values
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

// Create a provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a hook that enables components to consume context
export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
