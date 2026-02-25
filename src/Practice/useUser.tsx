import React, { useContext, useEffect, useState } from 'react'

interface User {
  name: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export function UserProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(() => {
      try {
        const storedUser = localStorage.getItem('user');
        console.log('Raw storedUser:', storedUser);
        if(storedUser && storedUser !== 'null' && storedUser !== ''){
          const parsedUser = JSON.parse(storedUser);
          console.log('Parsed user:', parsedUser);
          return parsedUser && typeof parsedUser === 'object' ? parsedUser : {name: 'pseudoUser', role: 'user'};
        }
        console.log('No valid stored user, returning pseudouser');
        // return {name: 'pseudoUser', role: 'user'}
        return null;
      }catch(error){
        console.log('error getting the user from localStorage:', error);
        return {name: 'pseudoUser', role: 'user'};
      }
    });
    useEffect(()=> {
      try{
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
        }
        else{
          localStorage.removeItem('user');
        }
      }
      catch(error){
        console.log('error setting  the user in localStorage');
      }
    }, [user])

    // async function login(email, password){
    //   const response = await loginApiFunc(email, password);
    //   const {user} = response;
    //   if(user){
    //     setUser(user);
    //   }
    //   else{setUser(null)}
    // }
    // async function logout(){
    //   const response = await logoutApiFunc(userId);
    //   const {user} = response;
    //   if(user){
    //     setUser(user);
    //   }
    //   else{setUser(null)}
    // }
    
    return <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
}
function useUser() {
  const context = useContext(UserContext);
  if(context === undefined) {
    throw new Error('useUser hook must be used within a UserProvider');
  }
  return context;
}

export default useUser