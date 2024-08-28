import React from 'react';
import ContactCard from './ContactCard';
import { contacts } from '../Data/data';

const Contacts = () => {
  return (
    <div className="sticky top-16 space-y-3 pt-4">
      <div className="px-4 flex items-center justify-between">
        <p className="text-base text-mytextgray font-first font-semibold">
          Contacts
        </p>
        <div
          className={`w-8 h-5 rounded-full bg-mytextgray grid place-content-center text-sm text-white font-first`}
        >
          68
        </div>
      </div>

      <div className="py-5 px-4 bg-white rounded-xl shadow-xl space-y-2">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.name}
            name={contact.name}
            image={contact.image}
            number={contact.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
