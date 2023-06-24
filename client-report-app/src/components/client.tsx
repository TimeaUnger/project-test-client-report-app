import React from "react";
import '../styles/client.css';
import Button from "./common.tsx/button";
import Reports from "./reports";

import { useDeleteClientMutation } from '../services/clientsApi';

interface Props {
  id: string;
  name: string;
  reports: Array<object>
}

const Client: React.FC<Props> = ({
  name,
  id,
  reports
}) => {

  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [deleteClient] = useDeleteClientMutation();

  const deleteHandler = async () => {
    await deleteClient(id);
  }

  const addReportHandler = async () => {
    //await addContact(contactAdd);
    // refetch();
  }

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="reportRowWrapper">
      <div className="clientReportMenu">
        <div className="clientNameWrapper">
          <div className={isOpen ? "toggle-btn active" : 'toggle-btn'} onClick={handleToggle} >
            <span className="arrow"></span>
            <span className="clientName">{name}</span>
          </div>
        </div>
        <div className="buttonDelete grid-item">
          <Button onClick={deleteHandler} action="remove">X</Button>
        </div>
      </div>
      <Reports reports={reports} onClick={addReportHandler} isOpen={isOpen}/>
    </div>
  );
}

export default Client;