export default function TextInput({
    label = '',
    value = '',
    onChange = () => { },
    disabled = false,
    placeholder = ''
}) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                type="text" placeholder={placeholder}
                className={`input input-primary input-bordered w-full`}
                disabled={disabled}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </label>
    );
}
