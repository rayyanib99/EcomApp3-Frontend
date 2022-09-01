import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import { useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import axios from "axios";

const Container = styled.div
    `overflow: hidden;`

const Frame = styled.div
    `width: 100vw;
     height: 80vh;
     background-color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     border-bottom: 1px solid rgb(49, 170, 218);
    `

const Title = styled.h1
    `font-size: 24px;
     font-weight: 600;
     text-decoration: underline;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: -100px 0px 30px 0px;
    `

const Table = styled.table
    `width: 90vw;
     height: 65vh;
     justify-content: center;
     background-color: rgb(160, 211, 231);
     border: 2px solid black;
    `

const TableHead = styled.thead
    `background-color: rgb(49, 170, 218);`

const TableRow = styled.tr
    `background-color: rgb(160, 211, 231);
    `

const TableHeader = styled.th
    `padding: 15px 5px 15px 5px;
     background-color: rgb(49, 170, 218);
     border: 1px solid black;
    `

const TableBody = styled.tbody
    `background-color: rgb(160, 211, 231);`

const TableData = styled.td
    `margin-bottom: 1000px;
     padding: 10px;
     align-items: center;
     text-align: center;
     border-bottom: 1px solid rgb(49, 170, 218);
     background-color: rgb(160, 211, 231);
    `

const Button = styled.button
    `justify-content: center;
     margin-right: 10px;
     padding: 5px;
     font-size: 14px;
     cursor: pointer;
     border: 1px solid ${props => props.color};
     border-radius: 5px;
     background-color: ${props => props.color};
     &:hover
     {
      background-color: ${props => props.hover};
      text-decoration: underline;
     }
    `
    
const Users = () => 
{
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  const init = async () =>
  {
    await axios.get('http://localhost:8080/api/users/')
    .then(response =>
    {
      setUsers(response.data);
    })
  };

  const Delete = async (id, fName, lName) =>
  {
    if(fName === "Administrator")
    {
      alert("Cannot Delete This Admin Account.");
    }

    else
    {
      var message = window.confirm("CAUTION: Account of " + fName + " " + lName + " will be deleted permanently.");
      if(message === true)
      {
        await axios.delete(`http://localhost:8080/api/users/${id}`)
        .then(() => 
          {
              init();
          });
      }
    }
  };

  const Edit = (id, fName) =>
  {
    if(fName === "Administrator")
    {
      alert("Cannot Change This Admin Account.");
    }

    else
    {
      navigate(`/${id}`);
    }
  };

  useEffect(() => 
  {
    init();
  }, []);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Categories />
      <Frame>
        <Table>
        <Title>Users</Title>
          <TableHead>
            <TableRow>
              <TableHeader>User ID</TableHeader>
              <TableHeader>First Name</TableHeader>
              <TableHeader>Last Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Contact Number</TableHeader>
              <TableHeader>Address</TableHeader>
              <TableHeader>City</TableHeader>
              <TableHeader>State</TableHeader>
              <TableHeader>Country</TableHeader>
              <TableHeader>ZipCode</TableHeader>
              <TableHeader>Administrator</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user =>
            <TableRow key = {user.userId}>
              <TableData>{user.userId}</TableData>
              <TableData>{user.firstName}</TableData>
              <TableData>{user.lastName}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.phoneNumber}</TableData>
              <TableData>{user.address}</TableData>
              <TableData>{user.city}</TableData>
              <TableData>{user.state}</TableData>
              <TableData>{user.country}</TableData>
              <TableData>{user.zipCode}</TableData>
              <TableData>{user.isAdmin}</TableData>
              <TableData>
              <Button color = "rgb(49, 170, 218)" hover = "rgb(160, 211, 231)" onClick = {() => 
                  Edit(user.userId, user.firstName)}><FiEdit style = {{fontSize: 14}}/> EDIT
                </Button>
                <Button color = "#d9534f" hover = "#FFCCCB" onClick = {() => 
                  Delete(user.userId, user.firstName, user.lastName)}><RiDeleteBinLine style = {{fontSize: 14}}/> DELETE ACCOUNT
                </Button>
              </TableData>
            </TableRow>
            )}
          </TableBody>
        </Table>
      </Frame>
      <Footer />
    </Container>
  )
}

export default Users