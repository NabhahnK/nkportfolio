import React from "react";
import NavTabs from './NavTabs';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header className="d-flex justify-content-between px-4">
            <h1>Nabhahn Kamaal</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}
