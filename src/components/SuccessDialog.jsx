export default function SuccessDialog({ onClose, title = 'Success!', message }) {
  return (
    <div
      className='p-6 max-w-sm w-full bg-white text-center rounded-lg shadow-xl border-t-4 border-emerald-500'
    >
      {/* Ek Sunder Green Check Icon */}
      <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 mb-4'>
        <span className='text-emerald-600 text-2xl'>✓</span>
      </div>

      <h3 className='text-lg font-bold text-slate-800'>{title}</h3>
      <p className='text-sm text-slate-600 mt-2'>{message}</p>

      <button
        onClick={onClose}
        className='mt-5 w-full inline-flex justify-center rounded-md border border-transparent bg-emerald-600
          px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none'
      >
        Awesome
      </button>
    </div>
  )
}
