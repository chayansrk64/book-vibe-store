import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {

    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState("")

    const data = useLoaderData()
    console.log(data);


    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));

        const myReadList = data?.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)

    }, [data])


    const handleSort = (type) => {
        setSort(type)
        if(type === 'pages'){
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortedByPage) 
        }
        if(type === 'ratings'){
            const sortedByRatings = [...readList].sort((a, b)=> a.rating - b.rating)
            setReadList(sortedByRatings)
        }
    }
    


  return (
        <>
            <title>book-vibe-store-readlist</title>
            <div className="mb-20 text-end">
                <details className="dropdown">
                <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> handleSort("pages")}>pages</a></li>
                    <li><a onClick={()=> handleSort("ratings")}>ratings</a></li>
                </ul>
                </details>
            </div>
          <Tabs>
      <TabList>
        <Tab>Read Book List</Tab>
        <Tab>Wish List</Tab>
        <Tab>Title 3</Tab>
      </TabList>

      <TabPanel>
        <h2 className="text-xl">Read Book List</h2>
        <div className="my-10">
            {
                readList?.map(book => <div>
                    <div className="flex justify-between items-center border my-3 rounded-xl px-4">
                        <div className="flex items-center gap-3 py-2">
                            <img className="h-[100px]" src={book.image} alt="" />
                            <h3>{book.bookName}</h3>
                            <p>Pages: {book.totalPages}</p>
                            <p>Ratings: {book.rating}</p>
                        </div>
                        <div><button className="btn btn-danger">Delete</button></div>
                    </div>
                </div>)
            }
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Wish List</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
        </>
  );
};

export default ReadList;
