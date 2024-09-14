export function InputBox({label,placeholder,onChange}){
    return <div className="text-sm font-medium text-left py-2">
        <div>
            {label}
        </div>
        <input onChange= {onChange} type="text"placeholder={placeholder} className="w-full h-8 px-1  border rounded border-slate-200" />
    </div>

}