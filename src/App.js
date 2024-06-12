export default function ButtonVariants() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem 1rem',
      }}
    >
      <span
        className="wrapper"
        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
      >
        <button
          className="button-create"
          style={{
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.4rem',
          }}
        >
          Create
        </button>
        <button
          className="button-update"
          style={{
            backgroundColor: 'orange',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.4rem',
          }}
        >
          Update
        </button>
        <button
          className="button-delete"
          style={{
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.4rem',
          }}
        >
          Delete
        </button>
      </span>
      <span>
        <button
          style={{
            backgroundColor: 'lightblue',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.4rem',
          }}
        >
          Testing Tailwind
        </button>
      </span>
    </div>
  )
}
