// import React, {useState} from 'react';
//
// const FirstEntry = () => {
//
// const [day, setDay] = useState<number | undefined | string>(undefined);
// const [month, setMonth] = useState<number | undefined | string>(undefined);
// const [year, setYear] = useState<number | undefined | string>(undefined);
// const [isVisible, setVisible] = useState(true);
//
// function handleAge(event: React.FormEvent<HTMLFormElement>){
//     event.preventDefault();
//
//     const savedAge = localStorage.getItem('savedAge');
//
//     const formFields = event.currentTarget.elements as HTMLFormControlsCollection;
//
//     const dayValue: number = parseInt((formFields[0] as HTMLInputElement).value);
//     const monthValue: number = parseInt((formFields[1] as HTMLInputElement).value);
//     const yearValue: number = parseInt((formFields[2] as HTMLInputElement).value);
//
//
//     const birthDate = new Date(dayValue, monthValue - 1, yearValue);
//     const actualDate = new Date();
//
//     let age = actualDate.getFullYear() - birthDate.getFullYear();
//
//     // Sprawdź, czy urodziny już były w bieżącym roku
//     if (actualDate.getTime() < new Date(actualDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()).getTime()) {
//         age -= 1;
//     }
//     localStorage.setItem('savedAge', age.toString());
//
//
//
//     if(savedAge !== null && age >= 18) {
//         setVisible(true);
//
//     } else {
//         setVisible(false);
//     }
//
// }
//
//
//
//     return (
//         <section className='first_entry'>
//             <div>
//                 <h2>Are you of legal drinking age?</h2>
//                 <form onSubmit={(e) => handleAge(e)}>
//                     <div className='form-group'>
//                         <input
//                             type='number'
//                             className='form-age'
//                             name='day'
//                             placeholder='DD'
//                             value={day || ''}
//                             onChange={(e) => setDay(e.target.value)}
//                         />
//                         <input
//                             type='number'
//                             className='form-age'
//                             name='month'
//                             placeholder='MM'
//                             value={month}
//                             onChange={(e) => setMonth(e.target.value)}
//                         />
//                         <input
//                             type='number'
//                             className='form-age'
//                             name='year'
//                             placeholder='YYYY'
//                             value={year}
//                             onChange={(e) => setYear(e.target.value)}
//                         />
//                     </div>
//                     <button className='btn-first_entry' type='submit'>Enter</button>
//                 </form>
//             </div>
//
//         </section>
//     );
// };
//
// export default FirstEntry;

//TODO: POP-UP MA ZNIKAC GDY POJAWIA SIE POZOSTLE SEKCJE

import React, { Dispatch, useState } from 'react';
interface FirstEntryProps {
    setIsVisible: Dispatch<boolean>;
}
const FirstEntry: React.FC<FirstEntryProps> = ({ setIsVisible }) => {
    const [day, setDay] = useState<number | undefined | string>('');
    const [month, setMonth] = useState<number | undefined | string>('');
    const [year, setYear] = useState<number | undefined | string>('');
    const [, setVisible] = useState(true);
    const [, setSavedAge] = useState<string | null>(localStorage.getItem('savedAge'));

    function handleAge(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formFields = event.currentTarget.elements as HTMLFormControlsCollection;

        const dayValue: number = parseInt((formFields[0] as HTMLInputElement).value);
        const monthValue: number = parseInt((formFields[1] as HTMLInputElement).value);
        const yearValue: number = parseInt((formFields[2] as HTMLInputElement).value);

        const birthDate = new Date(yearValue, monthValue - 1, dayValue);
        const actualDate = new Date();

        let age = actualDate.getFullYear() - birthDate.getFullYear();

        // Sprawdź, czy urodziny już były w bieżącym roku
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
        <section className='first_entry'>
            <div>
                <h2>Are you of legal drinking age?</h2>
                <form onSubmit={(e) => handleAge(e)}>
                    <div className='form-group'>
                        <input
                            type='number'
                            className='form-age'
                            name='day'
                            placeholder='DD'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                        <input
                            type='number'
                            className='form-age'
                            name='month'
                            placeholder='MM'
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        />
                        <input
                            type='number'
                            className='form-age'
                            name='year'
                            placeholder='YYYY'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <button className='btn-first_entry' type="submit">Enter</button>
                </form>
            </div>
        </section>
    );
};

export default FirstEntry;
