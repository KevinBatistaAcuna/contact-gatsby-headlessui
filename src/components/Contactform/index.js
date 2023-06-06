import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';

const NameInput = ({ value, onChange, nameError }) => {
  return (
    <>
        <input
        type="text"
        placeholder="Name"
        value={value}
        onChange={onChange}
        required
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />
        {nameError && <p className="text-red mb-4">{nameError}</p>}
    </>
  );
};

const EmailInput = ({ value, onChange, emailError }) => {
  return (
    <>
        <input
        type="email"
        placeholder="Email"
        value={value}
        onChange={onChange}
        required
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />
        {emailError && <p className="text-red mb-4">{emailError}</p>}
    </>
  );
};

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <input
      type="tel"
      placeholder="Phone Number"
      value={value}
      onChange={onChange}
      required
      className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
    />
  );
};

const OptionsListbox = ({ value, options, onChange }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative mb-4">
        <Listbox.Button className="border border-gray-300 rounded px-4 py-2 w-full text-left">
          {value ? value.label : 'How can we help you?'}
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 w-full bg-white border border-gray-300 mx-0 rounded">
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              value={option}
              className={({ active }) =>
                `${
                  active ? 'text-white bg-blue' : 'text-gray-900'
                } cursor-default select-none relative py-2 px-4`
              }
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`${
                      selected ? 'font-medium' : 'font-normal'
                    } block truncate`}
                  >
                    {option.label}
                  </span>
                  {selected && (
                    <span
                      className={`${
                        active ? 'text-white' : 'text-blue-500'
                      } absolute inset-y-0 right-0 flex items-center pr-2`}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const options = [
    { id: 1, label: 'Sales' },
    { id: 2, label: 'Press' },
    { id: 3, label: 'Support' },
    { id: 4, label: 'Demo' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos del formulario
    if (name.length < 10) {
      setNameError('Name should have at least 10 characters');
      return;
    }
    else{
        setNameError('');
    }

    if (email.endsWith('gmail.com')) {
      setEmailError('Invalid email address, you can not use a gmail email');
      return;
    }
    else{
        setEmailError('');
    }

    // Realizar acciones adicionales con los datos del formulario

    // Limpiar los campos del formulario
    setName('');
    setEmail('');
    setPhoneNumber('');
    setSelectedOption('');
    setNameError('');
    setEmailError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-white md:pr-8">
      {submitted ? (
        <p className="text-2xl font-bold mt-10 mb-4">Thank you for submitting the form!</p>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <NameInput value={name} nameError={nameError} onChange={(e) => setName(e.target.value)} />
          <EmailInput value={email} emailError={emailError} onChange={(e) => setEmail(e.target.value)} />
          <PhoneNumberInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <OptionsListbox
            value={selectedOption}
            options={options}
            onChange={setSelectedOption}
          />
          <button
            type="submit"
            className="bg-black text-white rounded px-4 py-2 w-full md:w-52 self-end"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
