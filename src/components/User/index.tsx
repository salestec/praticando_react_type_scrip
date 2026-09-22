// import { ReactNode } from "react";

interface UserProps {
    name: string;
    email: string;
    children?: React.ReactNode;
}

const User = ({ name, email, children }: UserProps) => {
    return(
        <div>
            <h3>Usuario: {name}</h3>
            <p>Email: {email}</p>
            {children && <div>{children}</div>}
        </div>
    );
}

export default User;