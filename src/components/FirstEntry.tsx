import React, { Dispatch, useState } from 'react';
interface FirstEntryProps {
    isVisible: boolean;
    setIsVisible: Dispatch<boolean>;
}
const FirstEntry: React.FC<FirstEntryProps> = ({ isVisible, setIsVisible }) => {
    const [day, setDay] = useState<number | undefined | string>('');
    const [month, setMonth] = useState<number | undefined | string>('');
    const [year, setYear] = useState<number | undefined | string>('');
    const [, setVisible] = useState(true);
    const [, setSavedAge] = useState<string | null>(localStorage.getItem('savedAge'));
    const [isValid, setIsValid] = useState(true);

    function handleAge(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formFields = event.currentTarget.elements as HTMLFormControlsCollection;

        const dayValue: number = parseInt((formFields[0] as HTMLInputElement).value);
        const monthValue: number = parseInt((formFields[1] as HTMLInputElement).value);
        const yearValue: number = parseInt((formFields[2] as HTMLInputElement).value);

        if (dayValue > 31 || monthValue > 12 || yearValue < 1900) {
            setIsValid(false);
            return;
        } else {
            setIsValid(true);
        }

        const birthDate = new Date(yearValue, monthValue - 1, dayValue);
        const actualDate = new Date();

        let age = actualDate.getFullYear() - birthDate.getFullYear();

        // sprawdzam czy uzytkownim mial juz urodziny w tym roku
        if (actualDate.getTime() < new Date(actualDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()).getTime()) {
            age -= 1;
        }

        if (age >= 18) {
            setIsVisible(true);
            setVisible(true);
            setSavedAge(age.toString());
            localStorage.setItem('savedAge', age.toString());
        } else {
            setIsVisible(false);
            setVisible(false);
            setSavedAge(null);
            localStorage.removeItem('savedAge');
        }
    }


    return (
        <section className='first_entry' style={{ display: isVisible ? 'none' : 'block'}}>
            <div className='container-first_entry'>
                <h1>COCKTAIL SEARCH</h1>

                <form onSubmit={(e) => handleAge(e)}>
                    <h2>Are you of legal drinking age?</h2>
                    <div className='form-group'>
                        <input
                            type='number'
                            className={`input-form-age ${isValid ? '' : 'invalid'}`}
                            name='day'
                            placeholder='DD'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                        <input
                            type='number'
                            className={`input-form-age ${isValid ? '' : 'invalid'}`}
                            name='month'
                            placeholder='MM'
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        />
                        <input
                            type='number'
                            className={`input-form-age ${isValid ? '' : 'invalid'}`}
                            name='year'
                            placeholder='YYYY'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <button className='btn-first_entry' type="submit">Enter</button>
                    <p className='term_and_conditions'>By entering this site, I accept Privacy Policy and Terms & Conditions</p>
                </form>
            </div>
        </section>
    );
};

export default FirstEntry;
