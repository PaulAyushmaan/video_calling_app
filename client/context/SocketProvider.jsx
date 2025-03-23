import React,{createContext} from "react";

const SocketContext = createContext();

export const SocketProvider = ({props}) => {
    return (
        <SocketContext.Provider value={props}>
            {props.children}
        </SocketContext.Provider>
    )
}