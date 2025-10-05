import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const allBooks = useLoaderData()
    //  console.log(allBooks);
    const {id} = useParams()
    const bookData = allBooks.find(book => book.bookId === parseInt(id))
    console.log(bookData);

    const {bookName, image} = bookData;
    

    const handleMarkAsRead = (id) => {
        // store with id
        // store as array or collection 
        // check if the id is already exist if exist then do not store and show an alert
        // if not then push the id into the array or collection
        addStoredDB(id)
    }
     

    return (
        <div className='my-10'>
            <img className='w-48' src={image} alt="" />
            <h4 className='text-3xl my-4'>{bookName}</h4>
            <div>
                <button onClick={() => handleMarkAsRead(id)} className='btn btn-secondary me-4'>Mark as Read</button>
                <button className='btn btn-primary'>Add to Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;