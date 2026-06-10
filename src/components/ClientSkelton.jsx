export default function ClientSkeleton() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-20 animate-pulse'>
      {[...Array(8)].map((_, i) => (
        <div key={i} className='h-20 bg-gray-300 rounded'></div>
      ))}
    </div>
  )
}
