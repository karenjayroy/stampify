import React from 'react'
import {Link} from 'react-router-dom';

const StampCard = props => (
    <div>
        <table>
            <tr>
                <th>{props.storeName}</th>
            </tr>
            <tr>
                <td>{props.stampCount}</td>
            </tr>
        </table>
    </div>
)

export default StampCard;