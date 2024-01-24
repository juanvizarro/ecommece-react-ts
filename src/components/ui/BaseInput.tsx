import type { PropsWithChildren } from "react"

interface Props {
    type: 'text'|'password'
    value: 'string'
}

export default function BaseInput ({ type, value }: PropsWithChildren<Props>) {
    const onChange = (e: Event) => {

    }
    return (
        <input type={type} onChange={onChange} value={value} />
    )
}