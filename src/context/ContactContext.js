import { useReducer } from "react";
import _ from "lodash";
import createUseContext from "constate";

const initialState = {
  contacts: [
    {
      id: "099",
      name: "Bruce Wayne",
      email: "bruce@batmail.com"
    },
    {
      id: "100",
      name: "Clark Kent",
      email: "clark@metropolitan.com"
    }
  ],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload]
      };
    default:
      throw new Error();
  }
};

function useContacts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { contacts, loading } = state;
  const addContact = (name, email) => {
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name, email }
    });
  };
  return { contacts, loading, addContact };
}

export const useContactsContext = createUseContext(useContacts);
