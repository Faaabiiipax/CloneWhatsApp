import React from "react";
import './ChatListitem.css';

export default () => {
    return(
        <div className="chatListitem">
            <img className="chatListitem--avatar" src="https://www.w3schools.com/w3css/img_avatar2.png" alt="" />
            <div className="chatListitem--lines">
                <div className="chatListitem--line">
                    <div className="chatListitem--name">Bonieky Lacerda</div>
                    <div className="chatListitem--date">19:00</div>
                </div>
                <div className="chatListitem--line">
                    <div className="chatListitem--lastMsg">
                        <p>Opa, tudo bem ?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}