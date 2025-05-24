'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    nachricht: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulardaten:', form);
    alert('Nachricht gesendet!');
    setForm({ vorname: '', nachname: '', email: '', nachricht: '' });
  };

  return (
    <div>
      <h2 className='font-medium text-xl md:text-4xl my-8'># Kontakt</h2>
      <p className='mb-7'>
        Diese Komponente zeigt ein einfaches Kontakt­formular. Du kannst
        Vorname, Nachname, E-Mail und eine Nachricht eingeben. Jeder Tastendruck
        speichert deinen Text im Hintergrund. Wenn du auf „Senden“ klickst,
        verhindert die Komponente, dass die Seite neu lädt, zeigt eine Meldung
        „Nachricht gesendet!“, schreibt alle Daten in die Konsole und löscht
        dann alle Eingabefelder.
      </p>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1' htmlFor='vorname'>
            Vorname
          </label>
          <input
            id='vorname'
            name='vorname'
            type='text'
            value={form.vorname}
            onChange={handleChange}
            required
            className='block w-full border border-gray-300 rounded-md px-3 py-2 custom-focus'
            aria-label='Vorname eingeben: dieses Feld aktualisiert den Wert "vorname" im Formular-Status'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1' htmlFor='nachname'>
            Nachname
          </label>
          <input
            id='nachname'
            name='nachname'
            type='text'
            value={form.nachname}
            onChange={handleChange}
            required
            className='block w-full border border-gray-300 rounded-md px-3 py-2 custom-focus'
            aria-label='Nachname eingeben: dieses Feld aktualisiert den Wert "nachname" im Formular-Status'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-1' htmlFor='email'>
            E-Mail
          </label>
          <input
            id='email'
            name='email'
            type='email'
            value={form.email}
            onChange={handleChange}
            required
            className='block w-full border border-gray-300 rounded-md px-3 py-2 custom-focus'
            aria-label='E-Mail-Adresse eingeben: dieses Feld aktualisiert den Wert "email" im Formular-Status'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium mb-1' htmlFor='nachricht'>
            Nachricht
          </label>
          <textarea
            id='nachricht'
            name='nachricht'
            rows={4}
            value={form.nachricht}
            onChange={handleChange}
            required
            className='block w-full border border-gray-300 rounded-md px-3 py-2 custom-focus'
            aria-label='Nachricht eingeben: dieses Feld aktualisiert den Wert "nachricht" im Formular-Status'
          />
        </div>

        <button
          type='submit'
          className='send-button custom-focus hover:cursor-pointer hover:border-4 hover:border-black flex items-center gap-2 px-4 py-2 bg-[#a9dced] text-black rounded-full'
          aria-label='Formular absenden: sendet die eingegebenen Daten und leert alle Felder'>
          Senden
        </button>
      </form>
    </div>
  );
}
