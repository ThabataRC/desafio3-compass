import Sidemenu from "@/components/sidemenu";
import { useAuth } from "@/hooks/auth";
import { useEffect } from "react";

export  default function Home() {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = '/login'
        }

    }, [isAuthenticated]);

    return (
            <Sidemenu />
        
    )
}