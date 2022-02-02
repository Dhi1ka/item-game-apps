import React, { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [userResult, setUserResult] = useState([]);
  const [productResult, setProductResult] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((json) => setUserResult(json));
  }, [users]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProductResult(json));
  }, [products]);

  return (
    <div>
      <h1>Home</h1>
      {userResult.map((user) => {
        return <p>{JSON.stringify(user)}</p>;
      })}
      {productResult.map((product) => {
        return <p>{JSON.stringify(product)}</p>;
      })}
    </div>
  );
}

export default Home;
