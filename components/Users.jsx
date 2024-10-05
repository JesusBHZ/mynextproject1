"use client";
import React, { useEffect } from 'react'

function Users() {
  useEffect(() => {
    alert("Hello from Users component")
  }, [])
    return (
      <div>Users</div>
    )
}

export default Users;