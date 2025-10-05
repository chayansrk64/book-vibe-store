import React, { use } from 'react';
import { Star } from 'lucide-react';

const Book = ({singleBook}) => {
    // const allBooks = use(booksPromise)
    // console.log(allBooks);
    console.log(singleBook);
    const {bookName, category, publisher, author, image, rating, review, tags, yearOfPublishing} = singleBook;

    return (
        <div className="card bg-white text-black shadow-sm p-4 ">
        <div className='bg-[#F3F3F3] rounded-xl py-10'>
            <figure >
            <img
            className='w-[124px] h-[166px] mx-auto'
            src={image}
            alt="Shoes" />
            </figure>
        </div>
        <div className="card-body">
            <div className='flex items-center gap-2'>
                {
                    tags.map(tag => <span className='bg-green-100 px-3 py-1 rounded-2xl text-green-500 font-semibold'>{tag}</span>)
                }
            </div>
            <h2 className="card-title">
                {bookName}
                <div className='badge badge-secondary'>{yearOfPublishing}</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p>By : {author}</p>
            <div className="card-actions justify-end items-center border-t-2 border-dashed border-[#13131326]">
                <div className='me-6 font-semibold pt-2'>{category}</div>
                <div className='flex items-center gap-1 font-semibold pt-2'>{rating}  <Star /></div>
            </div>
        </div>
        </div>
    );
};

export default Book;