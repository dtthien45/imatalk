import { truncateString } from "../../utils/Utils";
import "./style.scss";
import React from "react";

export default function ({ repliedMessage }) {
    if (!repliedMessage) return null;
    const truncatedUserName = truncateString(repliedMessage.senderName, 10);
    const truncatedMessage = truncateString(repliedMessage.messageContent, 10);
    return (
        <div className="ReplyTo">
            <p className="sender-name">Replied to <b>{truncatedUserName}</b></p>
            <p className="replied-message-content">{truncatedMessage}</p>
        </div>
    )
}