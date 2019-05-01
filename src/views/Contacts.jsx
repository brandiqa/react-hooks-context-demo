import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactTable from "../components/ContactTable";
import { useContactsContext } from "../context/ContactContext";

export default function Contacts() {
  return (
    <useContactsContext.Provider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactTable />
      </Segment>
    </useContactsContext.Provider>
  );
}
