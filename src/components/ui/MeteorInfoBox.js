import React from 'react'

 const MeteorInfoBox = ({modalInfo}) => {
    return (
        <div className="location-info">
            <ul>
                <li>ID:<strong>{modalInfo.id}</strong></li>
                <li>ID:<strong>{modalInfo.name}</strong></li>
                <li>ID:<strong>{modalInfo.mass}</strong></li>

            </ul>
        </div>
    )
}
export default MeteorInfoBox
