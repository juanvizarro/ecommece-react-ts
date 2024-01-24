import type { PropsWithChildren } from "react"

interface Props {
    text: string
    isActive: boolean
}
export default function BaseButton ({ children, text, isActive }: PropsWithChildren<Props>) {
    return (
        <button className={`bg-primary font-bold ${isActive && 'text-red'}`}>{children || text}</button>
    )
} 