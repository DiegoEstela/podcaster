import { Input } from "./index.style"

interface IInputSearch {
    value: string,
    setInputSearch: React.Dispatch<React.SetStateAction<string>>,
    text: string
}

function InputSearch({ value, setInputSearch, text }: IInputSearch) {
    return (
        <Input value={value || ""} onChange={(e) => setInputSearch(e.target.value)} type='text' placeholder={text} />

    )
}

export default InputSearch