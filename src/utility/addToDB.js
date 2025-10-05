

const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem('readList')

    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData;
    }else {
        return [];
    }
}


const addStoredDB = (id) => {
    const storedBookData = getStoredBook()

    if(storedBookData.includes(id)){
        alert("This book is exist")
    }else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem('readList', data)
        alert('Book Added To the Read List')
    }

}

export {addStoredDB, getStoredBook};