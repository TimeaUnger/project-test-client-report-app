import React from "react";
import Button from "./common.tsx/button";
import { useAddClientMutation } from '../services/clientsApi';
import { uniqueNamesGenerator, Config, names, NumberDictionary } from 'unique-names-generator';
import "../styles/header.css";
import {Client} from '../models/client.model'

const Header: React.FC = () => {

  const [addClient] = useAddClientMutation();

  const config: Config = {
    dictionaries: [names]
  }

  const client: string = uniqueNamesGenerator(config);
  const addHandler = async () => {

    const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
    const uniqueId: string = uniqueNamesGenerator({ dictionaries: [numberDictionary] });

    const clientAdd: Client = {
      id: uniqueId,
      name: client,
      reports: {
        report1: "0",
        report2: "0",
        report3: "0"
      }
    }

    await addClient(clientAdd);
  }
  return (
    <div className="headerWrapper">
      <div className="btnWrapper">
        <Button onClick={addHandler} action="add">New Client</Button>
      </div>
      <div className="searchWrapper">
        <div className="search">
          <span className="fa fa-search"></span>
          <input placeholder="Search term" />
        </div>
      </div>
    </div>
  );
}

export default Header;