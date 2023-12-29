import React from 'react'

interface User{
    id:number;
    name:string;
}
const UsersPage = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users',{ cache:'no-store' });//revalidate:10 checka para info nova a cada 10 segundos, cache:'no-store' não guarda info na cache
   const users: User[] = await res.json();
  return (
      <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
      </>
  )
}

export default UsersPage