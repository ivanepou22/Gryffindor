import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import './Admin.css'
import Dasboard from './Dasboard'

function Admin() {

    return (
        <div className="admin-container">
            <Dasboard />
        </div>
    )
}

export default Admin
