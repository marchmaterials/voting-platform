// app/providers/RouteHistoryProvider.tsx
"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef } from "react";

const RouteHistoryContext = createContext<{ prev: string | null }>({ prev: null });

export function RouteHistoryProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const prevRef = useRef<string | null>(null);

    useEffect(() => {
        // update previous on route change
        return () => {
            prevRef.current = pathname;
        };
    }, [pathname]);

    return (
        <RouteHistoryContext.Provider value={{ prev: prevRef.current }}>
            {children}
        </RouteHistoryContext.Provider>
    );
}

export function usePrevRoute() {
    return useContext(RouteHistoryContext).prev;
}