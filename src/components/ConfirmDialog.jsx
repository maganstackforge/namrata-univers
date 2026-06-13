export default function ({ onClose, onConfirm, title, message, variant }) {
  //on the basis of variant change the button color
  const buttonColors = {
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
    info: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white',
    success: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 text-white',
  }
  const handleConfirm = () => {
    onConfirm() // execute the process
  }

  return (
    <div className='p-6 max-width-md w-full bg-[#f2f8fa] rounded-lg'>
      {/* titled */}
      <h3 className='text-xl font-bold text-slate-800'>{title}</h3>
      {/* Warning Message */}
      <p className='text-md text-slate-600 mt leading-relaxed'>{message}</p>
      {/* Action Buttons */}
      <div className='flex justify-end gap-3 mt-6'>
        {/* Cancel Button */}
        <button
          onClick={onClose}
          className='px-4 py-2 rounded-lg bg-gray-200 text-slate-700 font-medium hover:bg-gray-300
            transitions-colors'
        >
          Cancel
        </button>

        {/* dynamic confirm button */}
        <button
          onClick={handleConfirm}
          className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2
            focus:ring-offset-2 ${buttonColors[variant]}`}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}
