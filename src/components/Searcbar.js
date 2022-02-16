import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './searchbar.css'

function Searchbar({ placeholder, data }) {
    const [search, setSearch] = useState("");

    const filteredBooks = data.filter((value) => {
        return value.title.toLowerCase().includes(search.toLowerCase()) ||
            value.author.toLowerCase().includes(search.toLowerCase())
    })

    const deleteSearch = () => {
        setSearch("")
    }
    return (
        <div className='search-bar'>
            <div className='search'>
                <div className='search-inputs'>
                    <div >
                        <TextField
                            className='text-field'
                            type="text"
                            placeholder={placeholder}
                            data={data}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                        />
                    </div>
                    <div className='search-icon'>
                        {search.length === 0 ? <SearchIcon /> : <CloseIcon onClick={deleteSearch} />}
                    </div>
                </div>
            </div>
            <div className='search-list'>
                <div className='list'>
                    {filteredBooks.map((value, key) => {
                        return (
                            <div className='book'>
                                <div className='book-title'>
                                    <a className='value-item' href={value.link} target="_blank" rel='noreferrer'>
                                        <p>{value.title}</p>
                                    </a>
                                    <p>{value.author}</p>
                                </div>
                                <a href={value.link} target="_blank" rel='noreferrer'>
                                    <img className='image' src={value.imageLink} alt="" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Searchbar;
