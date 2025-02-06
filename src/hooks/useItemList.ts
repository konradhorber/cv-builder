import React, { useState } from "react";

export function useItemList<T>(initialItems: T[]) {
    const [items, setItems] = useState(initialItems);

    const addItem = (newItem: T) => {
        setItems([
            ...items,
            newItem
        ]);
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const updateItem = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setItems(
            items.map((item, i) => 
                i === index 
                    ? { ...item, [e.target.name]: e.target.value }
                    : item
            )
        );
    };

    return { items, addItem, removeItem, updateItem };
}