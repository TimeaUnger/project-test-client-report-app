import React from 'react';
import Client from './components/client';
import './App.css';

import {
  useClientsQuery, 
  useClientQuery,
  useAddClientMutation,
  useUpdateClientMutation,
} from './services/clientsApi';
import Header from './components/header';

function App() {

  const { data, error, isLoading, isSuccess } = useClientsQuery();

  return (
    <div className="App">
      <h1 className='appHeader'>Client Report App</h1>
      <Header />
      {isLoading && <h2>...Loading</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map(client => {
            return (
              <div className="data" key={client.id}>
                <Client id={client.id} name={client.name} reports={client.reports!} />
              </div>
            )
          })}
        </div>
      )}

    </div>
  );
}

// export const ContactDetail = ({ id }: { id: string }) => {
//   const { data } = useContactQuery(id);

//   return (
//     <div>
//       <span>{data?.name}</span>
//       ---
//       <span>{data?.email}</span>
//     </div>
//   )
// }


// export const AddContact = () => {

//   // "addContact" is the endpoint what we will use
//   const [addContact] = useAddContactMutation();
//   const [updateContact] = useUpdateContactMutation();
//   const [deleteContact] = useDeleteContactMutation();

//   // this will update the component without reload the page manually
//   // const { refetch } = useContactsQuery();
//   const contactAdd = {
//     "id": "5",
//     "name": "Bubu",
//     "email": "bubu@gmail.com"
//   }

//   const contactUpdate = {
//     "id": "5",
//     "name": "Kutyafule",
//     "email": "kutyafule@gmail.com"
//   }

//   const addHandler = async () => {
//     await addContact(contactAdd);
//     // refetch();
//   }

//   const updateHandler = async () => {
//     await updateContact(contactUpdate);
//     // refetch();
//   }

//   const deleteHandler = async () => {
//     await deleteContact("5");
//     // refetch();
//   }

//   return (
//     <>
//       <br></br>
//       <button onClick={addHandler}>Add Contact</button>
//       <br></br>
//       <button onClick={updateHandler}>Update Contact</button>
//       <br></br>
//       <button onClick={deleteHandler}>Delete Contact</button>
//     </>
//   )
// }
export default App;
