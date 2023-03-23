import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    'contact/getAllContacts',

    async thunkApi => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }

);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkApi) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (credentials, thunkAPI) => {
    const contactId = credentials.id;
    try {
      const response = await axios.patch(`/contacts/${contactId}`, {
        name: credentials.name,
        number: credentials.number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);