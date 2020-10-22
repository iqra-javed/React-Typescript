import React, { useState, useRef } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<number | null>(5);
    const [initialValue, setInitialValue] = useState<{ text: string }>({ text: 'hello' }) // can pass object directly like this as the type or declare an interface such as TextNode and pass that instead
    const inputRef = useRef<HTMLInputElement>(null); // hover over the ref on line 28 to see what type to use for useRef

    setCount(null)
    return (
        <div>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}
