import { useState } from "react";

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupTime, setGroupTime] = useState("");

    function openModal(name, time) {
        setGroupName(name);
        setGroupTime(time);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return { isOpen, groupName, groupTime, openModal, closeModal };
}
