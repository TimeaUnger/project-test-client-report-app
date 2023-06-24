import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Client } from "../models/client.model";

export const clientsApi = createApi({
  reducerPath: "clientsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ['Client'],
  endpoints:(builder) => ({
    clients: builder.query<Client[], void>({
      query: () => '/clients',
      providesTags: ['Client']
    }),
    client: builder.query<Client, string>({
      query: (id) => `/clients/${id}`,
      providesTags: ['Client']
    }),
    addClient: builder.mutation<void, Client>({
      query: contact => ({
        url: '/clients',
        method: 'POST',
        body: contact
      }),
      invalidatesTags: ['Client']
    }),
    updateClient: builder.mutation<void, Client>({
      query: ({id, ...rest}) => ({
        url: `/clients/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Client']
    }),
    deleteClient: builder.mutation<void, string>({
      query: id => ({
        url: `/clients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Client']
    })
  })
});


// the name of the hook should start "use" following the name of the endpoint
// in this case "contacts" following "Query"
// this hook is comming from the contactsApi
export const { 
  useClientsQuery, 
  useClientQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation
} = clientsApi;