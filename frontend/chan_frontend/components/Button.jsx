export default function Button({ children, onClick, type = "primary" }) {
  if(type === 'primary') {
    return (
      <button onClick={onClick} className="btn btn-primary w-full mt-2">
        {children}
      </button>
    )
  }
  else if(type === 'transparent') {
  return (
    <button onClick={onClick} className="btn btn-primary bg-transparent no-animation w-full mt-2">
      {children}
    </button>
  )
  }
  else if(type === 'white') {
  return (
    <button onClick={onClick} className="btn btn-primary bg-white no-animation w-full mt-2">
      {children}
    </button>
  )
  }
  else if(type === 'disabled') {
  return (
    <button onClick={onClick} className="btn btn-primary opacity-50 cursor-not-allowed no-animation w-full mt-2">
      {children}
    </button>
  )
  }
}
