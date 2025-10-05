import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // }, [])

    // const booksPromise = fetch('booksData.json').then(res => res.json())


    return (
        <div>
            <h3 className='text-3xl font-semibold my-3'>Books</h3>
            {/* <Suspense fallback={<span>LOADING...</span>}>
                <Book booksPromise={booksPromise}></Book>
            </Suspense> */}
            <Suspense fallback={<span>LOADING...</span>}>
                {
                    booksData.map(singleBook => <Book singleBook={singleBook} key={singleBook.bookId}></Book>)
                }
            </Suspense>
        </div>
    );
};

export default Books;